<template>
  <div class="page-wrapper">
    <div class="page-container-header">
      <div class="page-container-header-left">
        <i class="el-icon-menu"></i> <span >科室标签</span>
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
          <el-form-item label="科室标签编码">
            <el-input v-model="form.code"></el-input>
          </el-form-item>
          <el-form-item label="科室标签名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="科室标签别称">
            <el-input v-model="form.alias"></el-input>
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
            "alias":"",
            "breif":"",
            "code":"11",
            "flag":false,
            "name":"内科",
            "state":false
        },
        data: [
        {
            "alias":"",
            "breif":"",
            "code":"11",
            "flag":false,
            "name":"内科",
            "state":false
        },
        {
            "alias":"",
            "breif":"",
            "code":"1101",
            "flag":false,
            "name":"常见内科",
            "state":false
        },
        {
            "alias":"",
            "breif":"",
            "code":"1102",
            "flag":false,
            "name":"神经内科",
            "state":false
        },
        {
            "alias":"",
            "breif":"",
            "code":"1103",
            "flag":false,
            "name":"内分泌科",
            "state":false
        },
        {
            "alias":"",
            "breif":"",
            "code":"1104",
            "flag":false,
            "name":"心血管内科",
            "state":false
        },
        {
            "alias":"",
            "breif":"",
            "code":"1105",
            "flag":false,
            "name":"呼吸内科",
            "state":false
        },
        {
            "alias":"",
            "breif":"",
            "code":"1106",
            "flag":false,
            "name":"感染科",
            "state":false
        },
        {
            "alias":"",
            "breif":"",
            "code":"1107",
            "flag":false,
            "name":"消化内科",
            "state":false
        },
        {
            "alias":"",
            "breif":"",
            "code":"1108",
            "flag":false,
            "name":"风湿免疫科",
            "state":false
        },
        {
            "alias":"",
            "breif":"",
            "code":"12",
            "flag":false,
            "name":"外科",
            "state":false
        },
        {
            "alias":"",
            "breif":"",
            "code":"1201",
            "flag":false,
            "name":"常见外科",
            "state":false
        },
        {
            "alias":"",
            "breif":"",
            "code":"1202",
            "flag":false,
            "name":"泌尿外科",
            "state":false
        },
        {
            "alias":"",
            "breif":"",
            "code":"1203",
            "flag":false,
            "name":"乳腺外科",
            "state":false
        },
        {
            "alias":"",
            "breif":"",
            "code":"1204",
            "flag":false,
            "name":"神经外科",
            "state":false
        },
        {
            "alias":"",
            "breif":"",
            "code":"1205",
            "flag":false,
            "name":"肝胆外科",
            "state":false
        },
        {
            "alias":"",
            "breif":"",
            "code":"1206",
            "flag":false,
            "name":"胸外科",
            "state":false
        },
        {
            "alias":"",
            "breif":"",
            "code":"1207",
            "flag":false,
            "name":"肛肠外科",
            "state":false
        },
        {
            "alias":"",
            "breif":"",
            "code":"13",
            "flag":false,
            "name":"妇产科",
            "state":false
        },
        {
            "alias":"",
            "breif":"",
            "code":"14",
            "flag":false,
            "name":"皮肤性病科",
            "state":false
        },
        {
            "alias":"",
            "breif":"",
            "code":"15",
            "flag":false,
            "name":"骨科",
            "state":false
        },
        {
            "alias":"",
            "breif":"",
            "code":"1501",
            "flag":false,
            "name":"骨科常见病",
            "state":false
        },
        {
            "alias":"",
            "breif":"",
            "code":"1502",
            "flag":false,
            "name":"脊柱外科",
            "state":false
        },
        {
            "alias":"",
            "breif":"",
            "code":"1503",
            "flag":false,
            "name":"关节外科",
            "state":false
        },
        {
            "alias":"",
            "breif":"",
            "code":"1504",
            "flag":false,
            "name":"创伤骨科",
            "state":false
        },
        {
            "alias":"",
            "breif":"",
            "code":"16",
            "flag":false,
            "name":"耳鼻咽喉科",
            "state":false
        },
        {
            "alias":"",
            "breif":"",
            "code":"1601",
            "flag":false,
            "name":"耳鼻咽喉科",
            "state":false
        },
        {
            "alias":"",
            "breif":"",
            "code":"1602",
            "flag":false,
            "name":"眼科",
            "state":false
        },
        {
            "alias":"",
            "breif":"",
            "code":"1603",
            "flag":false,
            "name":"头颈外科",
            "state":false
        },
        {
            "alias":"",
            "breif":"",
            "code":"17",
            "flag":false,
            "name":"儿科",
            "state":false
        },
        {
            "alias":"",
            "breif":"",
            "code":"18",
            "flag":false,
            "name":"口腔科",
            "state":false
        },
        {
            "alias":"",
            "breif":"",
            "code":"19",
            "flag":false,
            "name":"精神病科",
            "state":false
        },
        {
            "alias":"",
            "breif":"",
            "code":"20",
            "flag":false,
            "name":"男科",
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