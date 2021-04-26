<template>
  <div class="page-wrapper">
    <div class="page-container-header">
      <div class="page-container-header-left">
        <i class="el-icon-menu"></i> <span >价格备案</span>
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
        <el-button size="small"  type="primary"><i class="el-icon-plus"></i> 新增用户</el-button>
        <el-button size="small"  type="primary"><i class="el-icon-download"></i> 数据导出</el-button>
      </div>
    </div>
    <div class="page-content-container">
      <div class="page-content-container-left">
      </div>
      <div class="page-content-container-right white-bg">
        <div class="page-content-header">
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="用户">
              <el-input v-model="formInline.user" placeholder="AP号 | AF号"></el-input>
            </el-form-item>
            <el-form-item label="区域">
              <el-select v-model="formInline.region" placeholder="区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">查询</el-button>
              <el-button type="primary" @click="onSubmit">导出</el-button>
            </el-form-item>
          </el-form>
        </div>
        <div class="page-content-main">
          <el-table stripe :data="tableData" style="width: 100%" height="100%" row-key="id" :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
            <el-table-column fixed type="selection" width="55"></el-table-column>
            <el-table-column fixed prop="code" label="产品编号" width="100" sortable></el-table-column>
            <el-table-column prop="name" label="产品名称" sortable></el-table-column>
            <el-table-column prop="detection_company" label="全国参考最低价" width="140" sortable></el-table-column>
            <el-table-column prop="detection" label="过去一月平均价格" width="150"></el-table-column>
            <el-table-column prop="application" label="过去一月最低价格" width="140" sortable></el-table-column>
            <el-table-column prop="application" label="过去一月最高价格" width="140" sortable></el-table-column>
            <el-table-column prop="group" label="详情" width="120"></el-table-column>
            <el-table-column prop="state" label="产品状态" width="120">
              <template v-slot="scope">
                <i v-if="scope.row.state" class="el-icon-check text-color-green"></i>
                <i v-else class="el-icon-close text-color-red"></i>
              </template>
            </el-table-column>
            <el-table-column  fixed="right"  label="操作"  width="160">
              <template v-slot="scope">
                <el-button size="mini" @click="handleClick(scope.row)" icon="el-icon-view"></el-button>
                <el-button size="mini" @click="handleClick(scope.row)" icon="el-icon-edit" type="warning"></el-button>
                <el-button size="mini" @click="handleClick(scope.row)" icon="el-icon-delete-solid" type="danger"></el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="page-content-footer">
          <div class="page-content-footer-left">
            <div class="selected-title">已选中 <span class="selected—count">5</span> 项</div>
            <div class="vux-flexbox selection-items-box vux-flex-row">
              <button type="button" class="el-button el-button--primary"><i class="wk wk-transfer"></i><span>转移</span></button>
              <button type="button" class="el-button el-button--primary"><i class="wk wk-export"></i><span>导出选中</span></button>
            </div>
          </div>
          <div class="page-content-footer-middle">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
            </el-pagination>
          </div>
          <div class="page-content-footer-right">

          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'ElPageDemo',
    data(){
      return{
        isCollapse: true,
        formInline: {
          user: '',
          region: ''
        },
        currentPage4: 4,
        tableData: [
        {
            "advantage":"",
            "analysises":"",
            "application":"",
            "brief":"",
            "category":"",
            "code":"AJKE101",
            "description":"",
            "detection":"",
            "detection_company":"",
            "detection_period":"",
            "experimentals":"",
            "flag":false,
            "group":"",
            "id":2001,
            "is_family":false,
            "is_single":false,
            "mailing_type":"",
            "min_price":0,
            "name":"7天极致周期家系全基因组检测（不含Sanger验证）",
            "parameter":"",
            "platform":"",
            "price":0,
            "pubtime":"",
            "remark":"",
            "reports":"",
            "sample_collector":"",
            "sample_size":"",
            "sample_store":"",
            "sample_type":"",
            "state":true,
            "subject":"",
            "target":""
        },
        {
            "advantage":"",
            "analysises":"",
            "application":"",
            "brief":"",
            "category":"",
            "code":"AJKE102",
            "description":"",
            "detection":"",
            "detection_company":"",
            "detection_period":"",
            "experimentals":"",
            "flag":false,
            "group":"",
            "id":2002,
            "is_family":false,
            "is_single":false,
            "mailing_type":"",
            "min_price":0,
            "name":"14天加急-家系全基因组检测（不含Sanger验证）",
            "parameter":"",
            "platform":"",
            "price":0,
            "pubtime":"",
            "remark":"",
            "reports":"",
            "sample_collector":"",
            "sample_size":"",
            "sample_store":"",
            "sample_type":"",
            "state":true,
            "subject":"",
            "target":""
        },
        {
            "advantage":"",
            "analysises":"",
            "application":"",
            "brief":"",
            "category":"",
            "code":"AJKE103",
            "description":"",
            "detection":"",
            "detection_company":"",
            "detection_period":"",
            "experimentals":"",
            "flag":false,
            "group":"",
            "id":2003,
            "is_family":false,
            "is_single":false,
            "mailing_type":"",
            "min_price":0,
            "name":"单人全基因组检测（含父母Sanger验证）",
            "parameter":"",
            "platform":"",
            "price":0,
            "pubtime":"",
            "remark":"",
            "reports":"",
            "sample_collector":"",
            "sample_size":"",
            "sample_store":"",
            "sample_type":"",
            "state":true,
            "subject":"",
            "target":""
        },
        {
            "advantage":"",
            "analysises":"",
            "application":"",
            "brief":"",
            "category":"",
            "code":"AJKE104",
            "description":"",
            "detection":"",
            "detection_company":"",
            "detection_period":"",
            "experimentals":"",
            "flag":false,
            "group":"",
            "id":2004,
            "is_family":false,
            "is_single":false,
            "mailing_type":"",
            "min_price":0,
            "name":"家系全基因组基础版（先证者全基因组+父母全外）",
            "parameter":"",
            "platform":"",
            "price":0,
            "pubtime":"",
            "remark":"",
            "reports":"",
            "sample_collector":"",
            "sample_size":"",
            "sample_store":"",
            "sample_type":"",
            "state":true,
            "subject":"",
            "target":""
        },
        {
            "advantage":"",
            "analysises":"",
            "application":"",
            "brief":"",
            "category":"",
            "code":"AJKE105",
            "description":"",
            "detection":"",
            "detection_company":"",
            "detection_period":"",
            "experimentals":"",
            "flag":false,
            "group":"",
            "id":2005,
            "is_family":false,
            "is_single":false,
            "mailing_type":"",
            "min_price":0,
            "name":"家系全基因组",
            "parameter":"",
            "platform":"",
            "price":0,
            "pubtime":"",
            "remark":"",
            "reports":"",
            "sample_collector":"",
            "sample_size":"",
            "sample_store":"",
            "sample_type":"",
            "state":true,
            "subject":"",
            "target":""
        },
        {
            "advantage":"",
            "analysises":"",
            "application":"",
            "brief":"",
            "category":"",
            "code":"AJKE106",
            "description":"",
            "detection":"",
            "detection_company":"",
            "detection_period":"",
            "experimentals":"",
            "flag":false,
            "group":"",
            "id":2006,
            "is_family":false,
            "is_single":false,
            "mailing_type":"",
            "min_price":0,
            "name":"家系全基因组标准版（家系三人全基因组）",
            "parameter":"",
            "platform":"",
            "price":0,
            "pubtime":"",
            "remark":"",
            "reports":"",
            "sample_collector":"",
            "sample_size":"",
            "sample_store":"",
            "sample_type":"",
            "state":true,
            "subject":"",
            "target":""
        },
        {
            "advantage":"",
            "analysises":"",
            "application":"",
            "brief":"",
            "category":"",
            "code":"AJKE107",
            "description":"",
            "detection":"",
            "detection_company":"",
            "detection_period":"",
            "experimentals":"",
            "flag":false,
            "group":"",
            "id":2007,
            "is_family":false,
            "is_single":false,
            "mailing_type":"",
            "min_price":0,
            "name":"非标准家系全基因组检测",
            "parameter":"",
            "platform":"",
            "price":0,
            "pubtime":"",
            "remark":"",
            "reports":"",
            "sample_collector":"",
            "sample_size":"",
            "sample_store":"",
            "sample_type":"",
            "state":true,
            "subject":"",
            "target":""
        },
        {
            "advantage":"",
            "analysises":"",
            "application":"",
            "brief":"",
            "category":"",
            "code":"AJKE108",
            "description":"",
            "detection":"",
            "detection_company":"",
            "detection_period":"",
            "experimentals":"",
            "flag":false,
            "group":"",
            "id":2008,
            "is_family":false,
            "is_single":false,
            "mailing_type":"",
            "min_price":0,
            "name":"全基因组药物基因组学",
            "parameter":"",
            "platform":"",
            "price":0,
            "pubtime":"",
            "remark":"",
            "reports":"",
            "sample_collector":"",
            "sample_size":"",
            "sample_store":"",
            "sample_type":"",
            "state":true,
            "subject":"",
            "target":""
        },
        {
            "advantage":"",
            "analysises":"",
            "application":"",
            "brief":"",
            "category":"",
            "code":"AJKE109",
            "description":"",
            "detection":"",
            "detection_company":"",
            "detection_period":"",
            "experimentals":"",
            "flag":false,
            "group":"",
            "id":2009,
            "is_family":false,
            "is_single":false,
            "mailing_type":"",
            "min_price":0,
            "name":"10天加急-家系全外显子组检测（不含Sanger验证）",
            "parameter":"",
            "platform":"",
            "price":0,
            "pubtime":"",
            "remark":"",
            "reports":"",
            "sample_collector":"",
            "sample_size":"",
            "sample_store":"",
            "sample_type":"",
            "state":false,
            "subject":"",
            "target":""
        },
        {
            "advantage":"",
            "analysises":"",
            "application":"",
            "brief":"",
            "category":"",
            "code":"AJKE110",
            "description":"",
            "detection":"",
            "detection_company":"",
            "detection_period":"",
            "experimentals":"",
            "flag":false,
            "group":"",
            "id":2010,
            "is_family":false,
            "is_single":false,
            "mailing_type":"",
            "min_price":0,
            "name":"14天加急-家系全外显子组检测（不含Sanger验证）",
            "parameter":"",
            "platform":"",
            "price":0,
            "pubtime":"",
            "remark":"",
            "reports":"",
            "sample_collector":"",
            "sample_size":"",
            "sample_store":"",
            "sample_type":"",
            "state":false,
            "subject":"",
            "target":""
        },
        {
            "advantage":"",
            "analysises":"",
            "application":"",
            "brief":"",
            "category":"",
            "code":"AJKE111",
            "description":"",
            "detection":"",
            "detection_company":"",
            "detection_period":"",
            "experimentals":"",
            "flag":false,
            "group":"",
            "id":2011,
            "is_family":false,
            "is_single":false,
            "mailing_type":"",
            "min_price":0,
            "name":"单人全外显子组检测（含父母Sanger验证）",
            "parameter":"",
            "platform":"",
            "price":0,
            "pubtime":"",
            "remark":"",
            "reports":"",
            "sample_collector":"",
            "sample_size":"",
            "sample_store":"",
            "sample_type":"",
            "state":false,
            "subject":"",
            "target":""
        },
        ]
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

</style>