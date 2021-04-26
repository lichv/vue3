<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>


.el-menu{
  background-color: #001529;
  border: 1px solid #fff;
  color: #BEBEC0;
}
.el-submenu__title{
  color: #BEBEC0;
}
.el-menu-item-group__title{
  color: #BEBEC0;
}
.el-menu-item{
 color: #BEBEC0; 
}
.el-menu-item i{
  color: #BEBEC0; 
}
.el-menu-item:hover,.el-submenu__title:hover, .el-menu-item-group__title:hover{
  background-color: hsla(0,0%,100%,.1);
}
.text-color-green{
  color: #67C23A;
}
.text-color-red{
  color: #F56C6C;
}
.el-table .cell > i {
  font-size: 20px;
}
.tree-item-text{
  padding-right: 8px;
}
.tree-item-icon{
  padding: 2px 4px;
  margin-right: 4px;
  background-color: #409EFF;
  color: #fff;
  border-radius: 2px;
}

.page-wrapper{
  position: relative;
  overflow: auto;
  border-top: 1px solid #e6e6e6;
  border-bottom: 1px solid #e6e6e6;
  border-radius: 2px;
  height: 100%;
}
.page-container-header{
  padding: 10px 20px;
  display: flex;
  height: 50px;
}

.page-container-header-left{
  width: auto;
  font-size: 16px;
  font-weight: 600;
  width: 320px;
  text-align: left;
  position: relative;
  top: 10px;
}
.page-container-header-middle{
  flex: 1;
  text-align: center;
}
.page-container-header-middle .el-form-item{
  margin-bottom:0;
}
.page-container-header-middle .el-input__inner{
  height: 32px;
  line-height: 32px;
}
.page-container-header-right{
  display: flex;
  width: auto;
  text-align: right;
}
.page-container-header-middle .el-input-group__append, .el-input-group__prepend{
  color: #FFF;
  background-color: #409EFF;
  border-color: #409EFF;
}
.page-content-container{
  height: calc(100% - 60px);
  padding: 10px;
  display: flex;
}
.page-content-container-left{
  width: auto;
  height: 100%;
}
.page-content-container-left > .el-card{
  height: 100%;
}
.page-content-container-left > .el-card > .el-card__body{
  height: 100%;
  padding: 12px 0;
}
.page-content-container-left > .el-card > .el-card__body > .el-input{
  margin: 0 12px;
  width: calc(100% - 24px);
  padding-bottom: 6px;
  border-bottom: 1px solid #ccc;
}
.page-content-container-content{
  height: calc(100% - 36px);
  overflow-y: scroll;
}
.page-content-container-right{
  flex: 1;
  margin-left: 12px;
  text-align: left;
}
.page-content-header{
  padding: 15px 20px 0 20px;
  height: 62px;
  text-align: left;
  border-bottom: 1px solid #ccc;
}
.page-content-header .el-input__inner{
  height: 32px;
  line-height: 32px;
}
.page-content-header .el-button{
  padding: 6px 20px;
}
.page-content-main{
  padding: 0 20px 8px 20px;
  height: calc(100% - 100px);
}
.page-content-main .el-button--mini, .el-button--mini.is-round{
  padding: 4px 8px;
}

.page-content-footer{
  height: 32px;
  text-align: center;
  display: flex;
}
.page-content-footer-left{
  width: 400px;
  display: flex;
  padding: 0 20px;
}
.selected-title{
  margin: 0 4px;
}
.page-content-footer-left .el-button{
  padding: 4px 10px;
}
.page-content-footer-middle{
  flex:1;
  text-align: center;
}
.page-content-footer-right{
  width: 400px;
}

.dashboard-card{
  margin: 12px;
}
.dashboard-card > .el-card > .el-card__body{
  display: flex;
}
.card-left{
  flex: 1;
  border-right: 1px solid #e1e1e1;
}
.card-right{
  width: 64px;
  margin-left: 20px;
}
.card-title{
  padding: 0 4px;
}
.card-content{
  padding: 14px 8px 0 ;
}
.dashboard-number{
  font-size: 32px;
  font-weight: 700;
}
.dashboard-rate-increase{
  color: rgb(39, 186, 74);
}
.dashboard-rate-decrease{
  color: #f00;
}
.batch-handle{
  width: 400px;
  display: flex;
  padding: 0 20px;
}
.selected-title{
 margin: 0 4px;
}
.batch-handle .el-button{
  padding: 4px 10px;
}
.pagination{
  flex:1;
  text-align: center;
}
.is-date-selected {
  color: #1989FA;
}
.dashboard-card .el-calendar-table .el-calendar-day{
  height: 48px;
}
.form-address-detail > .el-form-item__content{
  display: flex;
  padding: 0 12px 0 0;
}
.pca-select{
  width: 320px;
}
.form-handle-btns{
  padding: 12px 0 0 0;
}
.form-item-content{
  padding: 12px;
  border: 1px dashed #ccc;
}
</style>
