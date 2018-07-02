<template>
  <div class="profile">
    <div class="profile-bg">
      <img src="../../assets/profile.png"/>
      <div>
        <a v-if="getUser">{{getUser}}</a>
        <router-link to="/login" v-else>登录</router-link>
      </div>
      <div @click="quite">退出</div>
    </div>
  </div>
</template>
<script>
  import {mapGetters,mapActions} from 'vuex';
  import * as Types from '../../store/mutation-types'
    export default {
        data(){
            return {msg: 'hello'}
        },
        created(){
          console.log('profile1');
        },
        methods: {
          ...mapActions([Types.LOGOUT]),
          quite(){
              // 退出
             this[Types.LOGOUT]()
          }
        },
        computed: {
          ...mapGetters(['getUser'])
        },
        components: {}
    }
</script>
<style scoped lang="less">
  .profile {
    .profile-bg {
      background: url(../../assets/login_bg.png) center center;
      background-size: contain;
      width: 100%;
      height: 223px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        width: 62px;
        height: 62px;
        border-radius: 50%;
      }
      div {
        background-color: #FFF;
        color: #3392e6;
        width: 65px;
        height: 25px;
        border-radius: 10px;
        text-align: center;
        line-height: 25px;
        margin-top: 16px;
      }
    }
  }
</style>
