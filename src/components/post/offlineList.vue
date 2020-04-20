<template>
  <Card>
    <div>
      <Table border :columns="cols" :data="tableData"></Table>
    </div>

    <Row>
      <Col :span="12">
        <div style="margin: 10px;overflow: hidden">
          <div style="float: right;">
            <Page :total="count" :current="1" @on-change="changePage" :page-size="size"></Page>
          </div>
        </div>
      </Col>
    </Row>
  </Card>
</template>
<script>
import { mapGetters } from "vuex";
import * as fn from "../../until/common.js";
import * as api from "../../api/common.js";
export default {
  data() {
    return {
      cols: [
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
        },
        {
          title: "抓取回复数量",
          align: "center",
          render: function(h, param) {
            return h(
              "div",
              {
                style: {
                  color: "red",
                  fontSize: "14px"
                }
              },
              param.row.fReplyCount
            );
          }
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
            let undoDeleteBtn = fn.newUndoActionButton(
              "上架",
              h,
              this.onlinePost,
              postId
            );

            let deleteBtn = fn.newFatalActionButton(
              "删除",
              h,
              this.deletePost,
              postId
            );

            return h("div", [undoDeleteBtn, deleteBtn]);
          }
        }
      ],
      tableData: [],
      pageNum: 0,
      size: 20,
      count: 0
    };
  },
  created() {
    this.initData({});
  },
  methods: {
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
              that.initData({ pageNum: this.getPageNum() });
            });
        },
        onCancel: () => {}
      });
    },
    onlinePost(postId) {
      var that = this;
      that.$Modal.confirm({
        title: "请再次确认",
        content: "请确认是否要进行<font size=3 color=red>帖子上线</font>操作",
        onOk: () => {
          let params = {
            act: "admin.post.online",
            barId: process.env.BAR_ID,
            postId: postId
          };
          api.request(params).then(response => {
            that.initData({ pageNum: this.getPageNum() });
          });
        }
      });
    },
    changePage(pageNum) {
      this.pageNum = pageNum ? pageNum : 1;
      this.initData({ pageNum: pageNum - 1 });
    },
    getPageNum() {
      return this.pageNum == 0 ? 0 : this.pageNum - 1;
    },
    initData(searchParams) {
      var that = this;
      let params = {
        act: "admin.post.offlineList",
        barId: process.env.BAR_ID,
        pageNum: this.pageNum,
        size: this.size
      };
      let searchData = Object.assign(params, searchParams);

      api.request(searchData).then(response => {
        that.tableData = response.data;
        that.count = response.count;
        console.log(that.tableData);
      });
    }
  }
};
</script>