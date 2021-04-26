<template>
  <div class="page-wrapper">
    <div class="page-container-header">
      <div class="page-container-header-left">
        <i class="el-icon-menu"></i> <span >添加订单</span>
      </div>
      <div class="page-container-header-middle">

      </div>
      <div class="page-container-header-right">
        <el-button size="small"  type="primary"><i class="el-icon-save"></i> 保存草稿箱</el-button>
        <el-button size="small"  type="primary"><i class="el-icon-save"></i> 提交销管审核</el-button>
      </div>
    </div>
    <div class="page-content-container">
      <div class="page-content-container-left">
      </div>
      <div class="page-content-container-right">
        <el-card>
          <el-form ref="form" :model="form" label-width="80px">
            <div class="dashed-border padding-12">
              <el-row>
                <el-col :span="6">
                  <el-form-item label="下单用户">
                    <el-input v-model="form.user"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="医生">
                    <el-select v-model="form.application" placeholder="请选择医生">
                      <el-option label="张医生-眼科-中山人民医院" value="research"></el-option>
                      <el-option label="王医生-儿科-深圳妇幼保健院" value="clinical"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="关联项目" label-width="96px">
                    <el-select v-model="form.type" placeholder="请选择项目类型">
                      <el-option label="中山眼科合作项目" value="research_inner"></el-option>
                      <el-option label="深圳福田保健院合作项目" value="research_outer"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="销售负责人" label-width="96px">
                   <el-input v-model="form.saler" disabled></el-input>
                 </el-form-item>
               </el-col>
             </el-row>
             <el-form-item label="邮寄信息">
              <div class="form-item-content">
                <el-form-item  label-width="10px">
                  <el-checkbox v-model="postFlag">不邮寄</el-checkbox>
                </el-form-item>
                <el-form-item  v-show="!postFlag">
                  <el-row>
                    <el-col :span="5">
                      <el-form-item label="收件人">
                        <el-input v-model="form.code"></el-input>
                      </el-form-item>
                    </el-col>
                    <el-col :span="5">
                      <el-form-item label="收件号码">
                        <el-input v-model="form.code"></el-input>
                      </el-form-item>
                    </el-col>
                    <el-col :span="14">
                      <el-form-item label="收件地址">
                        <el-cascader :options="options" :props="{label:'name',value:'code'}" clearable class="pca-select" ></el-cascader>
                        <el-input v-model="form.address"></el-input>
                      </el-form-item>
                    </el-col>
                  </el-row>
                </el-form-item>
              </div>
            </el-form-item>
          </div>
          <div class="empty-30"></div>
          <div class="dashed-border padding-12">
            <el-form-item label="第一检测人" label-width="96px">
              <el-select v-model="form.type" placeholder="请选择项目类型">
                <el-option label="张三-AP23428490" value="research_inner"></el-option>
                <el-option label="李四-AP23428433" value="research_outer"></el-option>
                <el-option label="王五-AP23422433" value="clinical_hospital"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="选择产品">
              <div class="form-item-content">
                <el-button type="primary" @click="addProduct()">添加产品</el-button>
                <div v-for="i in product_count">
                  <el-form-item label-width="96px">
                    <el-select v-model="products[i]" placeholder="请选择产品">
                      <el-option label="全外显子检测" value="research_inner"></el-option>
                      <el-option label="全基因组检测" value="research_outer"></el-option>
                    </el-select>
                    <el-button type="primary" @click="deleteProduct()">删除产品</el-button>
                  </el-form-item>
                </div>
              </div>
            </el-form-item>
            <el-form-item label="样本信息">
              <div class="form-item-content">
                <el-button type="primary" @click="addSample()">添加样本</el-button>
                <div v-for="i in sample_count">
                  <el-form-item label-width="116px">
                    <el-select v-model="samples[i]" placeholder="请选择样本">
                      <el-option label="编号12121231-张三-血液-5ml" value="research_inner"></el-option>
                      <el-option label="编号12333331-李四-血液-5ml" value="research_outer"></el-option>
                    </el-select>
                    <el-button type="primary" @click="deleteSample()">删除样本</el-button>
                  </el-form-item>
                </div>
                <el-form-item label="无样本条码备注" label-width="116px">
                  <el-input v-model="form.code"></el-input>
                </el-form-item>
              </div>
            </el-form-item>
            <el-form-item label="医疗信息">
              <div class="form-item-content">
                <el-form-item label="临床初步诊断：" label-width="120px">
                  <el-input type="textarea" v-model="form.code"></el-input>
                </el-form-item>
                <el-form-item label="家族史：" label-width="120px">
                  <el-input type="textarea" v-model="form.code"></el-input>
                </el-form-item>
                <el-form-item label="临床表征描述：" label-width="120px">
                  <el-input type="textarea" v-model="form.code"></el-input>
                </el-form-item>
                <el-form-item label="临床资料：" label-width="120px">
                  <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :file-list="fileList" list-type="picture">
                    <el-button size="small" type="primary">点击上传</el-button>
                    <template #tip>
                      <div class="el-upload__tip">
                        只能上传 jpg/png/mp4 文件，且不超过 20Mb
                      </div>
                    </template>
                  </el-upload>
                </el-form-item>
                <el-form-item label="医学备注：" label-width="120px">
                  <el-input type="textarea" v-model="form.code"></el-input>
                </el-form-item>
              </div>
            </el-form-item>
            <el-form-item label="其他信息">
              <div class="form-item-content">
                <el-form-item label="送检单：" label-width="120px">
                  <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :file-list="fileList" list-type="picture">
                    <el-button size="small" type="primary">点击上传</el-button>
                    <template #tip>
                      <div class="el-upload__tip">
                        只能上传 jpg/png/mp4 文件，且不超过 20Mb
                      </div>
                    </template>
                  </el-upload>
                </el-form-item>
                <el-form-item label="备注：" label-width="120px">
                  <el-input type="textarea" v-model="form.code"></el-input>
                </el-form-item>
              </div>
            </el-form-item>
          </div>
          <div class="empty-10"></div>
          <el-form-item  label-width="6px">
            <el-button type="primary" >添加第一检测人</el-button>
          </el-form-item>
          <div class="dashed-border padding-12">
            <el-form-item label="订单详情：" label-width="120px">
              <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="product" label="产品" width="180">
                </el-table-column>
                <el-table-column prop="count" label="数量" width="180">
                </el-table-column>
                <el-table-column prop="money" label="金额">
                  <template #default="scope">
                    <el-input v-model="product_price" placeholder="请输入此项目总金额"></el-input>
                  </template>
                </el-table-column>
                <el-table-column prop="flag" >
                  <template #default="scope">
                    <el-checkbox v-model="checked">已申请优惠</el-checkbox>
                  </template>
                </el-table-column>
                <el-table-column prop="flag" >
                  <template #default="scope">
                    不能低于备案价格 6000 元
                  </template>
                </el-table-column>
              </el-table>
            </el-form-item>
            <el-form-item label="订单总额：" label-width="120px">
              <div class="inline-block float-left"><span class="money">15000</span><span>元人民币</span></div>
              <div class="inline-block float-right"><span>项目剩余额度</span><span class="money">32000</span><span>元人民币</span></div>
            </el-form-item>
            <el-form-item label="支付方式：" label-width="120px">
              <el-select v-model="form.payment_type" placeholder="请选择支付方式">
                <el-option label="支付宝-个人付款" value="research_inner"></el-option>
                <el-option label="微信-个人付款" value="research_outer"></el-option>
                <el-option label="POS机-个人付款" value="research_outer"></el-option>
                <el-option label="银行转账-个人付款" value="research_outer"></el-option>
                <el-option label="二维码-个人付款" value="research_outer"></el-option>
                <el-option label="家属-个人付款" value="research_outer"></el-option>
                <el-option label="临床免费-个人付款" value="research_outer"></el-option>
                <el-option label="代理-合作/代理" value="research_outer"></el-option>
                <el-option label="入院-合作/代理" value="research_outer"></el-option>
                <el-option label="临床待回款-合作/代理" value="research_outer"></el-option>
                <el-option label="科研待回款-科研" value="research_outer"></el-option>
                <el-option label="科研免费-科研" value="research_outer"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="应付金额：" label-width="120px">
              <div class="inline-block float-left"><span class="money">15000</span><span>元人民币</span></div>
            </el-form-item>
            <el-form-item label="实付金额：" label-width="120px">
              <el-input v-model="form.code">
                <template #append>元人民币</template>
              </el-input>
            </el-form-item>
            <el-form-item label="发票信息：" label-width="120px">
              <div class="dashed-border padding-12">
                <el-row>
                  <el-col :span="6">
                    <el-form-item  label-width="10px">
                      <el-checkbox v-model="form.need_invoice">不开发票</el-checkbox>
                    </el-form-item>

                  </el-col>
                  <el-col :span="6">
                    <el-form-item label="发票抬头："  label-width="120px">
                      <el-select v-model="form.invoice_type" placeholder="选择发票抬头">
                        <el-option label="个人" value="research_outer"></el-option>
                        <el-option label="单位" value="clinical_hospital"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col :span="6">
                    <el-form-item label="发票类型："  label-width="120px">
                      <el-select v-model="form.invoice_type" placeholder="选择发票类型">
                        <el-option label="电子发票" value="research_inner"></el-option>
                        <el-option label="纸质普票" value="research_outer"></el-option>
                        <el-option label="纸质专票" value="clinical_hospital"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col :span="6">
                    <el-form-item label="发票内容："  label-width="120px">
                      <el-select v-model="form.invoice_type" placeholder="选择发票内容">
                        <el-option label="商品明细" value="research_inner"></el-option>
                        <el-option label="纸质普票" value="research_outer"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="8">
                    <el-form-item  label="名称：" label-width="120px">
                      <el-input v-model="form.invoice_name" placeholder="请输入个人/公司名称"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item  label="公司税号：" label-width="120px">
                      <el-input v-model="form.invoice_code" placeholder="公司税号"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item  label="注册地址：" label-width="120px">
                      <el-input v-model="form.invoice_address" placeholder="注册地址"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="8">
                    <el-form-item  label="公司电话：" label-width="120px">
                      <el-input v-model="form.invoice_phone" placeholder="公司电话"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item  label="开户银行：" label-width="120px">
                      <el-input v-model="form.invoice_bank" placeholder="开户银行"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item  label="银行账户：" label-width="120px">
                      <el-input v-model="form.invoice_account" placeholder="银行账户"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
              </div>
            </el-form-item>
            <el-form-item label="付款凭证：" label-width="120px">
              <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :file-list="fileList" list-type="picture">
                <el-button size="small" type="primary">点击上传</el-button>
                <template #tip>
                  <div class="el-upload__tip">
                    只能上传 jpg/png/mp4 文件，且不超过 20Mb
                  </div>
                </template>
              </el-upload>
            </el-form-item>
            <el-form-item label="付款日期：" label-width="120px">
              <el-input v-model="form.paytime"></el-input>
            </el-form-item>
            <el-form-item label="付款备注：" label-width="120px">
              <el-input type="textarea" v-model="form.code"></el-input>
            </el-form-item>
          </div>
          <div class="empty-10"></div>
          <el-form-item class="text-align-center">
            <el-button type="primary" @click="onSubmit">保存草稿箱</el-button>
            <el-button type="primary" @click="onSubmit">提交销管审核</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </div>
</div>
</template>
<script>
  import pca from '/@/assets/pca-code.json'
  export default {
    name: 'ElPageDemo',
    data(){
      return{
        tableData: [{
          product: '先证者全基因组+父母全外显子组',
          count: '2',
          money: '10000',
          flag:false
        }, {
          product: 'Sanger 验证',
          count: '1',
          money: '3000',
          flag:false
        }, {
          product: 'CNV-qPCR',
          count: '1',
          money: '6000',
          flag:false
        },
        ],
        value1: '',
        postFlag:true,
        options:[],
        products:[],
        samples:[],
        product_count:1,
        sample_count:1,
        fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
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
        checked: false,
        product_price:8000,
      };
    },
    props: {

    },

    mounted() {
      this.options = pca;
    },
    methods:{
      onSubmit() {
        console.log('submit!');
        this.$router.push('/sale/my/orders')
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
      addProduct(){
        this.product_count++
      },
      deleteProduct(){
        this.product_count--
      },
      addSample(){
        this.sample_count++
      },
      deleteSample(){
        this.sample_count--
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