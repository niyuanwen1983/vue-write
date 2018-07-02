import axios from 'axios';

axios.defaults.withCredentials = true;

//获取图表数据
export function getdata() {
  console.log(3)
  //return axios.get('../../server/mock/sells.json')
  //return axios.get('sells.json')
  axios.defaults.baseURL = 'http://localhost:8081';
  return axios.get('/server/mock/sells.json');
  console.log(4)
  /*axios.get("/src/api/sells.json").then((result)=>{
    let r = result;
    let s = '';
    return result;
  }).catch((err)=>{
    let e = err;
    let f = ''
    return '';
  });*/
  let a = 'b';
}

//获取图表数据
export function getWords() {
  //axios.defaults.baseURL = 'http://localhost:8081';
  axios.defaults.baseURL = 'https://niyuanwen1983.github.io/vue-write';
  return axios.get('/src/api/words.json');
}
