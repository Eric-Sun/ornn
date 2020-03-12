
<template>
  <div>
    <Card>
      <!-- <p slot="title" style="color:#32c5d2">
        <Icon type="locked"></Icon>品牌列表
      </p>
      <router-link slot="extra" to="/pro/brand/add">
        <Icon type="ios-plus"></Icon>添加品牌
      </router-link>-->
      <div style="text-align:right">
        <Form ref="userSearchFrom" :model="formInline" inline>
          <Form-item prop="name">
            <Input type="text" v-model="formInline.name" placeholder="帖子标题"></Input>
          </Form-item>
          <Form-item prop="status">
            <Select
              size="large"
              style="width:100px;height:32px;text-align:left"
              v-model="formInline.status"
              placeholder="状态"
              class="selectSearch"
            >
              <Option value="0">已禁用</Option>
              <Option value="1">正常</Option>
            </Select>
          </Form-item>
          <Form-item>
            <Button type="primary" icon="ios-search" @click="searchData">搜索</Button>
          </Form-item>
        </Form>
      </div>

      <Table border :columns="columns7" :data="tableData"></Table>
      <Row>
        <!-- <Col :span="12">
          <div style="margin: 10px;overflow: hidden">
            <label></label>
            <Select
              size="large"
              style="width:80px"
              rel="showPage"
              :value="pageNum+''"
              :placement="placement"
              @on-change="changePageNum"
            >
              <Option value="10">10</Option>
              <Option value="20">20</Option>
              <Option value="50">50</Option>
              <Option value="100">100</Option>
            </Select>
          </div>
        </Col>-->
        <Col :span="12">
          <div style="margin: 10px;overflow: hidden">
            <div style="float: right;">
              <Page :total="totals" :current="1" @on-change="changePage" :page-size="20"></Page>
            </div>
          </div>
        </Col>
      </Row>
    </Card>
    <Spin size="large" fix v-if="spinShow">加载中</Spin>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import * as fn from "../../until/common.js";
import * as api from "../../api/common.js";
export default {
  data() {
    return {
      curr: 1,
      pageNum: 0,
      modal: false,
      id: 0,
      tableData: [],
      spinShow: false,
      columns7: [
        {
          // type: 'index',
          title: "帖子id",
          key: "postId",
          width: 80,
          align: "center"
        },
        {
          title: "帖子标题",
          // key: "title",
          width: 200,
          render: function(h, param) {
            return h(
              "router-link",
              {
                props: {
                  to: {
                    path: "/post/detail",
                    query: { postId: param.row.postId }
                  }
                }
              },
              param.row.title
            );
          }
        },
        {
          title: "帖子内容",
          width: 500,
          render: function(h, param) {
            return h("div", param.row.content);
          }
        },
        {
          title: "发帖用户",
          key: "userName",
          align: "center"
          // render(h, param) {
          //     return h('Icon', {
          //         props: {
          //             type: param.row.status == 1 ? 'checkmark-round' : 'close-circled',
          //         },
          //         style: {
          //             color: param.row.status == 1 ? '#00cc66' : '#ff3300'
          //         }
          //     });
          // }
        },
        {
          title: "回复数量",
          align: "center",
          width: 80,
          key: "replyCount"
        },
        {
          title: "状态",
          align: "center",
          width: 80,
          render(h, param) {
            return h("div", param.row.status == 0 ? "正常" : "下线");
          }
        },
        {
          title: "精华状态",
          align: "center",
          width: 80,
          render(h, param) {
            if (param.row.star == 1) return h("div", "加精");
            else return h("div", "正常");
          }
        },
        {
          title: "创建时间",
          // key: "createtime",
          width: 150,
          align: "center",
          render(h, param) {
            return h("div", fn.getTime(param.row.createtime));
          }
        },
        {
          title: "操作",
          key: "action",
          // align: "center",
          render: (h, params) => {
            let id = params.row.id;
            let status = params.row.status;
            let postId = params.row.postId;
            let deleteBtn = fn.newFatalActionButton(
              "删除",
              h,
              this.deletePost,
              postId
            );
            let addStarBtn = fn.newActionButton(
              "加精",
              h,
              this.addStarPost,
              postId
            );
            let deleteStarBtn = fn.newUndoActionButton(
              "取消加精",
              h,
              this.deleteStarPost,
              postId
            );

            let onlineBtn = fn.newActionButton("上架", h, this.online, postId);
            let offlineBtn = fn.newUndoActionButton(
              "下架",
              h,
              this.offline,
              postId
            );
            let btnList = [];
            if (params.row.star == 0) {
              btnList.push(addStarBtn);
            } else {
              btnList.push(deleteStarBtn);
            }

            if (params.row.status == 0) {
              btnList.push(offlineBtn);
            } else {
              btnList.push(onlineBtn);
            }

            btnList.push(deleteBtn);
            return h("div", btnList);
          }
        }
      ],
      formInline: {
        name: "",
        status: ""
      },
      totals: 0
    };
  },
  created() {
    this.dispatch();
  },
  computed: {
    placement() {
      return this.tableData.length > 9 ? "top" : "bottom";
    }
  },
  methods: {
    online(postId) {
      var that = this;
      that.$Modal.confirm({
        title: "请再次确认",
        content: "请确认是否要进行<font size=3 color=red>帖子下线</font>操作",
        onOk: () => {
          api
            .request({
              act: "admin.post.online",
              postId: postId
            })
            .then(response => {
              that.dispatch({pageNum:that.getPageNum()});
            });
        },
        onCancel: () => {}
      });
    },
    offline(postId) {
      var that = this;
      that.$Modal.confirm({
        title: "请再次确认",
        content: "请确认是否要进行<font size=3 color=red>帖子下线</font>操作",
        onOk: () => {
          api
            .request({
              act: "admin.post.offline",
              postId: postId
            })
            .then(response => {
              that.dispatch({pageNum:that.getPageNum()});
            });
        },
        onCancel: () => {}
      });
    },
    deletePost(postId) {
      var that = this;
      that.$Modal.confirm({
        title: "请再次确认",
        content: "请确认是否要进行 <font size=3 color=red>帖子删除</font>操作",
        onOk: () => {
          api
            .request({
              act: "admin.post.delete",
              postId: postId,
              barId: process.env.BAR_ID
            })
            .then(response => {
              this.dispatch({pageNum:this.getPageNum()});
            });
        },
        onCancel: () => {}
      });
    },
    addStarPost(postId) {
      var that = this;
      that.$Modal.confirm({
        title: "请再次确认",
        content: "请确认是否要进行<font size=3 color=red>帖子加精</font>操作",
        onOk: () => {
          api
            .request({
              act: "admin.starPost.add",
              postId: postId
            })
            .then(response => {
              this.dispatch({pageNum:this.getPageNum()});
            });
        },
        onCancel: () => {}
      });
    },
    deleteStarPost(postId) {
      var that = this;
      that.$Modal.confirm({
        title: "请再次确认",
        content: "请确认是否要进行<font size=3 color=red>帖子取消加精</font>操作",
        onOk: () => {
          api
            .request({
              act: "admin.starPost.deleteByPostId",
              postId: postId
            })
            .then(response => {
              this.dispatch({pageNum:this.getPageNum()});
            });
        },
        onCancel: () => {}
      });
    },
    changePage(pageNum) {
      this.pageNum = pageNum ? pageNum : 1;
      this.dispatch({ pageNum: this.pageNum - 1 });
    },
    getPageNum(){
      return this.pageNum-1;
    },
    // changePageNum(num) {
    //   this.pageNum = parseInt(num);
    //   this.dispatch({ pageNum: this.pageNum - 1 });
    // },
    searchData() {
      this.pageNum = 10;
      this.dispatch({
        bname: this.formInline.name,
        bisvalid: this.formInline.status
      });
    },
    info(id) {
      this.modal = true;
      this.id = parseInt(id);
    },
    close() {
      this.modal = false;
    },
    del(id) {
      fn.handleDel(() => {
        api.brandDel({ bid: id }).then(() => {
          fn.notice("品牌删除成功", this.searchData);
        });
      });
    },
    setSta(id, sta) {
      fn.handleSta(
        () => {
          api.brandStat({ bid: id, bisvalid: sta }).then(() => {
            fn.notice("品牌状态更改成功", this.searchData);
          });
        },
        "",
        "您确定要更改当前品牌的状态吗？"
      );
    },
    lo(url, id) {
      this.$router.push({
        path: url,
        query: { id: id }
      });
    },
    dispatch(searchParams) {
      // let defaultParams = {
      //     startCount: 0,
      //     needCount: this.pageNum,
      //     bname:this.formInline.name,
      //     bisvalid:this.formInline.status
      // };
      // api.getBrand(searchData).then((response)=>{
      //     this.tableData = response.datas;
      //     this.totals = response.count;
      // });
      this.tableData = [];
      this.totals = 0;
      this.spinShow = true;
      let defaultParams = {
        act: "admin.post.list",
        barId: process.env.BAR_ID,
        pageNum: 0,
        size: 20
      };

      searchParams = typeof searchParams === "object" ? searchParams : {};
      let searchData = Object.assign(defaultParams, searchParams);

      api.request(searchData).then(response => {
        this.tableData = response.list;
        this.totals = response.count;
        this.spinShow = false;
      });
    }
  }
};
</script>
<style>
.selectSearch .ivu-select-selection {
  height: 32px !important;
}
</style>
