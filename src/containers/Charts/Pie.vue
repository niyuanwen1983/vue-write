<template>
  <div id="myChart" :style="{width: '100%', height: '500px'}"></div>
</template>

<script>
  // 引入基本模板
  let echarts = require('echarts/lib/echarts')
  // 引入饼图组件
  require('echarts/lib/chart/pie')
  // 引入提示框和title组件
  require('echarts/lib/component/tooltip')
  require('echarts/lib/component/title')
  export default {
    name: "Pie",
    data() {
      return {
        charts: '',
        opinion: ['正确', '错误'],
        opinionData: [
          {value: this.$store.state.right, name: '正确'},
          {value: this.$store.state.wrong, name: '错误'}
        ]
      }
    },
    methods: {
      drawPie(id) {
        this.charts = echarts.init(document.getElementById('myChart'))
        this.charts.setOption({
          title: {
            text: '同名数量统计',
            subtext: '纯属虚构',
            x: 'center'
          },
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            type: 'scroll',
            orient: 'vertical',
            right: 10,
            top: 20,
            bottom: 20,
            data: this.opinion
          },
          series: [
            {
              name: '访问来源',
              type: 'pie',
              //radius:['0%','80%'],
              radius: '80%',
              avoidLabelOverlap: false,
              label: {
                normal: {
                  show: false,
                  position: 'center'
                },
                emphasis: {
                  show: true,
                  textStyle: {
                    fontSize: '30',
                    fontWeight: 'blod'
                  }
                }
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              data: this.opinionData
            }
          ]
          /*title : {
            text: '同名数量统计',
            subtext: '纯属虚构',
            x:'center'
          },
          tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            type: 'scroll',
            orient: 'vertical',
            right: 10,
            top: 20,
            bottom: 20,
            data: this.opinion
          },
          series : [
            {
              name: '姓名',
              type: 'pie',
              radius : '55%',
              center: ['40%', '50%'],
              data: this.opinionData,
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]*/
        })
      }
    },
    //调用
    mounted() {
      this.$nextTick(function () {
        this.drawPie('main')
      })
    }
  }
</script>

<style scoped>

</style>
