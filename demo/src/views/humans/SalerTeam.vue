<template>
  <div class="page-wrapper">
    <div class="page-container-header">
      <div class="page-container-header-left">
        <i class="el-icon-menu"></i> <span >销售团队</span>
      </div>
      <div class="page-container-header-middle">
        
      </div>
      <div class="page-container-header-right">
        <el-button size="small"  type="primary"><i class="el-icon-plus"></i> 添加团队</el-button>
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
            <el-transfer v-model="value" :data="options" :props="{key: 'code',label: 'name'}"  :titles="['可选范围', '选中目标']"></el-transfer>
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
  import pca from '/@/assets/pca-code.json'
  let id = 1000;
  export default {
    name: 'ElTreeData',
    data(){
      const data = [];
      return {
        value: [1, 4],
        options:[],
        filterText: '',
        form: {
            "breif":"",
            "code":"11",
            "composition":[
                41,
                42
            ],
            "flag":false,
            "members":13,
            "name":"北区团队",
            "state":false
        },
        data: [
        {
            "breif":"",
            "code":"11",
            "composition":[
                41,
                42
            ],
            "flag":false,
            "members":13,
            "name":"北区团队",
            "state":false
        },
        {
            "breif":"",
            "code":"12",
            "composition":[
                41,
                42
            ],
            "flag":false,
            "members":13,
            "name":"南区团队",
            "state":false
        },
        {
            "breif":"",
            "code":"13",
            "composition":[
                41,
                42
            ],
            "flag":false,
            "members":13,
            "name":"北京团队",
            "state":false
        },
        {
            "breif":"",
            "code":"14",
            "composition":[
                41,
                42
            ],
            "flag":false,
            "members":13,
            "name":"华中团队",
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
      this.options = pca;
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