<template>
  <div class="page-wrapper">
    <div class="page-container-header">
      <div class="page-container-header-left">
        <i class="el-icon-menu"></i> <span >系统参数设置</span>
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
        <el-tree ref="tree" :data="data" node-key="id" default-expand-all :expand-on-click-node="false" :render-content="renderContent" :filter-node-method="filterNode"> </el-tree>
      </el-card>
      <el-card class="page-content-container-right">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="英文名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="中文名称">
            <el-input v-model="form.label"></el-input>
          </el-form-item>
          <el-form-item label="参数值">
            <el-input v-model="form.value"></el-input>
          </el-form-item>
          <el-form-item label="数据类型">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="文本类型" value="text"></el-option>
              <el-option label="数字类型" value="number"></el-option>
              <el-option label="可选类型" value="options"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="可选范围">
            <el-input type="textarea" v-model="form.desc"></el-input>
          </el-form-item>
          <el-form-item label="是否有效">
            <el-switch v-model="form.delivery"></el-switch>
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
          "datatype":"text",
          "flag":false,
          "id":1006,
          "label":"公司邮箱",
          "name":"company_email",
          "options":"",
          "pid":0,
          "state":false,
          "value":"info@aegicare.cn"
        },
        data: [
        {
          "datatype":"text",
          "flag":false,
          "id":1002,
          "label":"系统LOGO",
          "name":"company_logo",
          "options":"",
          "pid":0,
          "state":false,
          "value":"https://www.aegicare.com/static/new/images/logo_new.png"
        },
        {
          "datatype":"text",
          "flag":false,
          "id":1001,
          "label":"公司名称",
          "name":"company_name",
          "options":"",
          "pid":0,
          "state":false,
          "value":"安吉康尔"
        },
        {
          "datatype":"text",
          "flag":false,
          "id":1003,
          "label":"系统标题",
          "name":"company_title",
          "options":"",
          "pid":0,
          "state":false,
          "value":"安吉康尔"
        },
        {
          "datatype":"text",
          "flag":false,
          "id":1004,
          "label":"网站备案号",
          "name":"company_beian",
          "options":"",
          "pid":0,
          "state":false,
          "value":"粤ICP备17033470号"
        },
        {
          "datatype":"text",
          "flag":false,
          "id":1005,
          "label":"公司电话",
          "name":"company_telphone",
          "options":"",
          "pid":0,
          "state":false,
          "value":"400-089-0802"
        },
        {
          "datatype":"text",
          "flag":false,
          "id":1006,
          "label":"公司邮箱",
          "name":"company_email",
          "options":"",
          "pid":0,
          "state":false,
          "value":"info@aegicare.cn"
        },
        {
          "datatype":"text",
          "flag":false,
          "id":1007,
          "label":"公司地址",
          "name":"company_adderss",
          "options":"",
          "pid":0,
          "state":false,
          "value":"深圳市龙华区宝能科技园10栋20楼BCD单元"
        },
        {
          "datatype":"",
          "flag":false,
          "id":1000,
          "label":"系统参数",
          "name":"sysconfig",
          "options":"",
          "pid":0,
          "state":false,
          "value":""
        }
        ],
      }
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
      append(data) {
        const newChild = { id: id++, label: 'testtest', children: [] };
        if (!data.children) {
          data.children = []
        }
        data.children.push(newChild);
        this.data = [...this.data]
      },

      remove(node, data) {
        const parent = node.parent;
        const children = parent.data.children || parent.data;
        const index = children.findIndex(d => d.id === data.id);
        children.splice(index, 1);
        this.data = [...this.data]
      },
      renderContent(h, { node, data, store }) {
        return h("span", {
          class: "custom-tree-node"
        }, h("span", {
          class: "tree-item-text"
        }, node.label));
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