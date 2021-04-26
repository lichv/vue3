<template>
  <div class="page-wrapper">
    <div class="page-container-header">
      <div class="page-container-header-left">
        <i class="el-icon-menu"></i> <span >问题样本</span>
      </div>
      <div class="page-container-header-middle">

      </div>
    </div>
    <div class="page-content-container">
      <div class="page-content-container-left">
      </div>
      <div class="page-content-container-right white-bg">
        <div class="page-content-header">
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="样本编号">
              <el-input v-model="formInline.user" placeholder="样本编号"></el-input>
            </el-form-item>
            <el-form-item label="负责部门">
              <el-select v-model="formInline.region" placeholder="负责部门">
                <el-option label="实验室" value="lab"></el-option>
                <el-option label="生信部" value="bio"></el-option>
                <el-option label="医学部" value="med"></el-option>
                <el-option label="产品部" value="prod"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
          </el-form>
        </div>
        <div class="page-content-main">
          <el-table stripe :data="tableData" style="width: 100%" height="100%" row-key="id" :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
            <el-table-column fixed type="selection" width="55"></el-table-column>
            <el-table-column fixed prop="code" label="样本编号" width="70" sortable> </el-table-column>
            <el-table-column prop="name" label="检测项目" width="70" sortable> </el-table-column>
            <el-table-column prop="source_team" label="发现部门" width="80" sortable></el-table-column>
            <el-table-column prop="source_operate" label="发现所在操作" width="90" sortable></el-table-column>
            <el-table-column prop="source_operater" label="发现的操作员" width="90" sortable></el-table-column>
            <el-table-column prop="reason" label="原因"></el-table-column>
            <el-table-column prop="handle_team" label="待处理部门" width="80"> </el-table-column>
            <el-table-column prop="handle_operate" label="待处理操作" width="90"></el-table-column>
            <el-table-column prop="handle_operater" label="待处理负责人" width="100"></el-table-column>
            <el-table-column prop="expect_end_time" label="预期处理结束时间" width="120"></el-table-column>
            <el-table-column prop="actual_finish_time" label="实际处理完成时间" width="120"></el-table-column>
            <el-table-column prop="status" label="处理状态" width="120">
            </el-table-column>
            <el-table-column  fixed="right"  label="操作"  width="160">
              <template v-slot="scope">
                <el-button size="mini" @click="handleClick(scope.row)" icon="el-icon-view"></el-button>
                <el-button size="mini" @click="handleClick(scope.row)" icon="el-icon-edit" type="warning"></el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="page-content-footer">
          <div class="batch-handle">
            <div class="selected-title">已选中 <span class="selected—count">5</span> 项</div>
            <div class="vux-flexbox selection-items-box vux-flex-row">
              <button type="button" class="el-button el-button--primary"><i class="wk wk-export"></i><span>导出选中</span></button>
            </div>
          </div>
          <div class="pagination">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
            </el-pagination>
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
          code:'AS18791',
          name:'WGS',
          source_team:'医学部',
          source_operate:'筛点分析',
          source_operater:'马睿',
          reason:'cnv数据有问题，核型图乱',
          handle_team:'生信部',
          handle_operate:'生信重分析',
          handle_operater:'张立羽',
          expect_end_time:'2020-12-14',
          actual_finish_time:'2020-12-16',
          status:'检测中',
        },
        {
          code:'AS18791',
          name:'WGS',
          source_team:'医学部',
          source_operate:'筛点分析',
          source_operater:'马睿',
          reason:'cnv数据有问题，核型图乱',
          handle_team:'生信部',
          handle_operate:'生信重分析',
          handle_operater:'张立羽',
          expect_end_time:'2020-12-14',
          actual_finish_time:'2020-12-16',
          status:'检测中',
        },
        {
          code:'AS18791',
          name:'WGS',
          source_team:'医学部',
          source_operate:'筛点分析',
          source_operater:'马睿',
          reason:'cnv数据有问题，核型图乱',
          handle_team:'生信部',
          handle_operate:'生信重分析',
          handle_operater:'张立羽',
          expect_end_time:'2020-12-14',
          actual_finish_time:'2020-12-16',
          status:'检测中',
        },
        {
          code:'AS18791',
          name:'WGS',
          source_team:'医学部',
          source_operate:'筛点分析',
          source_operater:'马睿',
          reason:'cnv数据有问题，核型图乱',
          handle_team:'生信部',
          handle_operate:'生信重分析',
          handle_operater:'张立羽',
          expect_end_time:'2020-12-14',
          actual_finish_time:'2020-12-16',
          status:'检测中',
        },
        {
          code:'AS18791',
          name:'WGS',
          source_team:'医学部',
          source_operate:'筛点分析',
          source_operater:'马睿',
          reason:'cnv数据有问题，核型图乱',
          handle_team:'生信部',
          handle_operate:'生信重分析',
          handle_operater:'张立羽',
          expect_end_time:'2020-12-14',
          actual_finish_time:'2020-12-16',
          status:'检测中',
        },
        {
          code:'AS18791',
          name:'WGS',
          source_team:'医学部',
          source_operate:'筛点分析',
          source_operater:'马睿',
          reason:'cnv数据有问题，核型图乱',
          handle_team:'生信部',
          handle_operate:'生信重分析',
          handle_operater:'张立羽',
          expect_end_time:'2020-12-14',
          actual_finish_time:'2020-12-16',
          status:'检测中',
        },
        {
          code:'AS18791',
          name:'WGS',
          source_team:'医学部',
          source_operate:'筛点分析',
          source_operater:'马睿',
          reason:'cnv数据有问题，核型图乱',
          handle_team:'生信部',
          handle_operate:'生信重分析',
          handle_operater:'张立羽',
          expect_end_time:'2020-12-14',
          actual_finish_time:'2020-12-16',
          status:'检测中',
        },
        {
          code:'AS18791',
          name:'WGS',
          source_team:'医学部',
          source_operate:'筛点分析',
          source_operater:'马睿',
          reason:'cnv数据有问题，核型图乱',
          handle_team:'生信部',
          handle_operate:'生信重分析',
          handle_operater:'张立羽',
          expect_end_time:'2020-12-14',
          actual_finish_time:'2020-12-16',
          status:'检测中',
        },
        {
          code:'AS18791',
          name:'WGS',
          source_team:'医学部',
          source_operate:'筛点分析',
          source_operater:'马睿',
          reason:'cnv数据有问题，核型图乱',
          handle_team:'生信部',
          handle_operate:'生信重分析',
          handle_operater:'张立羽',
          expect_end_time:'2020-12-14',
          actual_finish_time:'2020-12-16',
          status:'检测中',
        },
        {
          code:'AS18791',
          name:'WGS',
          source_team:'医学部',
          source_operate:'筛点分析',
          source_operater:'马睿',
          reason:'cnv数据有问题，核型图乱',
          handle_team:'生信部',
          handle_operate:'生信重分析',
          handle_operater:'张立羽',
          expect_end_time:'2020-12-14',
          actual_finish_time:'2020-12-16',
          status:'检测中',
        },
        {
          code:'AS18791',
          name:'WGS',
          source_team:'医学部',
          source_operate:'筛点分析',
          source_operater:'马睿',
          reason:'cnv数据有问题，核型图乱',
          handle_team:'生信部',
          handle_operate:'生信重分析',
          handle_operater:'张立羽',
          expect_end_time:'2020-12-14',
          actual_finish_time:'2020-12-16',
          status:'检测中',
        },
        {
          code:'AS18791',
          name:'WGS',
          source_team:'医学部',
          source_operate:'筛点分析',
          source_operater:'马睿',
          reason:'cnv数据有问题，核型图乱',
          handle_team:'生信部',
          handle_operate:'生信重分析',
          handle_operater:'张立羽',
          expect_end_time:'2020-12-14',
          actual_finish_time:'2020-12-16',
          status:'检测中',
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