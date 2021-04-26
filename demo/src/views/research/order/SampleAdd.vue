<template>
  <div class="page-wrapper">
    <div class="page-container-header">
      <div class="page-container-header-left">
        <i class="el-icon-menu"></i> <span >添加样本</span>
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
        <el-button size="small"  type="primary" @click="addSample()"><i class="el-icon-plus"></i> 添加样本</el-button>
        <el-button size="small"  type="primary"><i class="el-icon-plus"></i> 批量导入样本</el-button>
      </div>
    </div>
    <div class="page-content-container">
      <div class="page-content-container-left">
      </div>
      <div class="page-content-container-right">
        <el-card>
          <div v-for="i in count">
          <el-sample-form @delete="handleDelete"></el-sample-form>
        </div>
          <div class="form-handle-btns">
            <el-button type="primary" @click="addSample()">添加样本</el-button>
          </div>
          <div class="form-handle-btns text-align-center">
            <el-button type="primary" @click="goMySample">提交到我的样本</el-button>
            <el-button type="primary" @click="goAddOrder">提交并到录单</el-button>
            <el-button>取消</el-button>
          </div>
      </el-card>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        isCollapse: true,
        relatives:[],
        formInline: {
          user: '',
          region: ''
        },
        count:1,
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
      handleDelete(data) {
        console.log(data);
        if (this.count > 1) {
          this.count --
        }
      },
      addSample(){
        this.count = this.count + 1 ;
      },
      goMySample(){
        this.$router.push('/sale/my/samples')
      },
      goAddOrder(){
        this.$router.push('/sale/order/orderadd')
      },
    },
    computed:{

    },
    created(){

    }
  };
</script>
<style >

</style>