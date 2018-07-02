<template>
  <nav>
    <router-link exact to="/">
      <i class="iconfont icon-xingqiu"></i>
      <span>背诵</span>
    </router-link>
    <!--<router-link to="/course" >
      <i class="iconfont icon-react"></i>
      <span>我的课程</span>
    </router-link>
    -->
    <router-link :to="{name:'course',params:{cid:'abcdefg'}}">
      <i class="iconfont icon-react"></i>
      <span>我的课程</span>
    </router-link>
    <router-link to="/profile">
      <i class="iconfont icon-xiaolian"></i>
      <span>个人中心</span>
    </router-link>
  </nav>
</template>
<script>
  export default {
    data() {
      return {msg: 'hello'}
    },
    created() {
    },
    methods: {},
    computed: {},
    components: {}
  }
</script>
<style scoped lang="less">
  nav {
    position: fixed;
    bottom: 0px;
    width: 100%;
    height: 53px;
    border-top: 1px solid #d5d5d5;
    display: flex;
    a {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #b5b5b6;
      i.iconfont {
        font-size: 24px;
      }
      &.active {
        color: #3a9be8;
      }
    }
  }

  .router-link-exact-active {
    color: red
  }
</style>
