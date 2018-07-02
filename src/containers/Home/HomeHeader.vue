<template>
  <div class="home-header">
    <div class="home-logo">
      <img src='../../assets/logo.png'/>
      <div @click="toggle">
        <i class="iconfont icon-guanbi" v-show="showList"></i><i class="iconfont icon-uilist" v-show="!showList"></i>
      </div>
    </div>
    <transition name="fade">
      <ul class="menu-list" v-show="showList" @click="selectMenu">
        <li data-type="">按顺序背诵</li>
        <li data-type="react">随机背诵</li>
      </ul>
    </transition>
  </div>
</template>
<script>
    export default {
        data(){
            return {showList: false}
        },
        created(){
        },
        methods: {
          toggle(){
              this.showList = !this.showList
          },
          selectMenu(e){
              this.$emit('selectMenu',e.target.dataset.type);
              this.toggle()
          }
        },
        computed: {},
        components: {}
    }
</script>
<style scoped lang="less">
  .home-header{
    position: fixed;
    top:0;
    left:0;
    width:100%;
    z-index: 10;
    .home-logo{
      height:56px;
      background-color: #000;
      width:100%;
      display:flex;
      justify-content: space-between;
      align-items: center;
      img{
        width:109px;
        height:34px;
        margin-left:7.5px;
      }
      div{
        color:#FFF;
        margin-right:7.5px;
      }
    }
    .menu-list{
      position: absolute;
      left:0;
      top:56px;
      width:100%;
      background-color: #000;
      li{
        height:45px;
        width:100%;
        line-height: 45px;
        text-align: center;
        color:#FFF;
        border-top:1px solid #464646;
        &.active{
          color:green;
        }
      }
    }

  }
  .fade-enter{
    opacity: 0;
  }
  .fade-enter-active{
    transition: .3s linear;
  }
  .fade-leave-active{
    transition: .3s linear;
    opacity: 0;
  }
</style>
