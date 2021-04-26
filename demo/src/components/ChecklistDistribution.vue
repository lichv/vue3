<template>
  <div :id="id" :style="{ width: '480px', height: '360px' }"></div>
</template>
<script>
  export default {
    name: 'ElChecklistDistribution',
    data(){
      return{
        id:Math.random().toString(36).substr(2),
        options: {
          title: {
            text: '检测项目分析',
            subtext: '科研临床划分',
            left: 'center'
          },
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
          tooltip: {
            trigger: 'item'
          },
          legend: {
            orient: 'vertical',
            left: 'left',
          },
          series: [
          {
            name: '科研临床',
            type: 'pie',
            radius: '50%',
            data: [
            {value: 1848, name: '临床'},
            {value: 735, name: '科研'},
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
          ]
        },
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
