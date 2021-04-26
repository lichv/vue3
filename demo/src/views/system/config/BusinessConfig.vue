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
          <el-form-item label="英文标识">
            <el-input v-model="form.name" placeholder="lab_autocheck_time"></el-input>
          </el-form-item>
          <el-form-item label="中文名称">
            <el-input v-model="form.label" placeholder="实验室自动审核时间"></el-input>
          </el-form-item>
          <el-form-item label="参数值">
            <el-input v-model="form.value" placeholder="12h"></el-input>
          </el-form-item>
          <el-form-item label="数据类型">
            <el-select v-model="form.datatype" placeholder="请选择活动区域">
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
          "id":1001,
          "label":"实验排期自动审核时间",
          "name":"lab_autocheck_time",
          "options":"",
          "pid":0,
          "state":false,
          "value":""
        },
        data: [
        {
          "datatype":"",
          "flag":false,
          "id":1001,
          "label":"实验排期自动审核时间",
          "name":"lab_autocheck_time",
          "options":"",
          "pid":0,
          "state":false,
          "value":""
        },
        {
          "datatype":"text",
          "flag":false,
          "id":1002,
          "label":"医学排期自动审核时间",
          "name":"medical_autocheck_time",
          "options":"",
          "pid":0,
          "state":false,
          "value":"24h"
        },
        {
          "datatype":"text",
          "flag":false,
          "id":1003,
          "label":"生信排期自动审核时间",
          "name":"bio_autocheck_time",
          "options":"",
          "pid":0,
          "state":false,
          "value":"24h"
        }
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