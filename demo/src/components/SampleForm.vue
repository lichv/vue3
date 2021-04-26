<template>
  <el-form ref="form" :model="form" class="sample-form">
    <el-row>
      <el-col :span="8">
        <el-form-item label="所属客户" label-width="96px">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label="样本条码" label-width="96px">
          <el-input v-model="form.code">
            <template #append>
              <el-button icon="el-icon-full-screen"></el-button>
            </template>
          </el-input>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label-width="36px">
          <el-button type="danger" @click="handleDelete()" icon="el-icon-delete">删除</el-button>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <el-form-item label="样本类型" label-width="96px">
          <el-select v-model="form.sample_type" placeholder="请选择样本类型">
            <el-option label="血液" value="血液"></el-option>
            <el-option label="尿液" value="尿液"></el-option>
          </el-select>

        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label="样本采集器" label-width="116px" class="form-address-detail">
          <el-select v-model="form.sample_collector" placeholder="请选择样本类型">
            <el-option label="紫头管" value="紫头管"></el-option>
            <el-option label="红头管" value="红头管"></el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label="样本量" label-width="56px" class="form-address-detail">
          <el-input v-model="form.sample_size" >
            <template #append>mL</template>
          </el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <el-form-item label="采集负责人" label-width="96px">
         <el-input v-model="form.saler"></el-input>
       </el-form-item>
     </el-col>
     <el-col :span="8">
      <el-form-item label="采集时间" label-width="96px">
       <el-input v-model="form.saler"></el-input>
     </el-form-item>
   </el-col>
 </el-row>
</el-form>
</template>
<script>
  import pca from '/@/assets/pca-code.json'
  export default {
    name: 'ElSampleForm',
    data(){
      return{
        value: [],
        options:[],
        form: {
          'ap':'AP23350',
          'af':'AF23330',
          'name': '*佳豪',
          'gender': '男',
          'birth': '1995/12/12',
          'mobile': '13012345678',
          'province': '广东',
          'city': '深圳',
          'county': '南山区',
          'address': '大冲城市花园',
          'referent': 'AP23333',
          'relation': '爸爸',
          'saler':'12312',
          'regtime': '2020/08/02 14:23:12',
          'is_contact': true,
          'remark': '',
        },
      };
    },
    props: {

    },
    mounted() {
      console.log('pca',pca)
      this.options = pca;
    },

    methods: {
      onSubmit:function() {
        console.log('submit!');
      },
      handleDelete(){
        this.$emit('delete',this.form)
      },
    }
  };
</script>
<style>
.sample-form{
  text-align: left;
  border: 1px dashed #ccc;
  padding: 6px;
  border-radius: 6px;
  margin-top: 6px;
}
</style>
