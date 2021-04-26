<template>
  <div class="page-wrapper">
    <div class="page-container-header">
      <div class="page-container-header-left">
        <i class="el-icon-menu"></i> <span >实验检测内容管理</span>
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
          "alias":"",
          "brief":"",
          "code":"1003",
          "ctime":"Fri, 09 Apr 2021 04:29:47 GMT",
          "data_size":"",
          "detection_period":"",
          "flag":false,
          "group":"NGS",
          "material_option":"",
          "mtime":"Fri, 09 Apr 2021 04:29:47 GMT",
          "name":"NGS Panel",
          "platform_option":"",
          "state":false,
          "tags":{

          }
        },
        data: [
        {
          "alias":"全基因组测序",
          "brief":"",
          "code":"1001",
          "ctime":"Fri, 09 Apr 2021 04:28:55 GMT",
          "data_size":"",
          "detection_period":"",
          "flag":false,
          "group":"NGS",
          "material_option":"",
          "mtime":"Fri, 09 Apr 2021 04:28:55 GMT",
          "name":"WGS",
          "platform_option":"",
          "state":false,
          "tags":{

          }
        },
        {
          "alias":"全外显子组测序",
          "brief":"",
          "code":"1002",
          "ctime":"Fri, 09 Apr 2021 04:29:14 GMT",
          "data_size":"",
          "detection_period":"",
          "flag":false,
          "group":"NGS",
          "material_option":"",
          "mtime":"Fri, 09 Apr 2021 04:29:14 GMT",
          "name":"WES",
          "platform_option":"",
          "state":false,
          "tags":{

          }
        },
        {
          "alias":"",
          "brief":"",
          "code":"1003",
          "ctime":"Fri, 09 Apr 2021 04:29:47 GMT",
          "data_size":"",
          "detection_period":"",
          "flag":false,
          "group":"NGS",
          "material_option":"",
          "mtime":"Fri, 09 Apr 2021 04:29:47 GMT",
          "name":"NGS Panel",
          "platform_option":"",
          "state":false,
          "tags":{

          }
        },
        {
          "alias":"",
          "brief":"",
          "code":"1004",
          "ctime":"Fri, 09 Apr 2021 04:30:49 GMT",
          "data_size":"",
          "detection_period":"",
          "flag":false,
          "group":"NGS",
          "material_option":"",
          "mtime":"Fri, 09 Apr 2021 04:30:49 GMT",
          "name":"mNGS",
          "platform_option":"",
          "state":false,
          "tags":{

          }
        },
        {
          "alias":"",
          "brief":"",
          "code":"1005",
          "ctime":"Fri, 09 Apr 2021 06:03:41 GMT",
          "data_size":"",
          "detection_period":"",
          "flag":false,
          "group":"PCR",
          "material_option":"",
          "mtime":"Fri, 09 Apr 2021 06:03:41 GMT",
          "name":"LR-PCR",
          "platform_option":"",
          "state":false,
          "tags":{

          }
        },
        {
          "alias":"",
          "brief":"",
          "code":"1006",
          "ctime":"Fri, 09 Apr 2021 06:03:51 GMT",
          "data_size":"",
          "detection_period":"",
          "flag":false,
          "group":"",
          "material_option":"",
          "mtime":"Fri, 09 Apr 2021 06:03:51 GMT",
          "name":"MLPA",
          "platform_option":"",
          "state":false,
          "tags":{

          }
        },
        {
          "alias":"",
          "brief":"",
          "code":"1007",
          "ctime":"Fri, 09 Apr 2021 06:04:58 GMT",
          "data_size":"",
          "detection_period":"",
          "flag":false,
          "group":"",
          "material_option":"",
          "mtime":"Fri, 09 Apr 2021 06:04:58 GMT",
          "name":"MS-MLPA",
          "platform_option":"",
          "state":false,
          "tags":{

          }
        },
        {
          "alias":"",
          "brief":"",
          "code":"1008",
          "ctime":"Fri, 09 Apr 2021 06:05:07 GMT",
          "data_size":"",
          "detection_period":"",
          "flag":false,
          "group":"PCR",
          "material_option":"",
          "mtime":"Fri, 09 Apr 2021 06:05:07 GMT",
          "name":"Sanger测序",
          "platform_option":"",
          "state":false,
          "tags":{

          }
        },
        {
          "alias":"",
          "brief":"",
          "code":"1009",
          "ctime":"Fri, 09 Apr 2021 06:05:15 GMT",
          "data_size":"",
          "detection_period":"",
          "flag":false,
          "group":"PCR",
          "material_option":"",
          "mtime":"Fri, 09 Apr 2021 06:05:15 GMT",
          "name":"CNV-qPCR",
          "platform_option":"",
          "state":false,
          "tags":{

          }
        },
        {
          "alias":"",
          "brief":"",
          "code":"1010",
          "ctime":"Fri, 09 Apr 2021 06:05:36 GMT",
          "data_size":"",
          "detection_period":"",
          "flag":false,
          "group":"",
          "material_option":"",
          "mtime":"Fri, 09 Apr 2021 06:05:36 GMT",
          "name":"CMA",
          "platform_option":"",
          "state":false,
          "tags":{

          }
        },
        {
          "alias":"",
          "brief":"",
          "code":"1011",
          "ctime":"Fri, 09 Apr 2021 06:05:47 GMT",
          "data_size":"",
          "detection_period":"",
          "flag":false,
          "group":"",
          "material_option":"",
          "mtime":"Fri, 09 Apr 2021 06:05:47 GMT",
          "name":"转染细胞法",
          "platform_option":"",
          "state":false,
          "tags":{

          }
        },
        {
          "alias":"",
          "brief":"",
          "code":"1012",
          "ctime":"Fri, 09 Apr 2021 06:05:57 GMT",
          "data_size":"",
          "detection_period":"",
          "flag":false,
          "group":"",
          "material_option":"",
          "mtime":"Fri, 09 Apr 2021 06:05:57 GMT",
          "name":"电泳法",
          "platform_option":"",
          "state":false,
          "tags":{

          }
        },
        {
          "alias":"",
          "brief":"",
          "code":"1013",
          "ctime":"Fri, 09 Apr 2021 06:06:09 GMT",
          "data_size":"",
          "detection_period":"",
          "flag":false,
          "group":"",
          "material_option":"",
          "mtime":"Fri, 09 Apr 2021 06:06:09 GMT",
          "name":"免疫斑点",
          "platform_option":"",
          "state":false,
          "tags":{

          }
        },
        {
          "alias":"",
          "brief":"",
          "code":"1014",
          "ctime":"Fri, 09 Apr 2021 06:06:21 GMT",
          "data_size":"",
          "detection_period":"",
          "flag":false,
          "group":"",
          "material_option":"",
          "mtime":"Fri, 09 Apr 2021 06:06:21 GMT",
          "name":"放免法",
          "platform_option":"",
          "state":false,
          "tags":{

          }
        },
        {
          "alias":"",
          "brief":"",
          "code":"1015",
          "ctime":"Fri, 09 Apr 2021 06:06:30 GMT",
          "data_size":"",
          "detection_period":"",
          "flag":false,
          "group":"",
          "material_option":"",
          "mtime":"Fri, 09 Apr 2021 06:06:30 GMT",
          "name":"ELISA",
          "platform_option":"",
          "state":false,
          "tags":{

          }
        },
        {
          "alias":"",
          "brief":"",
          "code":"1016",
          "ctime":"Fri, 09 Apr 2021 06:06:42 GMT",
          "data_size":"",
          "detection_period":"",
          "flag":false,
          "group":"",
          "material_option":"",
          "mtime":"Fri, 09 Apr 2021 06:06:42 GMT",
          "name":"MASSRRAY质谱法",
          "platform_option":"",
          "state":false,
          "tags":{

          }
        },
        {
          "alias":"",
          "brief":"",
          "code":"1017",
          "ctime":"Fri, 09 Apr 2021 06:06:53 GMT",
          "data_size":"",
          "detection_period":"",
          "flag":false,
          "group":"",
          "material_option":"",
          "mtime":"Fri, 09 Apr 2021 06:06:53 GMT",
          "name":"STR分型",
          "platform_option":"",
          "state":false,
          "tags":{

          }
        },
        {
          "alias":"",
          "brief":"",
          "code":"1018",
          "ctime":"Fri, 09 Apr 2021 06:06:59 GMT",
          "data_size":"",
          "detection_period":"",
          "flag":false,
          "group":"",
          "material_option":"",
          "mtime":"Fri, 09 Apr 2021 06:06:59 GMT",
          "name":"质谱",
          "platform_option":"",
          "state":false,
          "tags":{

          }
        },
        {
          "alias":"",
          "brief":"",
          "code":"1019",
          "ctime":"Fri, 09 Apr 2021 06:08:34 GMT",
          "data_size":"",
          "detection_period":"",
          "flag":false,
          "group":"PCR",
          "material_option":"",
          "mtime":"Fri, 09 Apr 2021 06:08:34 GMT",
          "name":"Long-PCR凝胶电泳分析",
          "platform_option":"",
          "state":false,
          "tags":{

          }
        },
        {
          "alias":"",
          "brief":"",
          "code":"1020",
          "ctime":"Fri, 09 Apr 2021 06:39:03 GMT",
          "data_size":"",
          "detection_period":"",
          "flag":false,
          "group":"",
          "material_option":"",
          "mtime":"Fri, 09 Apr 2021 06:39:03 GMT",
          "name":"动态突变",
          "platform_option":"",
          "state":false,
          "tags":{

          }
        },
        {
          "alias":"",
          "brief":"",
          "code":"1021",
          "ctime":"Fri, 09 Apr 2021 06:39:49 GMT",
          "data_size":"",
          "detection_period":"",
          "flag":false,
          "group":"",
          "material_option":"",
          "mtime":"Fri, 09 Apr 2021 06:39:49 GMT",
          "name":"染色体核型分析",
          "platform_option":"",
          "state":false,
          "tags":{

          }
        },
        {
          "alias":"",
          "brief":"",
          "code":"1022",
          "ctime":"Fri, 09 Apr 2021 06:40:24 GMT",
          "data_size":"",
          "detection_period":"",
          "flag":false,
          "group":"",
          "material_option":"",
          "mtime":"Fri, 09 Apr 2021 06:40:24 GMT",
          "name":"Sanger验证点突变",
          "platform_option":"",
          "state":false,
          "tags":{

          }
        },
        {
          "alias":"",
          "brief":"",
          "code":"1023",
          "ctime":"Fri, 09 Apr 2021 06:40:40 GMT",
          "data_size":"",
          "detection_period":"",
          "flag":false,
          "group":"",
          "material_option":"",
          "mtime":"Fri, 09 Apr 2021 06:40:40 GMT",
          "name":"染色体变异断裂点验证",
          "platform_option":"",
          "state":false,
          "tags":{

          }
        },
        {
          "alias":"",
          "brief":"",
          "code":"1024",
          "ctime":"Fri, 09 Apr 2021 06:40:42 GMT",
          "data_size":"",
          "detection_period":"",
          "flag":false,
          "group":"",
          "material_option":"",
          "mtime":"Fri, 09 Apr 2021 06:40:42 GMT",
          "name":"qPCR验证CNV缺失",
          "platform_option":"",
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