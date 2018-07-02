<template>
  <div id="myChart" :style="{width: '100%', height: '300px'}"></div>
</template>

<script>
  // 引入基本模板
  let echarts = require('echarts/lib/echarts')
  // 引入柱状图组件
  require('echarts/lib/chart/bar')
  // 引入提示框和title组件
  require('echarts/lib/component/tooltip')
  require('echarts/lib/component/title')
  export default {
    name: "Bar",
    props: ["bardata1", "bardata2"],
    data() {
      return {
        msg: 'hello',
        sum: [],
        wrong: []
      }
    },
    created() {
    },
    mounted() {
      this.sum.push(this.$store.state.sum)
      this.wrong.push(this.$store.state.wrong)
      this.drawLine(this.sum, this.wrong)
    },
    methods: {
      drawLine(data1, data2) {
        // 基于准备好的dom，初始化echarts实例
        //let myChart = this.$echarts.init(document.getElementById('myChart'))
        let myChart = echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
          title: {text: '在Vue中使用echarts'},
          tooltip: {},
          xAxis: {
            //data: this.data1
            //data: this.bardata1
            data: data1
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            //data: this.data2
            //data: this.bardata2
            data: data2
          }]
        });

        this.$emit('compchild');
      }
    },
    computed: {},
    components: {}
  }
</script>

<style scoped>

</style>
