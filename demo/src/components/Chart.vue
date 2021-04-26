<template>
  <div :id="id" :style="{ width: '480px', height: '360px' }"></div>
</template>
<script>
  export default {
    name: 'ElChart',
    data(){
      return{
        id:Math.random().toString(36).substr(2),
        options:{
          title: { text: "总用户量" },
          grid: {
            left: '3%',
            right: '3%',
            bottom: '3%',
            containLabel: true
          },
          toolbox: {
            show: true,
            orient: 'vertical',
            left: 'right',
            top: 'center',
            feature: {
              mark: {show: true},
              dataView: {show: true, readOnly: false},
              magicType: {show: true, type: ['line', 'bar', 'stack', 'tiled']},
              restore: {show: true},
              saveAsImage: {show: true}
            }
          },
          tooltip: {},
          xAxis: {
            data: ["12-3", "12-4", "12-5", "12-6", "12-7", "12-8"],
          },
          yAxis: {},
          series: [
          {
            name: "用户量",
            type: "line",
            data: [5, 20, 36, 10, 10, 20],
          },
          ],
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
