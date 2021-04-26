<template>
  <el-container class="layout-container">
    <el-header class="layout-header">
      <div class="header-left">
        <img class="header-logo" src="https://chv.oss-cn-shanghai.aliyuncs.com/aegicare/logo_new.png">
      </div>
      <div class="header-middle">
        <el-top-menu></el-top-menu>
      </div>
      <div class="header-right">
        <el-user-notice></el-user-notice>
      </div>
    </el-header>
    <el-container class="layout-body">
      <el-aside class="layout-aside" width="auto">
        <el-asider-menu :tree="asider_menus"></el-asider-menu>
      </el-aside>
      <el-main class="layout-content-wrapper">
        <div class="layout-content">
          <router-view></router-view>
        </div>
        <div class="layout-content-footer">
          <p>&reg;CopyRight by Aegicare</p>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
  export default {
    data(){
      return{
        asider_menus:[
        {
          'link':'/',
          'title':'资源面板',
          'icon':'el-icon-odometer',
        },
        {
          'link':'/resources/user',
          'title':'用户管理',
          'icon':'el-icon-document',
          'children':[
          {
            'link':'/resources/user/list',
            'title':'用户列表',
            'icon':'el-icon-menu',
          },
          {
            'link':'/resources/user/relationship',
            'title':'亲属关系',
            'icon':'el-icon-menu',
          },
          {
            'link':'/resources/user/doctor/',
            'title':'医生管理',
            'icon':'el-icon-menu',
          },
          {
            'link':'/resources/user/hospital',
            'title':'医院管理',
            'icon':'el-icon-menu',
          },
          {
            'link':'/resources/user/department_tag',
            'title':'科室标签',
            'icon':'el-icon-menu',
          },
          {
            'link':'/resources/user/orgnization/',
            'title':'机构管理',
            'icon':'el-icon-menu',
          },
          ]
        },
        {
          'link':'/resources/product',
          'title':'产品管理',
          'icon':'el-icon-document',
          'children':[
          {
            'link':'/resources/product/list',
            'title':'产品列表',
            'icon':'el-icon-menu',
          },
          {
            'link':'/resources/product/price',
            'title':'价格备案',
            'icon':'el-icon-menu',
          },
          {
            'link':'/resources/product/laboratory',
            'title':'实验室内容管理',
            'icon':'el-icon-menu',
          },
          {
            'link':'/resources/product/bioanalysis',
            'title':'生信内容管理',
            'icon':'el-icon-menu',
          },
          {
            'link':'/resources/product/report_type',
            'title':'医学报告类型',
            'icon':'el-icon-menu',
          },
          {
            'link':'/resources/product/report_template',
            'title':'医学报告模板管理',
            'icon':'el-icon-menu',
          },
          {
            'link':'/resources/product/status',
            'title':'生产状态管理',
            'icon':'el-icon-menu',
          },
          {
            'link':'/resources/product/process',
            'title':'生产操作管理',
            'icon':'el-icon-menu',
          },
          {
            'link':'/resources/product/progress',
            'title':'生产流程管理',
            'icon':'el-icon-menu',
          },
          ]
        },
        {
          'link':'/resources/sample',
          'title':'样本管理',
          'icon':'el-icon-goblet',
          'children':[
          {
            'link':'/resources/sample/store',
            'title':'样本库存',
            'icon':'el-icon-menu',
          },
          {
            'link':'/resources/sample/types',
            'title':'样本类型',
            'icon':'el-icon-menu',
          },
          ]
        },
        {
          'link':'/resources/project',
          'title':'项目管理',
          'icon':'el-icon-document',
          'children':[
          {
            'link':'/resources/project/list',
            'title':'项目列表',
            'icon':'el-icon-menu',
          },
          {
            'link':'/resources/project/add',
            'title':'项目录入',
            'icon':'el-icon-menu',
          },
          ]
        },
        ]
      }
    },
    methods:{

    },

  }
</script>

<style>
.layout-container{
  height: 100%;
  min-width: 1080px;
}
.layout-header{
  border-bottom: 1px solid #dedede;
  background-color: #fff;
  height: 60px;
  border: 0;
  display: flex;
  color: #2a304d;
}
.layout-header .el-menu{
  background-color: #fff;
  border: 1px solid #fff;
}
.layout-header .el-menu-item,.layout-header .el-submenu__title,.layout-header .el-menu-item-group__title{
  color: #2a304d;
}
.layout-header .el-menu--horizontal>.el-menu-item,.layout-header .el-menu--horizontal>.el-menu-item i{
 color: #2a304d;
}

.header-left{
  width: 200px;
}
.header-logo{
  height: 60px;
}
.header-middle{
  flex: 1;
  overflow: hidden;
}

.layout-body{
  height: calc(100% - 60px);
}
.layout-aside{
  position: relative;
  height: 100%;
  border: 0;
  overflow-x: hidden;
  background-color: #001529;
  color: #fff;
}
.layout-content-wrapper{
  padding: 0;
  width: 100%;
  min-width: 960px;
  height: 100%;
  position: relative;
}
.layout-content{
  height: calc(100% - 30px);
}
.layout-content-footer{
  text-align: center;
  height: 30px;
  line-height: 30px;
}
</style>