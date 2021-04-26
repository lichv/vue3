<template>
  <div class="page-wrapper">
    <div class="page-container-header">
      <div class="page-container-header-left">
        <i class="el-icon-menu"></i> <span >生信内容管理</span>
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
          "code":"1002",
          "name":"WES",
          "alias":"",
          "group":"NGS",
          "brief":"",
          "ctime":"Fri, 09 Apr 2021 04:29:14 GMT",            
          "mtime":"Fri, 09 Apr 2021 04:29:14 GMT",            
          "flag":false,
          "state":false,
        },
        data: [
        {
          "alias":"",
          "brief":"",
          "code":"1001",
          "ctime":"Fri, 09 Apr 2021 04:28:55 GMT",
          "flag":false,
          "group":"WGS",
          "mtime":"Fri, 09 Apr 2021 04:28:55 GMT",
          "name":"WGS",
          "state":false,
          "tags":{

          }
        },
        {
          "alias":"",
          "brief":"",
          "code":"1002",
          "ctime":"Fri, 09 Apr 2021 04:29:14 GMT",
          "flag":false,
          "group":"NGS",
          "mtime":"Fri, 09 Apr 2021 04:29:14 GMT",
          "name":"WES",
          "state":false,
          "tags":{

          }
        },
        {
          "alias":"",
          "brief":"",
          "code":"1003",
          "ctime":"Fri, 09 Apr 2021 04:29:47 GMT",
          "flag":false,
          "group":"NGS",
          "mtime":"Fri, 09 Apr 2021 04:29:47 GMT",
          "name":"mtDNA",
          "state":false,
          "tags":{

          }
        },
        {
          "alias":"",
          "brief":"",
          "code":"1004",
          "ctime":"Fri, 09 Apr 2021 04:30:49 GMT",
          "flag":false,
          "group":"NGS",
          "mtime":"Fri, 09 Apr 2021 04:30:49 GMT",
          "name":"CNVseq",
          "state":false,
          "tags":{

          }
        },
        {
          "alias":"",
          "brief":"",
          "code":"1005",
          "ctime":"Fri, 09 Apr 2021 06:03:41 GMT",
          "flag":false,
          "group":"PCR",
          "mtime":"Fri, 09 Apr 2021 06:03:41 GMT",
          "name":"NGS Panel",
          "state":false,
          "tags":{

          }
        },
        {
          "alias":"",
          "brief":"",
          "code":"1006",
          "ctime":"Fri, 09 Apr 2021 06:03:51 GMT",
          "flag":false,
          "group":"",
          "mtime":"Fri, 09 Apr 2021 06:03:51 GMT",
          "name":"RNAseq",
          "state":false,
          "tags":{

          }
        },
        {
          "alias":"",
          "brief":"",
          "code":"1007",
          "ctime":"Fri, 09 Apr 2021 06:04:58 GMT",
          "flag":false,
          "group":"",
          "mtime":"Fri, 09 Apr 2021 06:04:58 GMT",
          "name":"Sanger",
          "state":false,
          "tags":{

          }
        },
        {
          "alias":"",
          "brief":"",
          "code":"1008",
          "ctime":"Fri, 09 Apr 2021 06:05:07 GMT",
          "flag":false,
          "group":"",
          "mtime":"Fri, 09 Apr 2021 06:05:07 GMT",
          "name":"携带者筛查",
          "state":false,
          "tags":{

          }
        },
        {
          "alias":"",
          "brief":"",
          "code":"1009",
          "ctime":"Fri, 09 Apr 2021 06:05:15 GMT",
          "flag":false,
          "group":"PCR",
          "mtime":"Fri, 09 Apr 2021 06:05:15 GMT",
          "name":"HLA分型分析",
          "state":false,
          "tags":{

          }
        },
        {
          "alias":"",
          "brief":"",
          "code":"1010",
          "ctime":"Fri, 09 Apr 2021 06:05:36 GMT",
          "flag":false,
          "group":"WGS",
          "mtime":"Fri, 09 Apr 2021 06:05:36 GMT",
          "name":"药物基因组分析WGS",
          "state":false,
          "tags":{

          }
        },
        {
          "alias":"",
          "brief":"",
          "code":"1011",
          "ctime":"Fri, 09 Apr 2021 06:05:47 GMT",
          "flag":false,
          "group":"",
          "mtime":"Fri, 09 Apr 2021 06:05:47 GMT",
          "name":"肿瘤基因组分析",
          "state":false,
          "tags":{

          }
        },
        {
          "alias":"",
          "brief":"",
          "code":"1012",
          "ctime":"Fri, 09 Apr 2021 06:05:57 GMT",
          "flag":false,
          "group":"WGS",
          "mtime":"Fri, 09 Apr 2021 06:05:57 GMT",
          "name":"15xWGS",
          "state":false,
          "tags":{

          }
        },
        {
          "alias":"",
          "brief":"",
          "code":"1013",
          "ctime":"Fri, 09 Apr 2021 06:06:09 GMT",
          "flag":false,
          "group":"",
          "mtime":"Fri, 09 Apr 2021 06:06:09 GMT",
          "name":"家系分析",
          "state":false,
          "tags":{

          }
        },
        {
          "alias":"",
          "brief":"",
          "code":"1014",
          "ctime":"Fri, 09 Apr 2021 06:06:21 GMT",
          "flag":false,
          "group":"",
          "mtime":"Fri, 09 Apr 2021 06:06:21 GMT",
          "name":"亲缘QC",
          "state":false,
          "tags":{

          }
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