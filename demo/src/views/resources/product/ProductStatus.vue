<template>
  <div class="page-wrapper">
    <div class="page-container-header">
      <div class="page-container-header-left">
        <i class="el-icon-menu"></i> <span >产品状态管理</span>
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
          <el-form-item label="状态编码">
            <el-input v-model="form.code"></el-input>
          </el-form-item>
          <el-form-item label="状态名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="状态别称">
            <el-input v-model="form.alias"></el-input>
          </el-form-item>
          <el-form-item label="参数值">
            <el-input v-model="form.value"></el-input>
          </el-form-item>
          <el-form-item label="分组">
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
            "name":"订单草稿",
            "alias":"",
            "group":"下单",
            "remark":"",            
            "ctime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "mtime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "flag":false,
            "state":false
        },
        data: [
        {
            "alias":"",
            "code":"1001",
            "ctime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "flag":false,
            "group":"下单",
            "mtime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "name":"订单草稿",
            "remark":"",
            "state":false
        },
        {
            "alias":"",
            "code":"1002",
            "ctime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "flag":false,
            "group":"下单",
            "mtime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "name":"待销管审核",
            "remark":"",
            "state":false
        },
        {
            "alias":"",
            "code":"1003",
            "ctime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "flag":false,
            "group":"下单",
            "mtime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "name":"待医学审核",
            "remark":"",
            "state":false
        },
        {
            "alias":"",
            "code":"1004",
            "ctime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "flag":false,
            "group":"下单",
            "mtime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "name":"待实验室审核",
            "remark":"",
            "state":false
        },
        {
            "alias":"",
            "code":"1005",
            "ctime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "flag":false,
            "group":"下单",
            "mtime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "name":"订单审核完成",
            "remark":"",
            "state":false
        },
        {
            "alias":"",
            "code":"2101",
            "ctime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "flag":false,
            "group":"实验室",
            "mtime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "name":"样本已采集",
            "remark":"",
            "state":false
        },
        {
            "alias":"",
            "code":"2102",
            "ctime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "flag":false,
            "group":"实验室",
            "mtime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "name":"样本已寄送",
            "remark":"",
            "state":false
        },
        {
            "alias":"",
            "code":"2103",
            "ctime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "flag":false,
            "group":"实验室",
            "mtime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "name":"样本已接收",
            "remark":"",
            "state":false
        },
        {
            "alias":"",
            "code":"2104",
            "ctime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "flag":false,
            "group":"实验室",
            "mtime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "name":"样本已领用",
            "remark":"",
            "state":false
        },
        {
            "alias":"",
            "code":"2105",
            "ctime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "flag":false,
            "group":"实验室",
            "mtime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "name":"样本已提取",
            "remark":"",
            "state":false
        },
        {
            "alias":"",
            "code":"2106",
            "ctime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "flag":false,
            "group":"实验室",
            "mtime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "name":"核酸样本已入库",
            "remark":"",
            "state":false
        },
        {
            "alias":"",
            "code":"2107",
            "ctime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "flag":false,
            "group":"实验室",
            "mtime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "name":"实验已排期",
            "remark":"",
            "state":false
        },
        {
            "alias":"",
            "code":"2108",
            "ctime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "flag":false,
            "group":"实验室",
            "mtime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "name":"核酸样本已领用",
            "remark":"",
            "state":false
        },
        {
            "alias":"",
            "code":"2109",
            "ctime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "flag":false,
            "group":"实验室",
            "mtime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "name":"文库已构建",
            "remark":"",
            "state":false
        },
        {
            "alias":"",
            "code":"2110",
            "ctime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "flag":false,
            "group":"实验室",
            "mtime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "name":"上机已完成",
            "remark":"",
            "state":false
        },
        {
            "alias":"",
            "code":"2111",
            "ctime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "flag":false,
            "group":"实验室",
            "mtime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "name":"数据已汇总",
            "remark":"",
            "state":false
        },
        {
            "alias":"",
            "code":"2112",
            "ctime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "flag":false,
            "group":"实验室",
            "mtime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "name":"实验已完成",
            "remark":"",
            "state":false
        },
        {
            "alias":"",
            "code":"2201",
            "ctime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "flag":false,
            "group":"生信分析",
            "mtime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "name":"预制状态",
            "remark":"",
            "state":false
        },
        {
            "alias":"",
            "code":"2202",
            "ctime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "flag":false,
            "group":"生信分析",
            "mtime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "name":"数据已接收",
            "remark":"",
            "state":false
        },
        {
            "alias":"",
            "code":"2203",
            "ctime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "flag":false,
            "group":"生信分析",
            "mtime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "name":"生信已排期",
            "remark":"",
            "state":false
        },
        {
            "alias":"",
            "code":"2204",
            "ctime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "flag":false,
            "group":"生信分析",
            "mtime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "name":"生信质控完成",
            "remark":"",
            "state":false
        },
        {
            "alias":"",
            "code":"2205",
            "ctime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "flag":false,
            "group":"生信分析",
            "mtime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "name":"生信分析QC完成",
            "remark":"",
            "state":false
        },
        {
            "alias":"",
            "code":"2206",
            "ctime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "flag":false,
            "group":"生信分析",
            "mtime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "name":"家系分析完成",
            "remark":"",
            "state":false
        },
        {
            "alias":"",
            "code":"2207",
            "ctime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "flag":false,
            "group":"生信分析",
            "mtime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "name":"亲缘QC完成",
            "remark":"",
            "state":false
        },
        {
            "alias":"",
            "code":"2208",
            "ctime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "flag":false,
            "group":"生信分析",
            "mtime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "name":"医学可解读",
            "remark":"",
            "state":false
        },
        {
            "alias":"",
            "code":"2301",
            "ctime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "flag":false,
            "group":"医学报告",
            "mtime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "name":"预制状态",
            "remark":"",
            "state":false
        },
        {
            "alias":"",
            "code":"2302",
            "ctime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "flag":false,
            "group":"医学报告",
            "mtime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "name":"医学可出报告",
            "remark":"",
            "state":false
        },
        {
            "alias":"",
            "code":"2303",
            "ctime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "flag":false,
            "group":"医学报告",
            "mtime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "name":"医学已分派排期",
            "remark":"",
            "state":false
        },
        {
            "alias":"",
            "code":"2304",
            "ctime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "flag":false,
            "group":"医学报告",
            "mtime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "name":"原始报告完成",
            "remark":"",
            "state":false
        },
        {
            "alias":"",
            "code":"2305",
            "ctime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "flag":false,
            "group":"医学报告",
            "mtime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "name":"原始报告初审完成",
            "remark":"",
            "state":false
        },
        {
            "alias":"",
            "code":"2306",
            "ctime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "flag":false,
            "group":"医学报告",
            "mtime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "name":"原始报告终审完成",
            "remark":"",
            "state":false
        },
        {
            "alias":"",
            "code":"2307",
            "ctime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "flag":false,
            "group":"医学报告",
            "mtime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "name":"报告待打包",
            "remark":"",
            "state":false
        },
        {
            "alias":"",
            "code":"2308",
            "ctime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "flag":false,
            "group":"医学报告",
            "mtime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "name":"初步报告完成",
            "remark":"",
            "state":false
        },
        {
            "alias":"",
            "code":"3001",
            "ctime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "flag":false,
            "group":"交付",
            "mtime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "name":"预制状态",
            "remark":"",
            "state":false
        },
        {
            "alias":"",
            "code":"3002",
            "ctime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "flag":false,
            "group":"交付",
            "mtime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "name":"进入交付",
            "remark":"",
            "state":false
        },
        {
            "alias":"",
            "code":"3003",
            "ctime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "flag":false,
            "group":"交付",
            "mtime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "name":"推广审核完成",
            "remark":"",
            "state":false
        },
        {
            "alias":"",
            "code":"3005",
            "ctime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "flag":false,
            "group":"交付",
            "mtime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "name":"临床报告完成",
            "remark":"",
            "state":false
        },
        {
            "alias":"",
            "code":"3004",
            "ctime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "flag":false,
            "group":"交付",
            "mtime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "name":"销售审核完成",
            "remark":"",
            "state":false
        },
        {
            "alias":"",
            "code":"3007",
            "ctime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "flag":false,
            "group":"交付",
            "mtime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "name":"已邮寄纸质报告",
            "remark":"",
            "state":false
        },
        {
            "alias":"",
            "code":"3006",
            "ctime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "flag":false,
            "group":"交付",
            "mtime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "name":"已发送医生/患者",
            "remark":"",
            "state":false
        },
        {
            "alias":"",
            "code":"3008",
            "ctime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "flag":false,
            "group":"交付",
            "mtime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "name":"交付完成",
            "remark":"",
            "status":false
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