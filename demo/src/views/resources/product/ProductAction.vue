<template>
  <div class="page-wrapper">
    <div class="page-container-header">
      <div class="page-container-header-left">
        <i class="el-icon-menu"></i> <span >产品操作管理</span>
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
          <el-form-item label="操作编码">
            <el-input v-model="form.code"></el-input>
          </el-form-item>
          <el-form-item label="操作名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="操作别称">
            <el-input v-model="form.alias"></el-input>
          </el-form-item>
          <el-form-item label="参数值">
            <el-input v-model="form.value"></el-input>
          </el-form-item>
          <el-form-item label="操作分组">
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
            "name":"销售下项目单",
            "alias":"",
            "group":"下单",
            "platform":"",
            "handle":"",
            "params":"",
            "begin":"",
            "end":"",
            "brief":"",
            "ctime":"Fri, 09 Apr 2021 03:25:12 GMT",
            "mtime":"Fri, 09 Apr 2021 03:25:12 GMT",
            "flag":false,
            "state":false
        },
        data: [
        {
            "alias":"",
            "begin":"",
            "brief":"",
            "code":"1001",
            "ctime":"Fri, 09 Apr 2021 03:25:12 GMT",
            "end":"",
            "flag":false,
            "group":"下单",
            "handle":"",
            "mtime":"Fri, 09 Apr 2021 03:25:12 GMT",
            "name":"销售下项目单",
            "params":"",
            "platform":"",
            "state":false
        },
        {
            "alias":"",
            "begin":"",
            "brief":"",
            "code":"1002",
            "ctime":"Fri, 09 Apr 2021 03:25:45 GMT",
            "end":"",
            "flag":false,
            "group":"下单",
            "handle":"",
            "mtime":"Fri, 09 Apr 2021 03:25:45 GMT",
            "name":"销售下订单",
            "params":"",
            "platform":"",
            "state":false
        },
        {
            "alias":"",
            "begin":"",
            "brief":"",
            "code":"1003",
            "ctime":"Fri, 09 Apr 2021 03:25:50 GMT",
            "end":"",
            "flag":false,
            "group":"下单",
            "handle":"",
            "mtime":"Fri, 09 Apr 2021 03:25:50 GMT",
            "name":"销管审核",
            "params":"",
            "platform":"",
            "state":false
        },
        {
            "alias":"",
            "begin":"",
            "brief":"",
            "code":"1004",
            "ctime":"Fri, 09 Apr 2021 03:25:55 GMT",
            "end":"",
            "flag":false,
            "group":"下单",
            "handle":"",
            "mtime":"Fri, 09 Apr 2021 03:25:55 GMT",
            "name":"医学审核",
            "params":"",
            "platform":"",
            "state":false
        },
        {
            "alias":"",
            "begin":"",
            "brief":"",
            "code":"1005",
            "ctime":"Fri, 09 Apr 2021 03:25:55 GMT",
            "end":"",
            "flag":false,
            "group":"下单",
            "handle":"",
            "mtime":"Fri, 09 Apr 2021 03:25:55 GMT",
            "name":"实验室审核",
            "params":"",
            "platform":"",
            "state":false
        },
        {
            "alias":"",
            "begin":"",
            "brief":"",
            "code":"2101",
            "ctime":"Fri, 09 Apr 2021 03:26:03 GMT",
            "end":"",
            "flag":false,
            "group":"实验室",
            "handle":"",
            "mtime":"Fri, 09 Apr 2021 03:26:03 GMT",
            "name":"样本采集",
            "params":"",
            "platform":"",
            "state":false
        },
        {
            "alias":"",
            "begin":"",
            "brief":"",
            "code":"2102",
            "ctime":"Fri, 09 Apr 2021 03:26:12 GMT",
            "end":"",
            "flag":false,
            "group":"实验室",
            "handle":"",
            "mtime":"Fri, 09 Apr 2021 03:26:12 GMT",
            "name":"样本寄送",
            "params":"",
            "platform":"",
            "state":false
        },
        {
            "alias":"",
            "begin":"",
            "brief":"",
            "code":"2103",
            "ctime":"Fri, 09 Apr 2021 03:26:17 GMT",
            "end":"",
            "flag":false,
            "group":"实验室",
            "handle":"",
            "mtime":"Fri, 09 Apr 2021 03:26:17 GMT",
            "name":"样本接收",
            "params":"",
            "platform":"",
            "state":false
        },
        {
            "alias":"",
            "begin":"",
            "brief":"",
            "code":"2104",
            "ctime":"Fri, 09 Apr 2021 03:26:25 GMT",
            "end":"",
            "flag":false,
            "group":"实验室",
            "handle":"",
            "mtime":"Fri, 09 Apr 2021 03:26:25 GMT",
            "name":"核酸提取",
            "params":"",
            "platform":"",
            "state":false
        },
        {
            "alias":"",
            "begin":"",
            "brief":"",
            "code":"2105",
            "ctime":"Fri, 09 Apr 2021 03:26:39 GMT",
            "end":"",
            "flag":false,
            "group":"实验室",
            "handle":"",
            "mtime":"Fri, 09 Apr 2021 03:26:39 GMT",
            "name":"核酸样本入库",
            "params":"",
            "platform":"",
            "state":false
        },
        {
            "alias":"",
            "begin":"",
            "brief":"",
            "code":"2106",
            "ctime":"Fri, 09 Apr 2021 03:26:44 GMT",
            "end":"",
            "flag":false,
            "group":"实验室",
            "handle":"",
            "mtime":"Fri, 09 Apr 2021 03:26:44 GMT",
            "name":"开始实验",
            "params":"",
            "platform":"",
            "state":false
        },
        {
            "alias":"",
            "begin":"",
            "brief":"",
            "code":"2107",
            "ctime":"Fri, 09 Apr 2021 03:26:51 GMT",
            "end":"",
            "flag":false,
            "group":"实验室",
            "handle":"",
            "mtime":"Fri, 09 Apr 2021 03:26:51 GMT",
            "name":"领用样本",
            "params":"",
            "platform":"",
            "state":false
        },
        {
            "alias":"",
            "begin":"",
            "brief":"",
            "code":"2108",
            "ctime":"Fri, 09 Apr 2021 03:26:58 GMT",
            "end":"",
            "flag":false,
            "group":"实验室",
            "handle":"",
            "mtime":"Fri, 09 Apr 2021 03:26:58 GMT",
            "name":"构建文库",
            "params":"",
            "platform":"",
            "state":false
        },
        {
            "alias":"",
            "begin":"",
            "brief":"",
            "code":"2109",
            "ctime":"Fri, 09 Apr 2021 03:27:03 GMT",
            "end":"",
            "flag":false,
            "group":"实验室",
            "handle":"",
            "mtime":"Fri, 09 Apr 2021 03:27:03 GMT",
            "name":"上机测序",
            "params":"",
            "platform":"",
            "state":false
        },
        {
            "alias":"",
            "begin":"",
            "brief":"",
            "code":"2110",
            "ctime":"Fri, 09 Apr 2021 03:27:10 GMT",
            "end":"",
            "flag":false,
            "group":"实验室",
            "handle":"",
            "mtime":"Fri, 09 Apr 2021 03:27:10 GMT",
            "name":"数据汇总",
            "params":"",
            "platform":"",
            "state":false
        },
        {
            "alias":"",
            "begin":"",
            "brief":"",
            "code":"2111",
            "ctime":"Fri, 09 Apr 2021 03:27:42 GMT",
            "end":"",
            "flag":false,
            "group":"实验室",
            "handle":"",
            "mtime":"Fri, 09 Apr 2021 03:27:42 GMT",
            "name":"实验室内检审核",
            "params":"",
            "platform":"",
            "state":false
        },
        {
            "alias":"",
            "begin":"",
            "brief":"",
            "code":"2112",
            "ctime":"Fri, 09 Apr 2021 03:28:00 GMT",
            "end":"",
            "flag":false,
            "group":"实验室",
            "handle":"",
            "mtime":"Fri, 09 Apr 2021 03:28:00 GMT",
            "name":"销售外送",
            "params":"",
            "platform":"",
            "state":false
        },
        {
            "alias":"",
            "begin":"",
            "brief":"",
            "code":"2113",
            "ctime":"Fri, 09 Apr 2021 03:28:15 GMT",
            "end":"",
            "flag":false,
            "group":"实验室",
            "handle":"",
            "mtime":"Fri, 09 Apr 2021 03:28:15 GMT",
            "name":"实验室外送",
            "params":"",
            "platform":"",
            "state":false
        },
        {
            "alias":"",
            "begin":"",
            "brief":"",
            "code":"2114",
            "ctime":"Fri, 09 Apr 2021 03:28:22 GMT",
            "end":"",
            "flag":false,
            "group":"实验室",
            "handle":"",
            "mtime":"Fri, 09 Apr 2021 03:28:22 GMT",
            "name":"外部检测",
            "params":"",
            "platform":"",
            "state":false
        },
        {
            "alias":"",
            "begin":"",
            "brief":"",
            "code":"2201",
            "ctime":"Fri, 09 Apr 2021 03:28:35 GMT",
            "end":"",
            "flag":false,
            "group":"生信分析",
            "handle":"",
            "mtime":"Fri, 09 Apr 2021 03:28:35 GMT",
            "name":"开始生信分析",
            "params":"",
            "platform":"",
            "state":false
        },
        {
            "alias":"",
            "begin":"",
            "brief":"",
            "code":"2202",
            "ctime":"Fri, 09 Apr 2021 03:28:46 GMT",
            "end":"",
            "flag":false,
            "group":"生信分析",
            "handle":"",
            "mtime":"Fri, 09 Apr 2021 03:28:46 GMT",
            "name":"生信质控",
            "params":"",
            "platform":"",
            "state":false
        },
        {
            "alias":"",
            "begin":"",
            "brief":"",
            "code":"2203",
            "ctime":"Fri, 09 Apr 2021 03:28:52 GMT",
            "end":"",
            "flag":false,
            "group":"生信分析",
            "handle":"",
            "mtime":"Fri, 09 Apr 2021 03:28:52 GMT",
            "name":"生信分析",
            "params":"",
            "platform":"",
            "state":false
        },
        {
            "alias":"",
            "begin":"",
            "brief":"",
            "code":"2204",
            "ctime":"Fri, 09 Apr 2021 03:29:01 GMT",
            "end":"",
            "flag":false,
            "group":"生信分析",
            "handle":"",
            "mtime":"Fri, 09 Apr 2021 03:29:01 GMT",
            "name":"生信分析QC",
            "params":"",
            "platform":"",
            "state":false
        },
        {
            "alias":"",
            "begin":"",
            "brief":"",
            "code":"2205",
            "ctime":"Fri, 09 Apr 2021 03:29:06 GMT",
            "end":"",
            "flag":false,
            "group":"生信分析",
            "handle":"",
            "mtime":"Fri, 09 Apr 2021 03:29:06 GMT",
            "name":"家系分析",
            "params":"",
            "platform":"",
            "state":false
        },
        {
            "alias":"",
            "begin":"",
            "brief":"",
            "code":"2206",
            "ctime":"Fri, 09 Apr 2021 03:29:12 GMT",
            "end":"",
            "flag":false,
            "group":"生信分析",
            "handle":"",
            "mtime":"Fri, 09 Apr 2021 03:29:12 GMT",
            "name":"亲缘QC",
            "params":"",
            "platform":"",
            "state":false
        },
        {
            "alias":"",
            "begin":"",
            "brief":"",
            "code":"2207",
            "ctime":"Fri, 09 Apr 2021 03:29:22 GMT",
            "end":"",
            "flag":false,
            "group":"生信分析",
            "handle":"",
            "mtime":"Fri, 09 Apr 2021 03:29:22 GMT",
            "name":"生信内检审核",
            "params":"",
            "platform":"",
            "state":false
        },
        {
            "alias":"",
            "begin":"",
            "brief":"",
            "code":"2301",
            "ctime":"Fri, 09 Apr 2021 03:29:35 GMT",
            "end":"",
            "flag":false,
            "group":"医学报告",
            "handle":"",
            "mtime":"Fri, 09 Apr 2021 03:29:35 GMT",
            "name":"医学分派排期",
            "params":"",
            "platform":"",
            "state":false
        },
        {
            "alias":"",
            "begin":"",
            "brief":"",
            "code":"2302",
            "ctime":"Fri, 09 Apr 2021 03:29:44 GMT",
            "end":"",
            "flag":false,
            "group":"医学报告",
            "handle":"",
            "mtime":"Fri, 09 Apr 2021 03:29:44 GMT",
            "name":"筛点分析",
            "params":"",
            "platform":"",
            "state":false
        },
        {
            "alias":"",
            "begin":"",
            "brief":"",
            "code":"2303",
            "ctime":"Fri, 09 Apr 2021 03:30:17 GMT",
            "end":"",
            "flag":false,
            "group":"医学报告",
            "handle":"",
            "mtime":"Fri, 09 Apr 2021 03:30:17 GMT",
            "name":"原始报告初审",
            "params":"",
            "platform":"",
            "state":false
        },
        {
            "alias":"",
            "begin":"",
            "brief":"",
            "code":"2304",
            "ctime":"Fri, 09 Apr 2021 03:30:28 GMT",
            "end":"",
            "flag":false,
            "group":"医学报告",
            "handle":"",
            "mtime":"Fri, 09 Apr 2021 03:30:28 GMT",
            "name":"原始报告终审",
            "params":"",
            "platform":"",
            "state":false
        },
        {
            "alias":"",
            "begin":"",
            "brief":"",
            "code":"2305",
            "ctime":"Fri, 09 Apr 2021 03:30:45 GMT",
            "end":"",
            "flag":false,
            "group":"医学报告",
            "handle":"",
            "mtime":"Fri, 09 Apr 2021 03:30:45 GMT",
            "name":"报告打包",
            "params":"",
            "platform":"",
            "state":false
        },
        {
            "alias":"",
            "begin":"",
            "brief":"",
            "code":"3001",
            "ctime":"Fri, 09 Apr 2021 03:30:53 GMT",
            "end":"",
            "flag":false,
            "group":"交付",
            "handle":"",
            "mtime":"Fri, 09 Apr 2021 03:30:53 GMT",
            "name":"推广审核",
            "params":"",
            "platform":"",
            "state":false
        },
        {
            "alias":"",
            "begin":"",
            "brief":"",
            "code":"3002",
            "ctime":"Fri, 09 Apr 2021 03:30:58 GMT",
            "end":"",
            "flag":false,
            "group":"交付",
            "handle":"",
            "mtime":"Fri, 09 Apr 2021 03:30:58 GMT",
            "name":"销售审核",
            "params":"",
            "platform":"",
            "state":false
        },
        {
            "alias":"",
            "begin":"",
            "brief":"",
            "code":"3003",
            "ctime":"Fri, 09 Apr 2021 03:31:31 GMT",
            "end":"",
            "flag":false,
            "group":"交付",
            "handle":"",
            "mtime":"Fri, 09 Apr 2021 03:31:31 GMT",
            "name":"生产临床报告",
            "params":"",
            "platform":"",
            "state":false
        },
        {
            "alias":"",
            "begin":"",
            "brief":"",
            "code":"3004",
            "ctime":"Fri, 09 Apr 2021 03:31:39 GMT",
            "end":"",
            "flag":false,
            "group":"交付",
            "handle":"",
            "mtime":"Fri, 09 Apr 2021 03:31:39 GMT",
            "name":"发送医生/患者",
            "params":"",
            "platform":"",
            "state":false
        },
        {
            "alias":"",
            "begin":"",
            "brief":"",
            "code":"3005",
            "ctime":"Fri, 09 Apr 2021 03:31:54 GMT",
            "end":"",
            "flag":false,
            "group":"交付",
            "handle":"",
            "mtime":"Fri, 09 Apr 2021 03:31:54 GMT",
            "name":"纸质寄送患者",
            "params":"",
            "platform":"",
            "state":false
        },
        {
            "alias":"",
            "begin":"",
            "brief":"",
            "code":"3006",
            "ctime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "end":"",
            "flag":false,
            "group":"交付",
            "handle":"",
            "mtime":"Fri, 09 Apr 2021 03:32:07 GMT",
            "name":"交付完成结单",
            "params":"",
            "platform":"",
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