<template>
  <div class="page-wrapper">
    <div class="page-container-header">
      <div class="page-container-header-left">
        <i class="el-icon-menu"></i> <span >项目管理</span>
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
            <el-form-item label="项目">
              <el-input v-model="formInline.user" placeholder="项目编号 | 项目名称"></el-input>
            </el-form-item>
            <el-form-item label="状态">
              <el-select v-model="formInline.region" placeholder="项目状态">
                <el-option label="有意向" value="1"></el-option>
                <el-option label="合作中" value="2"></el-option>
                <el-option label="合作完毕" value="3"></el-option>
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
            <el-table-column fixed prop="code" label="项目编号" width="100" sortable></el-table-column>
            <el-table-column prop="name" label="项目名称" width="100" sortable></el-table-column>
            <el-table-column prop="type" label="项目类型" width="100" sortable></el-table-column>
            <el-table-column prop="initiator" label="项目方" ></el-table-column>
            <el-table-column prop="status" label="项目状态" width="90"></el-table-column>
            <el-table-column prop="handler_name" label="项目对接人" width="120" sortable></el-table-column>
            <el-table-column prop="begin_time" label="开始时间" width="100" sortable></el-table-column>
            <el-table-column prop="end_time" label="结束时间" width="100">        </el-table-column>
            <el-table-column prop="payment_status" label="支付状态" width="100">          </el-table-column>
            <el-table-column prop="next_paytime" label="下一次支付时间" width="120">          </el-table-column>
            <el-table-column prop="next_money" label="下一次支付金额" width="120">          </el-table-column>
            <el-table-column prop="sample_uncompleted" label="剩余样本量" width="120"></el-table-column>
            <el-table-column  fixed="right"  label="操作"  width="140">
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
          'code':'10004',
          'name': '中山眼科合作',
          'type': '外部合作',
          'initiator': '中山眼科医院',
          'status': '进行中',
          'handler_name': '雷宇',
          'begin_time': '2020/04/12',
          'end_time': '2022/04/11',
          'payment_status': '已回款,已对账',
          'next_paytime': '2021/04/12',
          'next_money': '120100',
          'sample_uncompleted':'124500',
          'regtime': '123',
          'remark': '',
        },
        {
          'code':'10004',
          'name': '中山眼科合作',
          'type': '外部合作',
          'initiator': '中山眼科医院',
          'status': '进行中',
          'handler_name': '雷宇',
          'begin_time': '2020/04/12',
          'end_time': '2022/04/11',
          'payment_status': '已回款,已对账',
          'next_paytime': '2021/04/12',
          'next_money': '120100',
          'sample_uncompleted':'124500',
          'regtime': '123',
          'remark': '',
        },
        {
          'code':'10004',
          'name': '中山眼科合作',
          'type': '外部合作',
          'initiator': '中山眼科医院',
          'status': '进行中',
          'handler_name': '雷宇',
          'begin_time': '2020/04/12',
          'end_time': '2022/04/11',
          'payment_status': '已回款,已对账',
          'next_paytime': '2021/04/12',
          'next_money': '120100',
          'sample_uncompleted':'124500',
          'regtime': '123',
          'remark': '',
        },
        {
          'code':'10004',
          'name': '中山眼科合作',
          'type': '外部合作',
          'initiator': '中山眼科医院',
          'status': '进行中',
          'handler_name': '雷宇',
          'begin_time': '2020/04/12',
          'end_time': '2022/04/11',
          'payment_status': '已回款,已对账',
          'next_paytime': '2021/04/12',
          'next_money': '120100',
          'sample_uncompleted':'124500',
          'regtime': '123',
          'remark': '',
        },
        {
          'code':'10004',
          'name': '中山眼科合作',
          'type': '外部合作',
          'initiator': '中山眼科医院',
          'status': '进行中',
          'handler_name': '雷宇',
          'begin_time': '2020/04/12',
          'end_time': '2022/04/11',
          'payment_status': '已回款,已对账',
          'next_paytime': '2021/04/12',
          'next_money': '120100',
          'sample_uncompleted':'124500',
          'regtime': '123',
          'remark': '',
        },
        {
          'code':'10004',
          'name': '中山眼科合作',
          'type': '外部合作',
          'initiator': '中山眼科医院',
          'status': '进行中',
          'handler_name': '雷宇',
          'begin_time': '2020/04/12',
          'end_time': '2022/04/11',
          'payment_status': '已回款,已对账',
          'next_paytime': '2021/04/12',
          'next_money': '120100',
          'sample_uncompleted':'124500',
          'regtime': '123',
          'remark': '',
        },
        {
          'code':'10004',
          'name': '中山眼科合作',
          'type': '外部合作',
          'initiator': '中山眼科医院',
          'status': '进行中',
          'handler_name': '雷宇',
          'begin_time': '2020/04/12',
          'end_time': '2022/04/11',
          'payment_status': '已回款,已对账',
          'next_paytime': '2021/04/12',
          'next_money': '120100',
          'sample_uncompleted':'124500',
          'regtime': '123',
          'remark': '',
        },
        {
          'code':'10004',
          'name': '中山眼科合作',
          'type': '外部合作',
          'initiator': '中山眼科医院',
          'status': '进行中',
          'handler_name': '雷宇',
          'begin_time': '2020/04/12',
          'end_time': '2022/04/11',
          'payment_status': '已回款,已对账',
          'next_paytime': '2021/04/12',
          'next_money': '120100',
          'sample_uncompleted':'124500',
          'regtime': '123',
          'remark': '',
        },
        {
          'code':'10004',
          'name': '中山眼科合作',
          'type': '外部合作',
          'initiator': '中山眼科医院',
          'status': '进行中',
          'handler_name': '雷宇',
          'begin_time': '2020/04/12',
          'end_time': '2022/04/11',
          'payment_status': '已回款,已对账',
          'next_paytime': '2021/04/12',
          'next_money': '120100',
          'sample_uncompleted':'124500',
          'regtime': '123',
          'remark': '',
        },
        {
          'code':'10004',
          'name': '中山眼科合作',
          'type': '外部合作',
          'initiator': '中山眼科医院',
          'status': '进行中',
          'handler_name': '雷宇',
          'begin_time': '2020/04/12',
          'end_time': '2022/04/11',
          'payment_status': '已回款,已对账',
          'next_paytime': '2021/04/12',
          'next_money': '120100',
          'sample_uncompleted':'124500',
          'regtime': '123',
          'remark': '',
        },
        {
          'code':'10004',
          'name': '中山眼科合作',
          'type': '外部合作',
          'initiator': '中山眼科医院',
          'status': '进行中',
          'handler_name': '雷宇',
          'begin_time': '2020/04/12',
          'end_time': '2022/04/11',
          'payment_status': '已回款,已对账',
          'next_paytime': '2021/04/12',
          'next_money': '120100',
          'sample_uncompleted':'124500',
          'regtime': '123',
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