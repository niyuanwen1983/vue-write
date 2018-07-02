<template>
  <div>
    <mt-header title="注册" class="login">
      <router-link to="/login" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
    <mt-button type="primary" size="large" @click="toReg">注册</mt-button>
  </div>
</template>
<script>
  import * as Types from '../../store/mutation-types';
  import {reg} from '../../api'
    export default {
        data(){
            return {msg: 'hello',username:'',password:''}
        },
        created(){
        },
        methods: {
          async toReg(){
            let result = await reg({username:this.username,password:this.password});
            if(result.code == 0 ){
              this.$router.history.push('/login')
            }else{
                alert(result.error)
            }
          }
        },
        computed: {},
        components: {}
    }
</script>
<style scoped>

</style>
