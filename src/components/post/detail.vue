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
        <Col span="4">图片</Col>
        <Col span="12">
          <Button v-on:click="showModal">{{post.imgList.length}}张图片</Button>
        </Col>
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
    <Modal v-model="imgModal" title="帖子图片" @on-ok="updateImg" @on-cancel="cancel">
      <div class="demo-upload-list" v-for="item in this.post.imgList">
        <!-- <template v-if="item.status === 'finished'"> -->
          <img :src="item.url" />
          <div class="demo-upload-list-cover">
            <Icon type="ios-eye-outline" @click.native="handleView(item.url)"></Icon>
            <Icon type="ios-trash-outline" @click.native="handleRemove(item)"></Icon>
          </div>
        <!-- </template> -->
        <!-- <template v-else>
          <Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
        </template> -->
      </div>
      <Upload
        ref="upload"
        :show-upload-list="false"
        :default-file-list="defaultList"
        :on-success="handleSuccess"
        :format="['jpg','jpeg','png']"
        :max-size="2048"
        :on-format-error="handleFormatError"
        :on-exceeded-size="handleMaxSize"
        :before-upload="handleBeforeUpload"
        multiple
        type="drag"
        :action="getUploadUrl()"
        :data="uploadData"
        style="display: inline-block;width:58px;"
      >
        <div style="width: 58px;height:58px;line-height: 58px;">
          <Icon type="ios-camera" size="20"></Icon>
        </div>
      </Upload>
      <Modal title="View Image" v-model="visible">
        <img :src="imgUrl" v-if="visible" style="width: 100%" />
      </Modal>
      <!-- <input type="file" id="file" multiple="multiple" @change="handleFile()"  ref="inputer"/> -->
    </Modal>
  </Card>
</template>
<script>
import * as api from "../../api/common.js";
import * as fn from "../../until/common.js";
import config from "../../../config/config.js";

export default {
  data() {
    return {
      defaultList: [],
      imgUrl: "",
      visible: false,
      uploadList: [],

      postId: 0,
      post: {},
      replies: [],
      count: 0,
      currentPageNum: 0,
      size: 20,
      imgModal: false,
      uploadData: {
        act: "img.upload",
        type: 2
      },
      cols: [
        {
          // type: 'index',
          title: "回复用户",
          // key: "userName",
          width: 150,
          align: "center",
          render: (h, param) => {
            var name;
            if (param.row.userId == this.post.userId) {
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
  mounted() {
    // this.uploadList = this.$refs.upload.fileList;
  },
  methods: {
    handleView(url) {
      this.imgUrl = url;
      this.visible = true;
    },
    handleRemove(file) {
      // const fileList = this.$refs.upload.fileList;
      // this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
      // this.uploadList = this.$refs.upload.fileList;
      this.post.imgList.splice(this.post.imgList.indexOf(file), 1);
    },
    handleSuccess(res, file) {
      console.log(res);
      let img = {};
      img.url=res.url;
      img.imgId = res.imgId;
      this.post.imgList.push(img);
    },
    handleFormatError(file) {
      this.$Notice.warning({
        title: "The file format is incorrect",
        desc:
          "File format of " +
          file.name +
          " is incorrect, please select jpg or png."
      });
    },
    handleMaxSize(file) {
      this.$Notice.warning({
        title: "Exceeding file size limit",
        desc: "File  " + file.name + " is too large, no more than 2M."
      });
    },
    handleBeforeUpload() {
      const check = this.uploadList.length < 5;
      if (!check) {
        this.$Notice.warning({
          title: "Up to five pictures can be uploaded."
        });
      }
      return check;
    },
    // handleFile() {
    //   let inputDOM = this.$refs.inputer;
    //   // 通过DOM取文件数据
    //   let fs = inputDOM.files;
    //   var formData = new FormData();
    //   let max_size = 1024 * 1024 * 100;

    //   for (let i = 0; i < fs.length; i++) {
    //     let d = fs[0];
    //     if (d.size <= max_size) {
    //       //文件必须小于100M
    //       //文件必须为文档
    //       formData.append("file", fs[i]); //文件上传处理
    //     } else {
    //       alert("上传文件过大！");
    //       return false;
    //     }
    //   }
    //   formData.append("act", "img.upload");
    //   formData.append("type", 2);
    //   console.log(formData.get("files"));
    //   api.requestUploadFile(formData).then(response => {
    //     that.post = response;
    //   });
    // },
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
    updateImg() {
      let imgIdList = [];
      var that = this;
      for (var index in this.post.imgList) {
        imgIdList.push(this.post.imgList[index].imgId);
      }
      console.log(JSON.stringify(imgIdList));
      api
        .request({
          act: "admin.post.updateImg",
          postId: this.postId,
          imgIdListStr: JSON.stringify(imgIdList)
        })
        .then(response => {
          // that.post = response;
          that.initPostData();
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
    getUploadUrl() {
      return config.apiDomain;
    },
    showModal() {
      this.imgModal = true;
    },
    changePage(pageNum) {
      pageNum = pageNum ? pageNum : 1;
      this.currentPageNum = pageNum - 1;
      this.initRepliesData({ pageNum: this.currentPageNum });
    },
    cancel() {
      this.imgModal = false;
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