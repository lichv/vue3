<template>
  <div class="page-wrapper">
    <div class="page-container-header">
      <div class="page-container-header-left">
        <i class="el-icon-menu"></i> <span >亲属关系</span>
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
        <div class="page-content-container-content">
          <el-tree ref="tree" :data="data" node-key="code" default-expand-all :expand-on-click-node="false" :render-content="renderContent" :filter-node-method="filterNode"> </el-tree>
        </div>
      </el-card>
      <el-card class="page-content-container-right">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="亲属关系编码">
            <el-input v-model="form.code"></el-input>
          </el-form-item>
          <el-form-item label="亲属关系名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="亲属关系别称">
            <el-input v-model="form.alias"></el-input>
          </el-form-item>
          <el-form-item label="性别" >
            <el-radio-group v-model="form.gender" size="mini">
              <el-radio-button label="男"></el-radio-button>
              <el-radio-button label="女"></el-radio-button>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="描述">
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
          "alias":"父亲",
          "breif":"",
          "code":"101",
          "flag":false,
          "gender":"男",
          "name":"爸爸",
          "state":false
        },
        data: [
        {
          "alias":"父亲",
          "breif":"",
          "code":"101",
          "flag":false,
          "gender":"男",
          "name":"爸爸",
          "state":false
        },
        {
          "alias":"母亲",
          "breif":"",
          "code":"102",
          "flag":false,
          "gender":"女",
          "name":"妈妈",
          "state":false
        },
        {
          "alias":"",
          "breif":"",
          "code":"103",
          "flag":false,
          "gender":"男",
          "name":"爷爷",
          "state":false
        },
        {
          "alias":"",
          "breif":"",
          "code":"104",
          "flag":false,
          "gender":"女",
          "name":"奶奶",
          "state":false
        },
        {
          "alias":"",
          "breif":"",
          "code":"105",
          "flag":false,
          "gender":"男",
          "name":"叔叔",
          "state":false
        },
        {
          "alias":"",
          "breif":"",
          "code":"106",
          "flag":false,
          "gender":"女",
          "name":"姑姑",
          "state":false
        },
        {
          "alias":"",
          "breif":"",
          "code":"107",
          "flag":false,
          "gender":"女",
          "name":"姥姥",
          "state":false
        },
        {
          "alias":"",
          "breif":"",
          "code":"108",
          "flag":false,
          "gender":"男",
          "name":"姥爷",
          "state":false
        },
        {
          "alias":"",
          "breif":"",
          "code":"109",
          "flag":false,
          "gender":"男",
          "name":"舅舅",
          "state":false
        },
        {
          "alias":"",
          "breif":"",
          "code":"110",
          "flag":false,
          "gender":"女",
          "name":"姨母",
          "state":false
        },
        {
          "alias":"",
          "breif":"",
          "code":"111",
          "flag":false,
          "gender":"男",
          "name":"儿子",
          "state":false
        },
        {
          "alias":"",
          "breif":"",
          "code":"112",
          "flag":false,
          "gender":"女",
          "name":"女儿",
          "state":false
        },
        {
          "alias":"",
          "breif":"",
          "code":"113",
          "flag":false,
          "gender":"男",
          "name":"孙子",
          "state":false
        },
        {
          "alias":"",
          "breif":"",
          "code":"114",
          "flag":false,
          "gender":"女",
          "name":"孙女",
          "state":false
        },
        {
          "alias":"",
          "breif":"",
          "code":"115",
          "flag":false,
          "gender":"男",
          "name":"外孙子",
          "state":false
        },
        {
          "alias":"",
          "breif":"",
          "code":"116",
          "flag":false,
          "gender":"女",
          "name":"外孙女",
          "state":false
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
        }, data.name));
      },
      filterNode(value, data) {
        if (!value) return true;
        return data.name.indexOf(value) !== -1;
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