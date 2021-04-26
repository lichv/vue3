<template>
  <el-form ref="form" :model="form" class="user-form">
    <el-row>
      <el-col :span="8">
        <el-form-item label="客户名称" label-width="96px">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="6">
        <el-form-item label="性别" label-width="56px">
          <el-radio-group v-model="form.gender" size="mini">
            <el-radio-button label="男" value="1"></el-radio-button>
            <el-radio-button label="女" value="2"></el-radio-button>
            <el-radio-button label="未知" value="0"></el-radio-button>
          </el-radio-group>
        </el-form-item>
      </el-col>
      <el-col :span="10">
        <el-form-item label="出生日期" label-width="80px" class="form-address-detail">
          <el-input v-model="form.birth"></el-input>
          <el-input v-model="form.age" ><template #append>岁</template></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <el-form-item label="手机号码" label-width="96px">
          <el-input v-model="form.mobile"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="16">
        <el-form-item label="地址" label-width="56px" class="form-address-detail">
          <el-cascader :options="options" :props="{label:'name',value:'code'}" clearable class="pca-select" ></el-cascader>
          <el-input v-model="form.address"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <el-form-item label="销售负责人" label-width="96px">
         <el-input v-model="form.saler" disabled></el-input>
       </el-form-item>
     </el-col>
   </el-row>
</el-form>
</template>
<script>
  import pca from '/@/assets/pca-code.json'
  export default {
    name: 'ElUserForm',
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
    }
  };
</script>
<style>
.user-form{
  text-align: left;
  border: 1px dashed #ccc;
  padding: 6px;
  border-radius: 6px;
  margin-top: 6px;
}
</style>
