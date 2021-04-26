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
          'link':'/sale',
          'title':'销售面板',
          'icon':'el-icon-odometer',
        },
        {
          'link':'/sale/my/',
          'title':'我的',
          'icon':'el-icon-present',
          'children':[
          {
            'link':'/sale/my/users',
            'title':'我负责的用户',
            'icon':'el-icon-menu',
          },
          {
            'link':'/sale/my/doctors',
            'title':'我负责的医生',
            'icon':'el-icon-menu',
          },
          {
            'link':'/sale/my/hospitals',
            'title':'我负责的医院',
            'icon':'el-icon-menu',
          },
          {
            'link':'/sale/my/samples',
            'title':'我负责的样本',
            'icon':'el-icon-menu',
          },
          {
            'link':'/sale/my/orders',
            'title':'我负责的订单',
            'icon':'el-icon-menu',
          },
          ]
        },
        {
          'link':'/sale/order',
          'title':'下单管理',
          'icon':'el-icon-goods',
          'children':[
          {
            'link':'/sale/order/list',
            'title':'订单管理',
            'icon':'el-icon-menu',
          },
          {
            'link':'/sale/order/useradd',
            'title':'用户录入',
            'icon':'el-icon-menu',
          },
          {
            'link':'/sale/order/sampleadd',
            'title':'样本录入',
            'icon':'el-icon-menu',
          },
          {
            'link':'/sale/order/orderadd',
            'title':'订单录入',
            'icon':'el-icon-menu',
          },
          {
            'link':'/sale/order/special',
            'title':'定制产品订单录入',
            'icon':'el-icon-menu',
          },
          {
            'link':'/sale/order/append',
            'title':'加单处理',
            'icon':'el-icon-menu',
          },
          ]
        },
        {
          'link':'/sale/deliver/',
          'title':'交付管理',
          'icon':'el-icon-present',
          'children':[
          {
            'link':'/sale/deliver/review',
            'title':'待审核报告',
            'icon':'el-icon-menu',
          },
          {
            'link':'/sale/deliver/reports',
            'title':'报告管理',
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