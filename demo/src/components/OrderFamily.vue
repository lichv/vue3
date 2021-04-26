<template>
  <div :id="id" :style="{ width: '480px', height: '360px' }"></div>
</template>
<script>
  export default {
    name: 'ElOrderFamily',
    data(){
      return{
        id:Math.random().toString(36).substr(2),
        options: {
          title: {
            text: '订单来源',
            subtext: '家系划分',
            left: 'center'
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
            name: '订单来源',
            type: 'pie',
            radius: '50%',
            data: [
            {value: 1048, name: '家系产品'},
            {value: 735, name: '单项产品'},
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
