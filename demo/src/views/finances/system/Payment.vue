<template>
  <div class="page-wrapper">
    <div class="page-container-header">
      <div class="page-container-header-left">
        <i class="el-icon-menu"></i> <span >支付方式设置</span>
      </div>
      <div class="page-container-header-middle">

      </div>
      <div class="page-container-header-right">
        <el-button size="small"  type="primary"><i class="el-icon-plus"></i> 添加参数</el-button>
      </div>
    </div>
    <div class="page-content-container">
      <el-card class="page-content-container-left">
        <el-input placeholder="输入关键字进行过滤" v-model="filterText"></el-input>
        <el-tree ref="tree" :data="data" node-key="code" default-expand-all :expand-on-click-node="false" :render-content="renderContent" :filter-node-method="filterNode"> </el-tree>
      </el-card>
      <el-card class="page-content-container-right">
        <el-form ref="form" :model="form" label-width="110px">
          <el-form-item label="支付方式编码">
            <el-input v-model="form.code" placeholder="lab_autocheck_time"></el-input>
          </el-form-item>
          <el-form-item label="支付方式名称">
            <el-input v-model="form.name" placeholder="实验室自动审核时间"></el-input>
          </el-form-item>
          <el-form-item label="备注">
            <el-input v-model="form.remark" type="textarea"></el-input>
          </el-form-item>
          <el-form-item label="是否有效">
            <el-switch v-model="form.state"></el-switch>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">提交</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </div>
</template>
<script>
  let id = 1000;
  export default {
    name: 'ElTreeData',
    data(){
      const data = [];
      return {
        filterText: '',
        form: {
              "code":"2101",
              "flag":false,
              "name":"科研待回款",
              "params":"",
              "remark":"",
              "state":false
            },
        data: [
        {
          "code":"1",
          "flag":false,
          "name":"临床",
          "params":"",
          "remark":"",
          "state":false,
          "children":[
          {
            "code":"11",
            "flag":false,
            "name":"个人",
            "params":"",
            "remark":"",
            "state":false,
            "children":[
            {
              "code":"1101",
              "flag":false,
              "name":"微信",
              "params":"https://www.aegicare.com/static/new/images/logo_new.png",
              "remark":"",
              "state":false
            },
            {
              "code":"1102",
              "flag":false,
              "name":"支付宝",
              "params":"https://www.aegicare.com/static/new/images/logo_new.png",
              "remark":"",
              "state":false
            },
            {
              "code":"1103",
              "flag":false,
              "name":"POS机",
              "params":"",
              "remark":"",
              "state":false
            },
            {
              "code":"1104",
              "flag":false,
              "name":"银行转账",
              "params":"公司名:安吉康尔(深圳)科技有限公司;开户行:招商银行深圳高新园支行;账户:150000000000000",
              "remark":"",
              "state":false
            },
            {
              "code":"1105",
              "flag":false,
              "name":"开放式二维码",
              "params":"https://www.aegicare.com/static/new/images/logo_new.png",
              "remark":"",
              "state":false
            },
            {
              "code":"1106",
              "flag":false,
              "name":"家属代付",
              "params":"",
              "remark":"",
              "state":false
            },
            {
              "code":"1107",
              "flag":false,
              "name":"临床免费",
              "params":"",
              "remark":"",
              "state":false
            },
            ]
          },
          {
            "code":"12",
            "flag":false,
            "name":"机构代理",
            "params":"",
            "remark":"",
            "state":false,
            "children":[
            {
              "code":"1201",
              "flag":false,
              "name":"代理",
              "params":"",
              "remark":"",
              "state":false
            },
            {
              "code":"1202",
              "flag":false,
              "name":"入院",
              "params":"",
              "remark":"",
              "state":false
            },
            {
              "code":"1203",
              "flag":false,
              "name":"临床医生待回款",
              "params":"",
              "remark":"",
              "state":false
            },
            {
              "code":"1204",
              "flag":false,
              "name":"临床机构待回款",
              "params":"",
              "remark":"",
              "state":false
            },
            ]
          },
          ]
        },
        {
          "code":"2",
          "flag":false,
          "name":"科研",
          "params":"",
          "remark":"",
          "state":false,
          "children":[
          {
            "code":"21",
            "flag":false,
            "name":"机构合作",
            "params":"",
            "remark":"",
            "state":false,
            "children":[
            {
              "code":"2101",
              "flag":false,
              "name":"科研待回款",
              "params":"",
              "remark":"",
              "state":false
            },
            {
              "code":"2102",
              "flag":false,
              "name":"科研免费",
              "params":"",
              "remark":"",
              "state":false
            }
            ]
          },
          ]
        },


        ],
      };
    },
    props: {

    },
    watch: {
      filterText(val) {
        this.$refs.tree.filter(val);
      }
    },
    mounted() {

    },
    methods:{
      onSubmit() {
        console.log('submit!');
      },
      renderContent(h, { node, data, store }) {
        return h("span", {
          class: "custom-tree-node"
        }, h("span", {
          class: "tree-item-text"
        }, data.name));
      },
      filterNode(value, data) {
        if (!value) return true;
        return data.label.indexOf(value) !== -1;
      }
    },
    computed:{

    },
    created(){

    }
  };
</script>
<style >

</style>