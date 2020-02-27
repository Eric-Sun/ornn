<template>
  <Card>
    <div slot="title">帖子详情</div>
    <div>
      <Row>
        <Col span="4">标题</Col>
        <Col span="12">{{post.title}}</Col>
      </Row>
      <Row>
        <Col span="4">内容</Col>
        <Col span="12">{{post.content}}</Col>
      </Row>
      <Row>
        <Col span="4">发帖用户</Col>
        <Col span="12">{{post.userName}}</Col>
      </Row>
      <Row>
        <Col span="4">状态</Col>
        <Col span="12">{{post.status==0?"正常":"下架"}}</Col>
      </Row>
      <Row>
        <Col span="4">精华状态</Col>
        <Col span="12">{{post.star==0?"正常帖子":"精华帖子"}}</Col>
      </Row>
      <Row>
        <Col span="4">发帖时间</Col>
        <Col span="12">{{getTime}}</Col>
      </Row>
    </div>
    <Row>回复列表</Row>
    <div>
      <Table border :columns="cols" :data="replies"></Table>
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
      post: {},
      replies: [],
      count: 0,
      currentPageNum: 0,
      size: 20,
      cols: [
        {
          // type: 'index',
          title: "回复用户",
          key: "userName",
          width: 150,
          align: "center"
        },
        {
          // type: 'index',
          title: "回复内容",
          key: "content"
        },
        {
          title: "子回复数量",
          align: "center",
          width: 100,
          render: (h, param) => {
            if (param.row.replyListSize == 0) {
              return h("div", 0);
            } else {
              return h(
                "Button",
                {
                  props: {
                    type: "default"
                  },
                  on: {
                    // click: this.starPost(params.row.postId)
                    click: () => this.toReplyDetail(param.row.replyId)
                  }
                },
                param.row.replyListSize
              );
            }
          }
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
    this.initPostData();
    this.initRepliesData();
  },
  computed: {
    getTime() {
      return fn.getTime(this.post.createtime);
    }
  },
  methods: {
    initPostData() {
      let that = this;
      let searchParams = {
        act: "admin.post.detail",
        postId: this.postId
      };
      api.request(searchParams).then(response => {
        that.post = response;
      });
    },
    initRepliesData(otherParams) {
      let that = this;
      let searchParams = {
        act: "admin.reply.list",
        postId: this.postId,
        pageNum: this.currentPageNum,
        size: this.size
      };
      searchParams = Object.assign(searchParams, otherParams);
      api.request(searchParams).then(response => {
        that.replies = response.data;
        that.count = response.count;
        console.log(that.count);
      });
    },
    delReply({ replyId, userId, postId }) {
      let that = this;
      that.$Modal.confirm({
        title: "请再次确认",
        content: "请确认是否要进行<font size=3 color=red>回复删除</font>操作",
        onOk: () => {
          let searchParams = {
            act: "admin.reply.delete",
            postId: postId,
            userId: userId,
            replyId: replyId
          };
          api.request(searchParams).then(response => {
            that.initRepliesData();
          });
        },
        onCancel: () => {}
      });
    },
    changePage(pageNum) {
      pageNum = pageNum ? pageNum : 1;
      this.currentPageNum = pageNum - 1;
      this.initRepliesData({ pageNum: this.currentPageNum });
    },
    toReplyDetail(replyId) {
      this.$router.push({
        path: "/post/replyDetail",
        query: {
          postId: this.postId,
          replyId: replyId
        }
      });
    }
  }
};
</script>