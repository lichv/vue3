<template>
  <el-form ref="form" :model="form" class="relative-form">
    <el-row>
      <el-col :span="8">
        <el-form-item label="参照用户名称" label-width="96px">
          <el-input v-model="form.referent"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label="参照关系" label-width="116px">
          <el-select v-model="form.relation" placeholder="请选择样本类型">
            <el-option label="爸爸" value="爸爸"></el-option>
            <el-option label="妈妈" value="妈妈"></el-option>
            <el-option label="爷爷" value="爷爷"></el-option>
            <el-option label="奶奶" value="奶奶"></el-option>
            <el-option label="叔叔" value="叔叔"></el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item >
          <el-button type="danger" @click="handleDelete()" icon="el-icon-delete">删除</el-button>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <el-form-item label="客户名称" label-width="96px">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="6">
        <el-form-item label="性别" label-width="56px">
          <el-radio-group v-model="form.gender" size="mini">
            <el-radio-button label="男"></el-radio-button>
            <el-radio-button label="女"></el-radio-button>
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
         <el-input v-model="form.saler"></el-input>
       </el-form-item>
     </el-col>
   </el-row>
</el-form>
</template>
<script>
  import pca from '/@/assets/pca-code.json'
  export default {
    name: 'ElRelativeForm',
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
.relative-form{
  text-align: left;
  border: 1px dashed #ccc;
  padding: 6px;
  border-radius: 6px;
  margin-top: 6px;
}
</style>
