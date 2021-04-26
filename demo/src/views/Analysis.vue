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
          'link':'/analysis',
          'title':'面板',
          'icon':'el-icon-odometer',
        },
        {
          'link':'/analysis/sale',
          'title':'销售统计',
          'icon':'el-icon-goods',
          'children':[
          {
            'link':'/analysis/sale/order',
            'title':'订单分析',
            'icon':'el-icon-menu',
          },
          {
            'link':'/analysis/sale/productivity',
            'title':'绩效分析',
            'icon':'el-icon-menu',
          },
          ]
        },
        {
          'link':'/analysis/config',
          'title':'生产统计',
          'icon':'el-icon-goblet',
          'children':[
          {
            'link':'/analysis/production/whole',
            'title':'整体统计',
            'icon':'el-icon-menu',
          },
          {
            'link':'/analysis/production/labrotory',
            'title':'实验室',
            'icon':'el-icon-menu',
          },
          {
            'link':'/analysis/production/bioanalysis',
            'title':'生信',
            'icon':'el-icon-menu',
          },
          {
            'link':'/analysis/production/medreport',
            'title':'医学',
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