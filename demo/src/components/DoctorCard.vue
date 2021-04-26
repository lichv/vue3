<template>
  <div class="doctor-card-content">
    <div class="doctor-card-content-left">
      <el-avatar src="https://chv.oss-cn-shanghai.aliyuncs.com/aegicare/resources/doctor.jpg" :size="144"></el-avatar>
      <div class="doctor-tags">
        <el-tag>标签一</el-tag>
        <el-tag type="success">标签二</el-tag>
        <el-tag type="info">标签三</el-tag>
        <el-tag type="warning">标签四</el-tag>
        <el-tag type="danger">标签五</el-tag>
      </div>
    </div>
    <div class="doctor-card-content-right">
      <div class="doctor-card-content-title">
        <span class="doctor-name">张医生</span> <span>主任医师</span>
      </div>
      <div class="doctor-card-hospital">
        <span>南京鼓楼医院</span> - 
        <span>医学心理科</span>
      </div>
      <div class="doctor-card-content-detail">
        <p>
          <span class="card-label">擅长：</span>
          <span class="card-label-text">中西医结合诊治内分泌与泌尿系疾病，包括：内科疾病...中西医结合诊治内分泌与泌尿系疾病，包括：内科疾病...中西医结合诊治内分泌与泌尿系疾病，包括：内科疾病...
          </span>
        </p>
        <p>
          <span class="card-label">研究方向：</span>
          <span class="card-label-text">中西医结合诊治内分泌与泌尿系疾病，包括：内科疾病...中西医结合诊治内分泌与泌尿系疾病，包括：内科疾病...中西医结合诊治内分泌与泌尿系疾病，包括：内科疾病...
          </span>
        </p>
        <p>
          <span class="card-label">简介：</span>
          <span class="card-label-text">中西医结合诊治内分泌与泌尿系疾病，包括：内科疾病...中西医结合诊治内分泌与泌尿系疾病，包括：内科疾病...中西医结合诊治内分泌与泌尿系疾病，包括：内科疾病...
          </span>
        </p>
        <p>
          <span class="card-label">个人喜好：</span>
          <span class="card-label-text">中西医结合诊治内分泌与泌尿系疾病，包括：内科疾病...中西医结合诊治内分泌与泌尿系疾病，包括：内科疾病...中西医结合诊治内分泌与泌尿系疾病，包括：内科疾病...中西医结合诊治内分泌与泌尿系疾病，包括：内科疾病...</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ElDoctorCard",
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
.doctor-card{
  width: 100%;
  text-align: left;
}
.doctor-card-header{

}
.doctor-card-content{
  display: flex;
}
.doctor-card-content-left{

}
.doctor-name{
  font-size: 18px;
  font-weight: 700;
}
.doctor-card-content-right{
  margin-left: 12px;
}
.doctor-card-content-title{
  line-height: 36px;
}
.doctor-card-hospital{
  line-height: 36px;
}
.doctor-card-content-detail p{
  margin-bottom: 6px;
}
.card-label{
  font-weight: 700;
}
</style>