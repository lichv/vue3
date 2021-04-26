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
          'link':'/production',
          'title':'生产面板',
          'icon':'el-icon-odometer',
        },
        {
          'link':'/production/record',
          'title':'在产记录',
          'icon':'el-icon-odometer',
        },
        
        {
          'link':'/production/lab',
          'title':'实验室',
          'icon':'el-icon-user',
          'children':[
          {
            'link':'/production/lab/receive',
            'title':'样本批量接收',
            'icon':'el-icon-menu',
          },
          {
            'link':'/production/lab/labcheck',
            'title':'待审核订单',
            'icon':'el-icon-menu',
          },
          {
            'link':'/production/lab/documents',
            'title':'实验单管理',
            'icon':'el-icon-menu',
          },
          {
            'link':'/production/lab/mydocuments',
            'title':'我的实验单',
            'icon':'el-icon-menu',
          },
          {
            'link':'/production/lab/unnormal',
            'title':'实验问题样本',
            'icon':'el-icon-menu',
          },
          ]
        },
        {
          'link':'/production/bio',
          'title':'生信管理',
          'icon':'el-icon-help',
          'children':[
          {
            'link':'/production/bio/documents',
            'title':'生信分析管理',
            'icon':'el-icon-menu',
          },
          {
            'link':'/production/bio/mydocuments',
            'title':'我的生信分析',
            'icon':'el-icon-menu',
          },
          {
            'link':'/production/bio/qc',
            'title':'生信质控',
            'icon':'el-icon-menu',
          },
          {
            'link':'/production/bio/unnormal',
            'title':'生信问题样本',
            'icon':'el-icon-menu',
          },
          ]
        },
        {
          'link':'/production/med',
          'title':'医学管理',
          'icon':'el-icon-help',
          'children':[
          {
            'link':'/production/med/medcheck',
            'title':'医学待审核订单',
            'icon':'el-icon-menu',
          },
          {
            'link':'/production/med/report',
            'title':'医学报告管理',
            'icon':'el-icon-menu',
          },
          {
            'link':'/production/med/myreport',
            'title':'我的医学报告管理',
            'icon':'el-icon-menu',
          },
          {
            'link':'/production/med/mycustomer',
            'title':'我负责的用户',
            'icon':'el-icon-menu',
          },
          {
            'link':'/production/med/unnormal',
            'title':'医学问题样本',
            'icon':'el-icon-menu',
          },
          ]
        },
        {
          'link':'/production/unnormal',
          'title':'问题样本',
          'icon':'el-icon-odometer',
        },
        {
          'link':'/production/diary',
          'title':'生产日志',
          'icon':'el-icon-odometer',
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