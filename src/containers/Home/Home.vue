<template>
  <div>
    <HomeHeader @selectMenu="select"></HomeHeader>
    <div class="time-div">已用时间：{{this.timeCount}}秒</div>
    <div class="write-div" v-show="startFlg">
      {{this.currentWordCN}}
      <br/>
      <br/>
      <input ref="inputedWord" class="en-input" v-model="this.inputingWords" disabled/>
      <div class="alphbet-div">
        <div v-for="item in alphbet26" class="alphbet" @click="writeAlphbet">{{item}}</div>
        <div class="alphbet" @click="removeAlphbet"><-</div>
      </div>
    </div>
    <div class="btn-div">
      <button class="start" @click="startTest">开始默写</button>
    </div>
  </div>
</template>
<script>
  import HomeHeader from './HomeHeader.vue'
  import Course from '../Course/Course.vue'
  import {getWords} from '../../api/index2.js'
  import {mapGetters} from 'vuex'
  import * as all from '../../store/index'

  export default {
    data() {
      return {
        msg: '',
        //开始标记
        startFlg: false,
        //用时
        timeCount: 0,
        //计数器id
        intervalId: 0,
        //当前单词index
        currentWordIndex: 1,
        //当前单词（中文）
        currentWordCN: '中文',
        //当前单词（英文）
        currentWordEN: '',
        //键盘
        alphbet26: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
        //正在拼写的单词
        inputingWords: '',
        //单词列表（中文）
        wordListCN: [],
        //单词列表（英文）
        wordListEN: [],
        //单词数量
        wordListLength: 0
      }
    },
    created() {
    },
    mounted() {
      this.getWords()
    },
    methods: {
      select() {
      },
      startTest(e) {
        if (e.target.innerText === '开始默写') {
          e.target.innerText = '下一个'
          this.startFlg = true
          this.currentWordCN = this.wordListCN[0];
          this.intervalId = setInterval(() => {
            return this.timeCount++
          }, 1000);
        }
        else if (e.target.innerText === '下一个') {
          this.isRight()
          this.currentWordIndex++;
          if (this.currentWordIndex == this.wordListLength) {
            e.target.innerText = '提交'
          }
          this.currentWordCN = this.wordListCN[this.currentWordIndex - 1];
        }
        else {
          let res = confirm('确认提交？')
          if (res) {
            this.isRight()
            window.clearInterval(this.intervalId)
            this.$router.push({path: '/course/:cid', component: Course})
          }
        }
      },
      isRight() {
        if (this.$refs.inputedWord.value === this.wordListEN[this.currentWordIndex - 1]) {
          this.$store.commit('updateWrong', {"sum": this.currentWordIndex, "wrong": 0})
        }
        else {
          this.$store.commit('updateWrong', {"sum": this.currentWordIndex, "wrong": 1})
        }
      },
      writeAlphbet(e) {
        this.inputingWords += e.target.innerHTML;
      },
      removeAlphbet() {
        if (this.inputingWords.length > 0) {
          this.inputingWords = this.inputingWords.slice(0, this.inputingWords.length - 1);
        }
      },
      async getWords() {
        let result = await getWords()
        this.wordListLength = result.words.length
        for (var i = 0; i < result.words.length; i++) {
          this.wordListCN.push(result.words[i].cn)
          this.wordListEN.push(result.words[i].en)
        }
      }
    },
    computed: {
    },
    components: {
      HomeHeader
    }
  }
</script>
<style scoped lang="less">
  img {
    max-width: 100%
  }

  .content {
    position: fixed;
    top: 56px;
    bottom: 54px;
    left: 0;
    right: 0;
    overflow: scroll;
  }

  .home-lessons {
    padding: 10px 7.5px;
    .lesson {
      border-radius: 5px;
      box-shadow: 1px 1px 2px 1px #c5c5c5,-1px -1px 2px 1px #c5c5c5;
      overflow: hidden;
      text-align: center;
      margin: 18px 0;
      img {
        height: 140px;
        border-radius: 5px 5px 0 0;
      }
      p {
        line-height: 200%;
      }
      p:nth-child(2) {
        color: #bbbbbb;
      }
      p:nth-child(3) {
        color: #ed3a3a;
      }
    }
    .load-more {
      height: 30px;
      line-height: 30px;
      border-radius: 5px;
      text-align: center;
      background-color: lightskyblue;
    }
    .line {
      width: 100%;
      text-align: center;
      line-height: 35px;
    }
  }

  .time-div {
    width: 90%;
    margin: 60px 0 0 2%;
  }

  .write-div {
    width: 90%;
    margin: 10% auto 0 auto;
    font-weight: bold;
    text-align: center;
    font-size: 24px;
  }

  .en-input {
    width: 90%;
    border-radius: 4px;
    height: 36px;
    font-size: 28px;
    font-weight: bold;
  }

  .alphbet-div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 98%;
    margin: 10% auto 0 auto;
    text-align: center;
  }

  .alphbet {
    width: 17%;
    border: solid 1px #aaaaaa;
    border-radius: 4px;
    margin: 1%;
  }

  .btn-div {
    width: 100%;
    position: fixed;
    bottom: 60px;
    text-align: center;
  }

  .start {
    margin: 0 auto;
    background-color: #388e8e;
    width: 90%;
    padding: 4%;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    color: #ffffff;
    font-weight: bold;
  }
</style>
