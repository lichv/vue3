<template>
  <el-cascader v-model="value" :options="options" @change="handleChange"></el-cascader>
</template>
<script>
  export default {
    name: 'ElAreaSelect',
    data(){
      return{
        value: [],
        options:[
        {
          value: '11',
          label: '北区团队',
          children: [
          {
            value: '37',
            label: '山东',
          },
          {
            value: '41',
            label: '河南',
          },
          {
            value: '14',
            label: '山西',
          },
          ],
        },
        {
          value: '12',
          label: '南区团队',
          children: [
          {
            value: '50',
            label: '重庆',
          },
          {
            value: '33',
            label: '浙江',
          },
          {
            value: '45',
            label: '广西',
          },
          {
            value: '44',
            label: '广东',
          },
          {
            value: '43',
            label: '湖南',
          },
          ],
        },
        {
          value: '13',
          label: '北京团队',
          children: [
          {
            value: '11',
            label: '北京',
          },
          ],
        },
        {
          value: '14',
          label: '华中团队',
          children: [
          {
            value: '42',
            label: '湖北',
          },
          {
            value: '34',
            label: '安徽',
          },
          ],
        },
        ],
      };
    },

    mounted() {

    },
    methods:{
      handleChange(value) {
        console.log(value);
      }
    },
  };
</script>
<style>

</style>