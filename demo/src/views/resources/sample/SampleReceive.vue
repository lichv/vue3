<template>
  <div class="page-wrapper">
    <div class="page-container-header">
      <div class="page-container-header-left">
        <i class="el-icon-menu"></i> <span >样本接收</span>
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
        <el-button size="small"  type="primary"><i class="el-icon-plus"></i> 样本采集</el-button>
        <el-button size="small"  type="primary"><i class="el-icon-plus"></i> 批量接收</el-button>
        <el-button size="small"  type="primary"><i class="el-icon-download"></i> 批量领用</el-button>
        <el-button size="small"  type="primary"><i class="el-icon-plus"></i> 批量销毁</el-button>
        <el-button size="small"  type="primary"><i class="el-icon-download"></i> 科研下单</el-button>
      </div>
    </div>
    <div class="page-content-container">
      <div class="page-content-container-left">
      </div>
      <div class="page-content-container-right white-bg">
        <div class="page-content-header">

        </div>
        <div class="page-content-main">
          <el-table stripe :data="tableData" style="width: 100%" height="100%" row-key="id" :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
            <el-table-column fixed type="selection" width="55"></el-table-column>
            <el-table-column fixed prop="code" label="样本条码" width="200" sortable>
              <template v-slot="scope">
                <el-input v-model="scope.row.code" placeholder="请输入内容"></el-input>
              </template>
            </el-table-column>
            <el-table-column prop="batch" label="样本批次" width="100" sortable></el-table-column>
            <el-table-column prop="username" label="所属用户" width="100" >
              <template v-slot="scope">
                <span>{{scope.row.username}}</span>
              </template>
            </el-table-column>
            <el-table-column prop="sample_type" label="样本类型" width="100"></el-table-column>
            <el-table-column prop="sample_collector" label="采集器" width="100"></el-table-column>
            <el-table-column prop="sample_size" label="容量/浓度" width="120" sortable></el-table-column>
            <el-table-column prop="warehouse" label="库位" width="100" sortable></el-table-column>
            <el-table-column prop="project_name" label="所属项目" >  </el-table-column>
            <el-table-column prop="referent" label="时间" width="220">
              <template v-slot="scope">
                <p><span>采集时间:</span><span>{{scope.row.ctime}}</span></p>
                <p><span>接收时间:</span><span>{{scope.row.rtime}}</span></p>
                <p><span>入库时间:</span><span>{{scope.row.itime}}</span></p>
              </template>
            </el-table-column>
            <el-table-column prop="etime" label="预期失效时间" width="150"> </el-table-column>
            <el-table-column prop="remark" label="备注" width="150"> </el-table-column>
            <el-table-column prop="status" label="状态" width="90"> </el-table-column>
            <el-table-column  fixed="right"  label="操作"  width="150">
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
              <button type="button" class="el-button el-button--primary"><i class="wk wk-delete"></i><span>删除</span></button>
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
          'code':'15323123121',
          'batch':'20210329001',
          'username': '*佳豪',
          'sample_type': '血液',
          'sample_collector': '紫头管',
          'sample_size': '3ml',
          'warehouse': '1-01-01',
          'project_name': '科研项目1',
          'ctime': '2021-01-02 15:34:23',
          'rtime': '2021-01-02 15:34:23',
          'itime': '2021-01-02 15:34:23',
          'etime': '2021-01-02 15:34:23',
          'remark':'',
          'status': '正常存储',
          'flag': true,
          'remark': '',
        },
        {
          'code':'15323123121',
          'batch':'20210329001',
          'username': '*佳豪',
          'sample_type': '血液',
          'sample_collector': '紫头管',
          'sample_size': '3ml',
          'warehouse': '1-01-01',
          'project_name': '科研项目1',
          'ctime': '2021-01-02 15:34:23',
          'rtime': '2021-01-02 15:34:23',
          'itime': '2021-01-02 15:34:23',
          'etime': '2021-01-02 15:34:23',
          'remark':'',
          'status': '正常存储',
          'flag': true,
          'remark': '',
        },
        {
          'code':'15323123121',
          'batch':'20210329001',
          'username': '*佳豪',
          'sample_type': '血液',
          'sample_collector': '紫头管',
          'sample_size': '3ml',
          'warehouse': '1-01-01',
          'project_name': '科研项目1',
          'ctime': '2021-01-02 15:34:23',
          'rtime': '2021-01-02 15:34:23',
          'itime': '2021-01-02 15:34:23',
          'etime': '2021-01-02 15:34:23',
          'remark':'',
          'status': '正常存储',
          'flag': true,
          'remark': '',
        },
        {
          'code':'15323123121',
          'batch':'20210329001',
          'username': '*佳豪',
          'sample_type': '血液',
          'sample_collector': '紫头管',
          'sample_size': '3ml',
          'warehouse': '1-01-01',
          'project_name': '科研项目1',
          'ctime': '2021-01-02 15:34:23',
          'rtime': '2021-01-02 15:34:23',
          'itime': '2021-01-02 15:34:23',
          'etime': '2021-01-02 15:34:23',
          'remark':'',
          'status': '正常存储',
          'flag': true,
          'remark': '',
        },
        {
          'code':'15323123121',
          'batch':'20210329001',
          'username': '*佳豪',
          'sample_type': '血液',
          'sample_collector': '紫头管',
          'sample_size': '3ml',
          'warehouse': '1-01-01',
          'project_name': '科研项目1',
          'ctime': '2021-01-02 15:34:23',
          'rtime': '2021-01-02 15:34:23',
          'itime': '2021-01-02 15:34:23',
          'etime': '2021-01-02 15:34:23',
          'remark':'',
          'status': '正常存储',
          'flag': true,
          'remark': '',
        },
        {
          'code':'15323123121',
          'batch':'20210329001',
          'username': '*佳豪',
          'sample_type': '血液',
          'sample_collector': '紫头管',
          'sample_size': '3ml',
          'warehouse': '1-01-01',
          'project_name': '科研项目1',
          'ctime': '2021-01-02 15:34:23',
          'rtime': '2021-01-02 15:34:23',
          'itime': '2021-01-02 15:34:23',
          'etime': '2021-01-02 15:34:23',
          'remark':'',
          'status': '正常存储',
          'flag': true,
          'remark': '',
        },
        {
          'code':'15323123121',
          'batch':'20210329001',
          'username': '*佳豪',
          'sample_type': '血液',
          'sample_collector': '紫头管',
          'sample_size': '3ml',
          'warehouse': '1-01-01',
          'project_name': '科研项目1',
          'ctime': '2021-01-02 15:34:23',
          'rtime': '2021-01-02 15:34:23',
          'itime': '2021-01-02 15:34:23',
          'etime': '2021-01-02 15:34:23',
          'remark':'',
          'status': '正常存储',
          'flag': true,
          'remark': '',
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