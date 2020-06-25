
<template>
  <div>
    <Card>
      <Button type="primary"  @click="showAddTopicModal">添加Topic</Button>
      <Table border :columns="columns7" :data="tableData"></Table>
      <Row>
        <Col :span="12">
          <div style="margin: 10px;overflow: hidden">
            <div style="float: right;">
              <Page :total="totals" :current="1" @on-change="changePage" :page-size="20"></Page>
            </div>
          </div>
        </Col>
      </Row>
      <Modal v-model="addTopicModal" title="添加Topic" @on-ok="addTopic" @on-cancel="hideAddTopicModal">
            <div>
              <Input type="text" v-model="newTopicName">
            </div>
      </Modal>
          <Modal v-model="updateTopicModal" title="更新Topic" @on-ok="updateTopic" @on-cancel="hideUpdateTopicModal">
            <div>
              <Input type="text" v-model="updateTopicName">
            </div>
      </Modal>
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
      addTopicModal: false,
      updateTopicModal:false,
      newTopicName: "",
      tableData:[],
      updateTopicName:"",
      updateTopicId:0,
      columns7: [
        {
          // type: 'index',
          title: "id",
          key: "id",
          width: 60,
          align: "center"
        },
        {
          title: "topic名称",
          key: "name",
          width: 150
        },
        {
          title: "是否默认",
          width: 150,
          render(h, param) {
            return h("div", param.row.isDefault == 0 ? "否" : "是");
          }
        },
        {
          title: "创建时间",
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
            let topicId = params.row.id;
            let topicName = params.row.name;
            let deleteBtn = fn.newFatalActionButton(
              "删除",
              h,
              this.deleteTopic,
              topicId
            );
            let updateBtn = fn.newActionButton(
              "更新",
              h,
              this.showUpdateTopicModal,
              {topicId:topicId,topicName:topicName}
            );
            let btnList = [];
            if (params.row.isDefault == 0) btnList.push(deleteBtn);
            btnList.push(updateBtn)
            return h("div", btnList);
          }
        }
      ]
    };
  },
  created() {
    this.dispatch();
  },
  computed: {},
  methods: {
    dispatch(searchParams) {
      this.tableData = [];
      let defaultParams = {
        act: "admin.topic.list"
      };

      searchParams = typeof searchParams === "object" ? searchParams : {};
      let searchData = Object.assign(defaultParams, searchParams);
      var that = this;
      api.request(searchData).then(response => {
        that.tableData = response.data;
      });
    },
    deleteTopic(topicId) {
      var that = this;
      that.$Modal.confirm({
        title: "请再次确认",
        content:
          "请确认是否要进行<font size=3 color=red>Topic删除操作</font>操作",
        onOk: () => {
          api
            .request({ act: "admin.topic.delete", topicId: topicId })
            .then(response => {
              that.dispatch();
            });
        },
        onCancel: () => {}
      });
    },
    showUpdateTopicModal(params){
        this.updateTopicId=params.topicId;
        this.updateTopicName = params.topicName;
        this.updateTopicModal=true;
    },
    hideUpdateTopicModal(){
        this.updateTopicId=0;
        this.updateTopicModal=false;
    },
    showAddTopicModal() {
      this.addTopicModal = true;
      this.newTopicName = "";
    },
    updateTopic(){
var that = this;
      api
        .request({ act: "admin.topic.update", topicId: this.updateTopicId,topicName: this.updateTopicName })
        .then(response => {
          that.dispatch();
        });
    },
    addTopic() {
      var that = this;
      api
        .request({ act: "admin.topic.add", topicName: this.newTopicName })
        .then(response => {
          that.dispatch();
        });
    },
    hideAddTopicModal() {
      this.addTopicModal = false;
    }
  }
};
</script>
<style>
.selectSearch .ivu-select-selection {
  height: 32px !important;
}
</style>
