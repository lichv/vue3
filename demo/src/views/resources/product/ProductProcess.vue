<template>
  <div class="page-wrapper">
    <div class="page-container-header">
      <div class="page-container-header-left">
        <i class="el-icon-menu"></i> <span >产品流程管理</span>
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
          <el-form-item label="流程编码">
            <el-input v-model="form.code"></el-input>
          </el-form-item>
          <el-form-item label="流程名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="流程别称">
            <el-input v-model="form.alias"></el-input>
          </el-form-item>
          <el-form-item label="参数值">
            <el-input v-model="form.value"></el-input>
          </el-form-item>
          <el-form-item label="流程分组">
            <el-select v-model="form.group" placeholder="请选择活动区域">
              <el-option label="下单" value="order"></el-option>
              <el-option label="实验室" value="laboratory"></el-option>
              <el-option label="生信" value="bioanalysis"></el-option>
              <el-option label="医学" value="medical"></el-option>
              <el-option label="交付" value="deliver"></el-option>
            </el-select>
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
            "code":"1001",
            "name":"销售下单流程",
            "alias":"",
            "group":"下单",
            "process":{

            },
            "version":1,
            "remark":"",
            "ctime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "mtime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "flag":false,
            "state":false,
        },
        data: [
        {
            "alias":"",
            "code":"1001",
            "ctime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "flag":false,
            "group":"下单",
            "mtime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "name":"销售下单流程",
            "process":{

            },
            "remark":"",
            "state":false,
            "version":1
        },
        {
            "alias":"",
            "code":"1002",
            "ctime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "flag":false,
            "group":"下单",
            "mtime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "name":"科研下单流程",
            "process":{

            },
            "remark":"",
            "state":false,
            "version":1
        },
        {
            "alias":"",
            "code":"2101",
            "ctime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "flag":false,
            "group":"实验室",
            "mtime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "name":"实验室内测标准流程",
            "process":{

            },
            "remark":"",
            "state":false,
            "version":1
        },
        {
            "alias":"",
            "code":"2102",
            "ctime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "flag":false,
            "group":"实验室",
            "mtime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "name":"实验室外送标准流程",
            "process":{

            },
            "remark":"",
            "state":false,
            "version":1
        },
        {
            "alias":"",
            "code":"2103",
            "ctime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "flag":false,
            "group":"实验室",
            "mtime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "name":"销售外送标准流程",
            "process":{

            },
            "remark":"",
            "state":false,
            "version":1
        },
        {
            "alias":"",
            "code":"2201",
            "ctime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "flag":false,
            "group":"生信分析",
            "mtime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "name":"单项产品分析流程",
            "process":{

            },
            "remark":"",
            "state":false,
            "version":1
        },
        {
            "alias":"",
            "code":"2202",
            "ctime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "flag":false,
            "group":"生信分析",
            "mtime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "name":"家系产品分析流程",
            "process":{

            },
            "remark":"",
            "state":false,
            "version":1
        },
        {
            "alias":"",
            "code":"2301",
            "ctime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "flag":false,
            "group":"医学报告",
            "mtime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "name":"医学出具报告流程",
            "process":{

            },
            "remark":"",
            "state":false,
            "version":1
        },
        {
            "alias":"",
            "code":"2302",
            "ctime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "flag":false,
            "group":"医学报告",
            "mtime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "name":"医学不出具报告流程",
            "process":{

            },
            "remark":"",
            "state":false,
            "version":1
        },
        {
            "alias":"",
            "code":"3001",
            "ctime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "flag":false,
            "group":"交付",
            "mtime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "name":"报告交付流程",
            "process":{

            },
            "remark":"",
            "state":false,
            "version":1
        },
        {
            "alias":"",
            "code":"3002",
            "ctime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "flag":false,
            "group":"交付",
            "mtime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "name":"科研结果交付流程",
            "process":{

            },
            "remark":"",
            "state":false,
            "version":1
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