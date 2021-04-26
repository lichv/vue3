<template>
  <div class="page-wrapper">
    <div class="page-container-header">
      <div class="page-container-header-left">
        <i class="el-icon-menu"></i> <span >样本类型</span>
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
        <el-form ref="form" :model="form" label-width="120px">
          <el-form-item label="样本类型编码">
            <el-input v-model="form.code" ></el-input>
          </el-form-item>
          <el-form-item label="样本类型名称">
            <el-input v-model="form.name" ></el-input>
          </el-form-item>
          <el-form-item label="参数值">
            <el-input v-model="form.params" ></el-input>
          </el-form-item>
          <el-form-item label="备注">
            <el-input type="textarea" v-model="form.remark"></el-input>
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
            "code":"101",
            "flag":false,
            "name":"血液",
            "params":"",
            "remark":"",
            "source":0,
            "state":false
        },
        data: [
        {
            "code":"101",
            "flag":false,
            "name":"血液",
            "params":"",
            "remark":"",
            "source":0,
            "state":false
        },
        {
            "code":"102",
            "flag":false,
            "name":"唾液",
            "params":"",
            "remark":"",
            "source":0,
            "state":false
        },
        {
            "code":"103",
            "flag":false,
            "name":"尿液",
            "params":"",
            "remark":"",
            "source":0,
            "state":false
        },
        {
            "code":"104",
            "flag":false,
            "name":"干血片",
            "params":"",
            "remark":"",
            "source":0,
            "state":false
        },
        {
            "code":"105",
            "flag":false,
            "name":"羊水",
            "params":"",
            "remark":"",
            "source":0,
            "state":false
        },
        {
            "code":"106",
            "flag":false,
            "name":"血清",
            "params":"",
            "remark":"",
            "source":0,
            "state":false
        },
        {
            "code":"107",
            "flag":false,
            "name":"脑脊液",
            "params":"",
            "remark":"",
            "source":0,
            "state":false
        },
        {
            "code":"108",
            "flag":false,
            "name":"口腔拭子",
            "params":"",
            "remark":"",
            "source":0,
            "state":false
        },
        {
            "code":"109",
            "flag":false,
            "name":"组织",
            "params":"",
            "remark":"",
            "source":0,
            "state":false
        },
        {
            "code":"200",
            "flag":false,
            "name":"核酸DNA",
            "params":"",
            "remark":"",
            "source":0,
            "state":false
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