<template>
  <div class="page-wrapper">
    <div class="page-container-header">
      <div class="page-container-header-left">
        <i class="el-icon-menu"></i> <span >添加用户</span>
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
        <el-button size="small"  type="primary"><i class="el-icon-plus"></i> 批量导入用户信息</el-button>
      </div>
    </div>
    <div class="page-content-container">
      <div class="page-content-container-left">
      </div>
      <div class="page-content-container-right">
        <el-card>
          <el-user-form></el-user-form>
          <div v-for="i in count">
            <el-relative-form @delete="handleDelete"></el-relative-form>
          </div>
            
          
          <div class="form-handle-btns">
            <el-button type="primary" @click="addRelationship()">添加亲属</el-button>
          </div>
          <div class="form-handle-btns text-align-center">
            <el-button type="primary" @click="goMyUser">提交到我的用户</el-button>
            <el-button type="primary" @click="goAddSample">提交并到录入样本</el-button>
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
        if (this.count > 0) {
          this.count --
        }
      },
      addRelationship(){
        this.count = this.count + 1 ;
      },
      goMyUser(){
        this.$router.push('/sale/my/users')
      },
      goAddSample(){
        this.$router.push('/sale/order/sampleadd')
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