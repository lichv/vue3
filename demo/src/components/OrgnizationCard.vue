<template>
  <div class="orgnization-card-content">
    <div class="orgnization-card-content-left">
      <el-avatar src="https://chv.oss-cn-shanghai.aliyuncs.com/aegicare/resources/hospital.jpg" shape="square" :size="144"></el-avatar>
      <div class="doctor-tags">
        <el-tag>标签一</el-tag>
        <el-tag type="success">标签二</el-tag>
        <el-tag type="info">标签三</el-tag>
        <el-tag type="warning">标签四</el-tag>
        <el-tag type="danger">标签五</el-tag>
      </div>
    </div>
    <div class="orgnization-card-content-right">
      <div class="orgnization-card-content-title">
        <span class="doctor-name">南京鼓楼医院</span>
      </div>
      <div class="orgnization-card-hospital">
        <span>综合医院</span>
      </div>
      <div class="orgnization-card-content-detail">
        <p>
          <span class="card-label">简介：</span>
          <span class="card-label-text">南京市鼓楼医院，又名南京大学医学院附属鼓楼医院，前身是1892年由美国基督教会资助的加拿大籍传教士威廉·爱德华·麦克林医学博士（William E. Macklin，中文译音"马林"）创办的一所"基督医院"，马林任首任院长，民间又称"马林医 院"。
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ElOrgnizationCard",
    data() {
      return {
        data: {}
      }
    },
    methods: {

    }
  }
</script>

<style >
.orgnization-card{
  width: 100%;
  text-align: left;
}
.orgnization-card-header{

}
.orgnization-card-content{
  display: flex;
}
.orgnization-card-content-left{

}
.doctor-name{
  font-size: 18px;
  font-weight: 700;
}
.orgnization-card-content-right{
  margin-left: 12px;
}
.orgnization-card-content-title{
  line-height: 36px;
}
.orgnization-card-hospital{
  line-height: 36px;
}
.orgnization-card-content-detail p{
  margin-bottom: 6px;
}
.card-label{
  font-weight: 700;
}
</style>