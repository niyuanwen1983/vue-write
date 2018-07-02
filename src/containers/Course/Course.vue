<template>
  <div>
    哈哈 这里没内容 被骗了吧
    路由中配置的参数{{this.$route.params.cid}}
    <br/>
    {{data3}}
    <!--<Bar ref="bar1" @compchild="comp" v-bind:bardata1="data1" v-bind:bardata2="data2"></Bar>-->
    <Pie></Pie>
  </div>
</template>
<script>
  //import Bar from '../Charts/Bar.vue'
  import Pie from '../Charts/Pie.vue'
  import {getdata} from '../../api/index2.js'

  export default {
    data() {
      return {
        msg: 'hello',
        data1: [],
        data2: [],
        data3: '图表正在显示中......'
      }
    },
    created() {
    },
    mounted() {
      this.showResult()
      //this.get1();
      /*setTimeout(()=>{
        this.data1 = ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        this.data2 = [5, 10, 15, 20, 25, 30]
        this.$refs.bar1.drawLine(this.data1,this.data2)
      },2000)*/
    },
    methods: {
      comp() {
        //alert('图表显示完成！');
        this.data3 = '图表显示完成！';
      },
      async get1() {
        console.log(1);
        let result = await getdata()
        console.log(2)
        for (var i = 0; i < result.val.length; i++) {
          this.data1.push(result.val[i]);
        }
        this.data2 = [5, 10, 15, 20, 25, 30]
        this.$refs.bar1.drawLine(this.data1, this.data2)
      },
      showResult() {
        //alert(this.$store.state.sum + '' + this.$store.state.wrong);
      }
    },
    computed: {},
    components: {
      //Bar,
      Pie
    }
  }
</script>
<style scoped>

</style>
