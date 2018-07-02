import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.withCredentials = true;
import { Toast } from 'mint-ui';
let toast = null;
axios.interceptors.request.use(function (config) {
  if(!toast){
      toast = Toast({
        message:'加载页面中',
        duration:-1,
        iconClass: 'iconfont icon-xiaolian'
      });
  }
  return config
});

axios.interceptors.response.use(function (res) {
  setTimeout(()=>{
    toast.close();
    console.log('closed!');
  },1000)
  return res.data;
});

// 获取轮播图
export function getSliders() {
  return axios.get('/api/sliders');
}

// 获取课程
export function getLessons(type,offset,limit) {
  return axios.get(`/api/lessons?type=${type}&offset=${offset}&limit=${limit}`);
}

//登录
export function login(user){
  return axios.post('/api/login',user);//{username,password}
}

//注册
export function reg(user){
  return axios.post('/api/reg',user);//{username,password}
}

// 验证
export function validate(){
  return axios.get('/api/validate');
  /*let res = axios.get('/api/validate').then(function(result){
    console.log('result=' + result);
  });
  console.log('res=' + res);
  return res;*/
}

// 退出
export function logout(){
  return axios.get('/api/logout');
}
