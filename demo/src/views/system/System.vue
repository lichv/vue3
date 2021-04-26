<template>
  <div class="page-wrapper">
    <div class="page-container-header">
      <div class="page-container-header-left">
        <el-form :inline="true"  class="demo-form-inline">
          <el-form-item >
            <el-dropdown>
              <div class="range-box user-range">
                <el-avatar :size="28" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" class="user-range-avatar"></el-avatar>
                <span class="range-text">高兴</span><i class="el-icon-arrow-down el-icon--right"></i>
              </div>
              <template v-slot:dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>仅本人</el-dropdown-item>
                  <el-dropdown-item>本人及下属</el-dropdown-item>
                  <el-dropdown-item>仅本部门</el-dropdown-item>
                  <el-dropdown-item>本部门及下属部门</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </el-form-item>
          <el-form-item >
            <el-dropdown>
              <div class="range-box time-range">
                <span class="range-text">上周</span><i class="el-icon-arrow-down el-icon--right"></i>
              </div>
              <template v-slot:dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>本周</el-dropdown-item>
                  <el-dropdown-item>上周</el-dropdown-item>
                  <el-dropdown-item>本月</el-dropdown-item>
                  <el-dropdown-item>上月</el-dropdown-item>
                  <el-dropdown-item>本季度</el-dropdown-item>
                  <el-dropdown-item>上季度</el-dropdown-item>
                  <el-dropdown-item>本年</el-dropdown-item>
                  <el-dropdown-item>上年</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </el-form-item>
        </el-form>
      </div>
      <div class="page-container-header-middle">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item >
            <el-input placeholder="请输入要搜索的审批人" v-model="formInline.user" class="input-with-select">
              <template v-slot:append>
                <el-button type="primary" >搜索</el-button>
              </template>
            </el-input>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="page-content-container">
      <div class="page-content-container-left">
      </div>
      <div class="page-content-container-right">
        <div class="display-flex">
          <el-card class="dashboard-card width-256">
            <div class="card-left">
              <div class="card-title">
                新增用户
              </div>
              <div class="card-content">
                <span class="dashboard-number">97</span> 位
              </div>
            </div>
            <div class="card-right">
              <div class="card-title">
                较上周
              </div>
              <div class="card-content">
                <span class="dashboard-rate-increase">12%</span>
              </div>
            </div>
          </el-card>
          <el-card class="dashboard-card width-256">
            <div class="card-left">
              <div class="card-title">
                新增订单量
              </div>
              <div class="card-content">
                <span class="dashboard-number">107</span> 位
              </div>
            </div>
            <div class="card-right">
              <div class="card-title">
                较上周
              </div>
              <div class="card-content">
                <span class="dashboard-rate-decrease">12%</span>
              </div>
            </div>
          </el-card>
          <el-card class="dashboard-card width-256">
            <div class="card-left">
              <div class="card-title">
                新增样本量
              </div>
              <div class="card-content">
                <span class="dashboard-number">117</span> 位
              </div>
            </div>
            <div class="card-right">
              <div class="card-title">
                较上周
              </div>
              <div class="card-content">
                <span class="dashboard-rate-increase">12%</span>
              </div>
            </div>
          </el-card>
          <el-card class="dashboard-card width-256">
            <div class="card-left">
              <div class="card-title">
                报告交付量
              </div>
              <div class="card-content">
                <span class="dashboard-number">111</span> 位
              </div>
            </div>
            <div class="card-right">
              <div class="card-title">
                较上周
              </div>
              <div class="card-content">
                <span class="dashboard-rate-increase">12%</span>
              </div>
            </div>
          </el-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'ElSalePage',
    data(){
      return{
        isCollapse: true,
        formInline: {
          user: '',
          region: ''
        },
        currentPage4: 4,
        
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

.range-box{
  width: unset;
  height: 36px;
  padding: 4px 7px;
  border: 1px solid #e1e1e1;
  border-radius: 4px;
  background-color: #fff;
  margin-right: 20px;
  display: flex;
  cursor: pointer;
}
.user-range-avatar{
  height: 28px;
  width: 28px;
  line-height: 28px;
  font-size: 12px;
  background: rgb(35, 98, 251);
}
.range-box span ,.range-box i{
  font-size: 12px;

  line-height: 32px;
  height: 32px;
}
.range-text{
  margin: 0 8px;
}
</style>