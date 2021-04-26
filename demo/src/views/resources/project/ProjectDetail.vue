<template>
  <div class="page-wrapper">
    <div class="page-container-header">
      <div class="page-container-header-left">
        <i class="el-icon-menu"></i> <span >项目添加</span>
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
      <div class="page-content-container-right">
        <el-card>
          <el-form ref="form" :model="form" label-width="80px">
            <el-row>
              <el-col :span="6">
                <el-form-item label="项目编号">
                  <el-input v-model="form.code"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="应用类型">
                  <el-select v-model="form.application" placeholder="请选择应用类型">
                    <el-option label="科研" value="research"></el-option>
                    <el-option label="临床" value="clinical"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="项目类型" label-width="96px">
                  <el-select v-model="form.type" placeholder="请选择项目类型">
                    <el-option label="内部科研" value="research_inner"></el-option>
                    <el-option label="外部合作" value="research_outer"></el-option>
                    <el-option label="医院临床" value="clinical_hospital"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="项目状态">
                  <el-select v-model="form.status" placeholder="请选择项目状态">
                    <el-option label="有意向" value="planned"></el-option>
                    <el-option label="履行中" value="performing"></el-option>
                    <el-option label="已完成" value="finished"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="项目名称">
                  <el-input v-model="form.code"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="项目负责人" label-width="96px">
                  <el-select v-model="form.type" placeholder="请选择项目类型">
                    <el-option label="内部科研" value="research_inner"></el-option>
                    <el-option label="外部合作" value="research_outer"></el-option>
                    <el-option label="医院临床" value="clinical_hospital"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
            <el-form-item label="项目方">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="样本要求">
              <div class="form-item-content">
                <el-form-item label="样本获取方式" label-width="100px">
                  <el-select v-model="form.sample_fetch_type" placeholder="请选择样本获取方式">
                    <el-option label="不定时寄送" value="不定时寄送"></el-option>
                    <el-option label="一次性寄送大量样本" value="一次性寄送大量样本"></el-option>
                    <el-option label="分批次寄送样本" value="分批次寄送样本"></el-option>
                    <el-option label="等待特定样本，阳性样本等" value="等待特定样本，阳性样本等"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="其他要求" label-width="100px">
                  <el-input type="textarea" v-model="form.sample_requirements"></el-input>
                </el-form-item>
              </div>
            </el-form-item>
            <el-form-item label="实验要求">
              <div class="form-item-content">
                <el-form-item label="实验方式" label-width="100px">
                  <el-select v-model="form.laboratory_type" placeholder="请选择实验方式">
                    <el-option label="做同一实验，参考某标准实验，有特定要求" value="做同一实验，参考某标准实验，有特定要求"></el-option>
                    <el-option label="做同一探索实验" value="做同一探索实验"></el-option>
                    <el-option label="分组做不同实验，参考某标准实验，有特定要求" value="分组做不同实验，参考某标准实验，有特定要求"></el-option>
                    <el-option label="分组，有做探索实验" value="分组，有做探索实验"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="特定要求" label-width="100px">
                  <el-input type="textarea" v-model="form.laboratory_requirements"></el-input>
                </el-form-item>
              </div>
            </el-form-item>
            <el-form-item label="报告要求">
              <div class="form-item-content">
                <el-form-item  label-width="10px">
                  <el-checkbox v-model="checked">需要出具报告</el-checkbox> <el-button size="mini" icon="el-icon-plus">添加报告</el-button>
                </el-form-item>
                <div class="display-flex">
                  <el-form-item label="报告类型" label-width="100px">
                    <el-select v-model="form.laboratory_type" placeholder="请选择样本获取方式">
                      <el-option label="家系全基因组报告" value="家系全基因组报告"></el-option>
                      <el-option label="先证者全基因组+父母全外报告" value="先证者全基因组+父母全外报告"></el-option>
                      <el-option label="家系三人全外报告" value="家系三人全外报告"></el-option>
                      <el-option label="线粒体基因组测序报告" value="线粒体基因组测序报告"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="报告模板" label-width="100px">
                    <el-select v-model="form.report_template" placeholder="请选择样本获取方式">
                      <el-option label="家系全基因组报告中山医院模板" value="做同一实验，参考某标准实验，有特定要求中山医院模板"></el-option>
                      <el-option label="先证者全基因组+父母全外报告中山医院模板" value="先证者全基因组+父母全外报告中山医院模板"></el-option>
                      <el-option label="家系三人全外报告中山医院模板" value="家系三人全外报告中山医院模板"></el-option>
                      <el-option label="线粒体基因组测序报告中山医院模板" value="分组，有做探索实验中山医院模板"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label-width="100px">
                    <el-button size="mini" icon="el-icon-delete"></el-button>
                  </el-form-item>
                </div>
                <el-form-item label="其他报告要求" label-width="100px">
                  <el-input type="textarea" v-model="form.laboratory_requirements"></el-input>
                </el-form-item>
              </div>
            </el-form-item>
            <el-form-item label="合同文件">
              <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :before-remove="beforeRemove" multiple :limit="3" :on-exceed="handleExceed" :file-list="fileList">
                <el-button size="small" type="primary">点击上传</el-button>
                <template #tip>
                  <div class="el-upload__tip">只能上传 jpg/png 文件，且不超过 500kb</div>
                </template>
              </el-upload>
            </el-form-item>
            <el-form-item label="项目时间">
              <el-date-picker v-model="value1" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="付款方式" >
              <el-select v-model="form.payment_type" placeholder="请选择付款方式">
                <el-option label="代理-合作/代理" value="代理-合作/代理"></el-option>
                <el-option label="入院-合作/代理" value="入院-合作/代理"></el-option>
                <el-option label="临床待回款-合作/代理" value="临床待回款-合作/代理"></el-option>
                <el-option label="科研待回款-科研" value="科研待回款-科研"></el-option>
                <el-option label="科研免费-科研" value="科研免费-科研"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="回款方式" >
              <div class="form-item-content">
                <el-select v-model="form.back_money_type" placeholder="请选择付款方式">
                  <el-option label="一次性回款" value="一次性回款"></el-option>
                  <el-option label="分批回款" value="分批回款"></el-option>
                </el-select>
                <el-select v-model="form.back_money_cycle" placeholder="请选择付款方式">
                  <el-option label="按周" value="按周"></el-option>
                  <el-option label="按月" value="按月"></el-option>
                  <el-option label="按季度" value="按季度"></el-option>
                  <el-option label="按年" value="按年"></el-option>
                </el-select>
                <el-select v-model="form.payment_type" placeholder="请选择付款方式">
                  <el-option label="按周" value="按周"></el-option>
                  <el-option label="按月" value="按月"></el-option>
                  <el-option label="按季度" value="按季度"></el-option>
                  <el-option label="按年" value="按年"></el-option>
                </el-select>
                <el-input v-model="form.back_money"></el-input>
              </div>
            </el-form-item>
            <el-form-item label="项目负责人" label-width="96px">
              <el-select v-model="form.type" placeholder="请选择项目类型">
                <el-option label="内部科研" value="research_inner"></el-option>
                <el-option label="外部合作" value="research_outer"></el-option>
                <el-option label="医院临床" value="clinical_hospital"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="项目备注">
              <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">提交</el-button>
              <el-button>取消</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'ElPageDemo',
    data(){
      return{
        value1: '',
        fileList: [{name: '《中山眼科医院合作协议》.pdf', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formInline: {
          user: '',
          region: ''
        },
        checked: true,
      };
    },
    props: {

    },

    mounted() {

    },
    methods:{
      onSubmit() {
        console.log('submit!');
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
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