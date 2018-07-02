<template>
  <div class="login-panel">
    <mt-header fixed title="登录" class="login">
      <router-link to="/profile" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <div class="login-logo">
      <img src="../../assets/profile.png" alt=""/>
    </div>
    <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
    <router-link to="/reg">前往注册</router-link>
    <mt-button @click.native="log" type="primary">登录</mt-button>
  </div>
</template>
<script>
  import {mapActions} from 'vuex';
  import * as Types from '../../store/mutation-types'
    export default {
        data(){
            return {msg: 'hello',username:'',password:''}
        },
        created(){
        },
        methods: {
          ...mapActions([Types.LOGIN]),
          log(){
            this[Types.LOGIN]({username:this.username,password:this.password,router:this.$router})
          }
        },
        computed: {},
        components: {}
    }
</script>
<style scoped lang="less">
  .login-panel{
    padding:56px 17px 0;
    display:flex;
    flex-direction: column;
    z-index: 20;
    position: absolute;
    background-color: #FFF;
    top:0;
    left:0;
    bottom:0;
    right:0;
    .login button{
      color:#fff
    }
    .login-logo{
      height:167px;
      width:100%;
      display: flex;
      justify-content: center;
      align-items: center;
      img{
        width:62px;
        height:62px;
      }
    }
    input{
      border:1px solid #999999;
      outline:none;
      height:42px;
      width:100%;
      box-sizing: border-box;
      margin-bottom:20px;
      padding-left:20px;
      border-radius: 4px;
    }
    a{
      color:#188ae4;
      margin-bottom:20px;
    }
  }
</style>
