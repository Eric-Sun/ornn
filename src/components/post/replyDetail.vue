<template>
  <Card>
    <div slot="title">回复详情</div>
    <div>
      <Row>
        <Col span="4">内容</Col>
        <Col span="12">{{reply.content}}</Col>
      </Row>
      <Row>
        <Col span="4">发帖用户</Col>
        <Col v-if="reply.userId!=reply.postUserId" span="12">{{reply.userName}}</Col>
        <Col v-if="reply.userId==reply.postUserId" style="color:red" span="12">{{reply.userName+"[楼主]"}}</Col>
      </Row>
      <Row>
        <Col span="4">回复时间</Col>
        <Col span="12">{{getTime}}</Col>
      </Row>
    </div>
    <Row>回复列表</Row>
    <div>
      <Table border :columns="cols" :data="reply.replyList"></Table>
    </div>
    <Col :span="12">
      <div style="margin: 10px;overflow: hidden">
        <div style="float: right;">
          <Page :total="count" :current="1" @on-change="changePage" :page-size="size"></Page>
        </div>
      </div>
    </Col>
  </Card>
</template>
<script>
import * as api from "../../api/common.js";
import * as fn from "../../until/common.js";
export default {
  data() {
    return {
      postId: 0,
      replyId: 0,
      reply: {},
      replies: [],
      count: 0,
      currentPageNum: 0,
      size: 20,
      cols: [
        {
          // type: 'index',
          title: "回复用户",
          width: 150,
          align: "center",
          render: (h, param) => {
            console.log(param.row);
            var name;
            if (param.row.userId == param.row.postUserId) {
              name = param.row.userName + "[楼主]";
              return h(
                "div",
                {
                  style: {
                    color: "red"
                  }
                },
                name
              );
            } else {
              name = param.row.userName;
              return h("div", name);
            }
          }
        },
        {
          // type: 'index',
          title: "回复内容",
          key: "content",
          width: 1000
        },
        {
          title: "操作",
          key: "action",
          align: "center",
          width: 150,
          render: (h, params) => {
            let id = params.row.goods_id;
            let status = params.row.status;
            return h("div", [
              fn.newDel("postList", h, this.delReply, {
                replyId: params.row.replyId,
                userId: params.row.userId,
                postId: params.row.postId
              })
            ]);
          }
        }
      ]
    };
  },
  created() {
    this.postId = this.$route.query.postId;
    this.replyId = this.$route.query.replyId;
    this.initData();
  },
  computed: {
    getTime() {
      return fn.getTime(this.reply.createtime);
    }
  },
  methods: {
    initData() {
      let that = this;
      let searchParams = {
        act: "admin.reply.detail",
        postId: this.postId,
        replyId: this.replyId,
        pageNum: this.currentPageNum,
        size: this.size
      };
      api.request(searchParams).then(response => {
        that.reply = response;
        that.count = response.replyListSize;
      });
    },
    delReply({ replyId, userId, postId }) {
      var that = this;
      that.$Modal.confirm({
        title: "请再次确认",
        content:
          "请确认是否要进行<font size=3 color=red>用户回复删除</font>操作",
        onOk: () => {
          let that = this;
          let searchParams = {
            act: "admin.reply.delete",
            postId: postId,
            userId: userId,
            replyId: replyId
          };
          api.request(searchParams).then(response => {
            that.initData();
          });
        }
      });
    },
    changePage(pageNum) {
      pageNum = pageNum ? pageNum : 1;
      this.currentPageNum = pageNum - 1;
      this.initData({ pageNum: this.currentPageNum });
    }
  }
};
</script>