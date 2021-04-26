<template>
  <div class="page-wrapper">
    <div class="page-container-header">
      <div class="page-container-header-left">
        <i class="el-icon-menu"></i> <span >我负责的医生</span>
      </div>
      <div class="page-container-header-middle">

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
            <el-form-item label="医生">
              <el-input v-model="formInline.user" placeholder="医生姓名 | 医生编号"></el-input>
            </el-form-item>
            <el-form-item label="销售负责区域">
              <el-area-select></el-area-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">查询</el-button>
              <el-button type="primary" @click="onSubmit">清空</el-button>
            </el-form-item>
          </el-form>
        </div>
        <div class="page-content-main">
          <el-table stripe :data="tableData" style="width: 100%" height="100%" row-key="id" :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
            <el-table-column fixed type="selection" width="55"></el-table-column>
            <el-table-column fixed prop="code" label="医生编号" width="120" sortable></el-table-column>
            <el-table-column fixed prop="name" label="姓名" width="80" sortable></el-table-column>
            
            <el-table-column prop="avatar" label="图片" width="60">
              <template v-slot="scope">
                <img v-if="scope.row.avatar" :src="scope.row.avatar" height="32">
              </template>
            </el-table-column>
            <el-table-column prop="gender" label="性别" width="50"></el-table-column>
            <el-table-column prop="title" label="职称" width="100"></el-table-column>
            <el-table-column prop="hospital" label="所在医院科室">
              <template v-slot="scope">
                <span>{{scope.row.department}}-{{scope.row.hospital}}</span>
              </template>
            </el-table-column>
            <el-table-column prop="province" label="省份" width="80" sortable></el-table-column>
            <el-table-column prop="city" label="市区" width="80" sortable></el-table-column>
            <el-table-column prop="county" label="县区" width="80"></el-table-column>
            <el-table-column prop="referent" label="其他" width="60">
              <template v-slot="scope">
                <el-popover placement="top-start" width="480px" trigger="hover"  >
                  <el-doctor-card></el-doctor-card>
                  <template #reference>
                    <span>查看</span>
                  </template>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column prop="saler" label="销售负责人" width="110"></el-table-column>
            <el-table-column prop="is_contact" label="对接状态" width="80">
              <template v-slot="scope">
                <i v-if="scope.row.is_contact" class="el-icon-success text-color-green"></i>
                <i v-else class="el-icon-question text-color-red"></i>
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
          <div class="batch-handle">
            <div class="selected-title">已选中 <span class="selected—count">5</span> 项</div>
            <div class="vux-flexbox selection-items-box vux-flex-row">
              <button type="button" class="el-button el-button--primary"><i class="wk wk-transfer"></i><span>转移负责人</span></button>
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
          'code':'440305001003',
          'af':'AF23330',
          'name': '张医生',
          'gender': '男',
          'avatar': 'https://chv.oss-cn-shanghai.aliyuncs.com/aegicare/resources/doctor.jpg',
          'title': '主任医师',
          'department': '眼耳鼻喉科',
          'hospital': '复旦大学附属医院',
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
        {
          'code':'440305001003',
          'af':'AF23330',
          'name': '张医生',
          'gender': '男',
          'avatar': 'https://chv.oss-cn-shanghai.aliyuncs.com/aegicare/resources/doctor.jpg',
          'title': '主任医师',
          'department': '眼耳鼻喉科',
          'hospital': '复旦大学附属医院',
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
        {
          'code':'440305001003',
          'af':'AF23330',
          'name': '张医生',
          'gender': '男',
          'avatar': 'https://chv.oss-cn-shanghai.aliyuncs.com/aegicare/resources/doctor.jpg',
          'title': '主任医师',
          'department': '眼耳鼻喉科',
          'hospital': '复旦大学附属医院',
          'province': '广东',
          'city': '深圳',
          'county': '南山区',
          'address': '大冲城市花园',
          'referent': 'AP23333',
          'relation': '爸爸',
          'saler':'12312',
          'regtime': '2020/08/02 14:23:12',
          'is_contact': false,
          'remark': '',
        },
        {
          'code':'440305001003',
          'af':'AF23330',
          'name': '张医生',
          'gender': '男',
          'avatar': 'https://chv.oss-cn-shanghai.aliyuncs.com/aegicare/resources/doctor.jpg',
          'title': '主任医师',
          'department': '眼耳鼻喉科',
          'hospital': '复旦大学附属医院',
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
        {
          'code':'440305001003',
          'af':'AF23330',
          'name': '张医生',
          'gender': '男',
          'avatar': 'https://chv.oss-cn-shanghai.aliyuncs.com/aegicare/resources/doctor.jpg',
          'title': '主任医师',
          'department': '眼耳鼻喉科',
          'hospital': '复旦大学附属医院',
          'province': '广东',
          'city': '深圳',
          'county': '南山区',
          'address': '大冲城市花园',
          'referent': 'AP23333',
          'relation': '爸爸',
          'saler':'12312',
          'regtime': '2020/08/02 14:23:12',
          'is_contact': false,
          'remark': '',
        },
        {
          'code':'440305001003',
          'af':'AF23330',
          'name': '张医生',
          'gender': '男',
          'avatar': 'https://chv.oss-cn-shanghai.aliyuncs.com/aegicare/resources/doctor.jpg',
          'title': '主任医师',
          'department': '眼耳鼻喉科',
          'hospital': '复旦大学附属医院',
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
        {
          'code':'440305001003',
          'af':'AF23330',
          'name': '张医生',
          'gender': '男',
          'avatar': 'https://chv.oss-cn-shanghai.aliyuncs.com/aegicare/resources/doctor.jpg',
          'title': '主任医师',
          'department': '眼耳鼻喉科',
          'hospital': '复旦大学附属医院',
          'province': '广东',
          'city': '深圳',
          'county': '南山区',
          'address': '大冲城市花园',
          'referent': 'AP23333',
          'relation': '爸爸',
          'saler':'12312',
          'regtime': '2020/08/02 14:23:12',
          'is_contact': false,
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