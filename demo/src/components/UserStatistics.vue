<template>
  <div :id="id" :style="{ width: '640px', height: '400px' }"></div>
</template>
<script>
  export default {
    name: 'ElUserStatistics',
    data(){
      return{
        id:Math.random().toString(36).substr(2),
        options:{
          title: {
            text: '患者数据'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['2017', '2018', '2019', '2020', '2021']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '6%',
            containLabel: true
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['01月', '02月', '03月', '04月', '05月', '06月', '07月', '08月', '09月', '10月', '11月','12月']
          },
          yAxis: {
            type: 'value'
          },
          series: [
          {
            name: '2017',
            type: 'line',
            stack: '2017患者数',
            data: [, , , , , , 293,13,21,40,16,13]
          },
          {
            name: '2018',
            type: 'line',
            stack: '2018患者数',
            data: [15, 16, 79, 300, 122, 101, 159,210, 173,1213,228,177]
          },
          {
            name: '2019',
            type: 'line',
            stack: '2019患者数',
            data: [142, 107, 200, 267, 297, 294, 460,393, 401,393,490,512]
          },
          {
            name: '2020',
            type: 'line',
            stack: '2020患者数',
            data: [325, 87, 274, 439, 433, 514, 803,624, 732,619,673,735]
          },
          {
            name: '2021',
            type: 'line',
            stack: '2021患者数',
            data: [717, 509, , , , , , , , , ,]
          }
          ]
        }
      };
    },
    props: {
      
    },
    mounted() {
      let myChart = this.$echarts.init(
        document.getElementById(this.id)
        );
      myChart.setOption(this.options);
    },
  };
</script>
<style>

</style>
