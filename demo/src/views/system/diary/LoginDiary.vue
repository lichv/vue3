<template>
  <div class="page-wrapper">
    <div class="page-container-header">
      <div class="page-container-header-left">
        <i class="el-icon-menu"></i> <span >登录日志管理</span>
      </div>
      <div class="page-container-header-middle">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item >
            <el-input placeholder="请输入要搜索的用户" v-model="formInline.user" class="input-with-select">
              <template v-slot:append>
                <el-button type="primary" >搜索</el-button>
              </template>
            </el-input>
          </el-form-item>
        </el-form>
      </div>
      <div class="page-container-header-right">
        <el-button size="small"  type="primary"><i class="el-icon-plus"></i> 新增用户</el-button>
        <el-button size="small"  type="primary"><i class="el-icon-download"></i> 数据导出</el-button>
      </div>
    </div>
    <div class="page-content-container">
      <div class="page-content-container-left">
      </div>
      <div class="page-content-container-right white-bg">
        <div class="page-content-header">
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="用户ID">
              <el-input v-model="formInline.user" placeholder="用户ID | 用户名称"></el-input>
            </el-form-item>
            <el-form-item label="时间">
              <el-date-picker  v-model="formInline.time"  type="daterange"  range-separator="至"  start-placeholder="开始日期"  end-placeholder="结束日期">
    </el-date-picker>
              
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">查询</el-button>
              <el-button type="primary" @click="onSubmit">导出</el-button>
            </el-form-item>
          </el-form>
        </div>
        <div class="page-content-main">
          <el-table stripe :data="tableData" style="width: 100%" height="100%" row-key="id" :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
            <el-table-column fixed type="selection" width="55"></el-table-column>
            <el-table-column fixed prop="userid" label="用户ID" width="90" sortable></el-table-column>
            <el-table-column prop="username" label="用户名称" width="200" sortable></el-table-column>
            <el-table-column prop="user_agent" label="UserAgent" sortable></el-table-column>
            <el-table-column prop="ip" label="IP" width="90"></el-table-column>
            <el-table-column prop="operation" label="操作" width="100"></el-table-column>
            <el-table-column prop="time" label="时间" width="120" sortable></el-table-column>
            <el-table-column  fixed="right"  label="操作"  width="140">
              <template v-slot="scope">
                <el-button size="mini" @click="handleClick(scope.row)" icon="el-icon-view"></el-button>
                <el-button size="mini" @click="handleClick(scope.row)" icon="el-icon-edit" type="warning"></el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="page-content-footer">
          <div class="page-content-footer-left">
            <div class="selected-title">已选中 <span class="selected—count">5</span> 项</div>
            <div class="vux-flexbox selection-items-box vux-flex-row">
              <button type="button" class="el-button el-button--primary"><i class="wk wk-transfer"></i><span>转移</span></button>
              <button type="button" class="el-button el-button--primary"><i class="wk wk-export"></i><span>导出选中</span></button>
              <button type="button" class="el-button el-button--primary"><i class="wk wk-delete"></i><span>删除</span></button>
            </div>
          </div>
          <div class="page-content-footer-middle">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
            </el-pagination>
          </div>
          <div class="page-content-footer-right">

          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'ElPageDemo',
    data(){
      return{
        isCollapse: true,
        formInline: {
          user: '',
          time: ''
        },
        currentPage4: 4,
        tableData: [
        {
            "flag":false,
            "handle":"",
            "id":10000,
            "input":"",
            "ip":"127.0.0.1",
            "operation":"login",
            "output":"",
            "remark":"",
            "result":"",
            "state":false,
            "time":"",
            "token":"",
            "user_agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.104 Safari/537.36",
            "userid":2045,
            "username":"yangqisheng@aegicare.cn"
        },
        {
            "flag":false,
            "handle":"",
            "id":10000,
            "input":"",
            "ip":"127.0.0.1",
            "operation":"login",
            "output":"",
            "remark":"",
            "result":"",
            "state":false,
            "time":"",
            "token":"",
            "user_agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.104 Safari/537.36",
            "userid":2045,
            "username":"yangqisheng@aegicare.cn"
        },
        {
            "flag":false,
            "handle":"",
            "id":10000,
            "input":"",
            "ip":"127.0.0.1",
            "operation":"login",
            "output":"",
            "remark":"",
            "result":"",
            "state":false,
            "time":"",
            "token":"",
            "user_agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.104 Safari/537.36",
            "userid":2045,
            "username":"yangqisheng@aegicare.cn"
        },
        {
            "flag":false,
            "handle":"",
            "id":10000,
            "input":"",
            "ip":"127.0.0.1",
            "operation":"login",
            "output":"",
            "remark":"",
            "result":"",
            "state":false,
            "time":"",
            "token":"",
            "user_agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.104 Safari/537.36",
            "userid":2045,
            "username":"yangqisheng@aegicare.cn"
        },
        {
            "flag":false,
            "handle":"",
            "id":10000,
            "input":"",
            "ip":"127.0.0.1",
            "operation":"login",
            "output":"",
            "remark":"",
            "result":"",
            "state":false,
            "time":"",
            "token":"",
            "user_agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.104 Safari/537.36",
            "userid":2045,
            "username":"yangqisheng@aegicare.cn"
        },
        {
            "flag":false,
            "handle":"",
            "id":10000,
            "input":"",
            "ip":"127.0.0.1",
            "operation":"login",
            "output":"",
            "remark":"",
            "result":"",
            "state":false,
            "time":"",
            "token":"",
            "user_agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.104 Safari/537.36",
            "userid":2045,
            "username":"yangqisheng@aegicare.cn"
        },
        ]
      };
    },
    props: {
      
    },

    mounted() {

    },
    methods:{
      handleSelect(index, indexPath){
        console.log(index)
        console.log(indexPath)
      },
      handleClick(item){
        console.log(item)
        console.log('isCollapse',this.isCollapse)
        this.isCollapse = !this.isCollapse;
      },
      onSubmit() {
        console.log('submit!');
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      handleDelete(index, row) {
        console.log(index, row);
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