let express = require('express');
let bodyParser = require('body-parser');
let session = require('express-session');
let app = express();
app.use(session({
  resave:true,
  secret:'zfpx',
  saveUninitialized:true
}));
//这里存放着所有的用户信息
let users = [];
app.use(bodyParser.json());//客户端发过来的请求体是JSON格式的
app.use(function(req,res,next){
  //如果在webpack里配置了代理，那么这些响应头都不要了
  //只允许8080访问
  res.header('Access-Control-Allow-Origin','http://localhost:8081');
  //服务允许客户端发的方法
  res.header('Access-Control-Allow-Methods','GET,POST,DELETE,PUT');
  //服务器允许的请求头
  res.header('Access-Control-Allow-Headers','Content-Type,Accept');
  //允许客户端把cookie发过来
  res.header('Access-Control-Allow-Credentials','true');
  //如果请求的方法是OPTIONS,那么意味着客户端只要响应头，直接结束响应即可
  if(req.method == 'OPTIONS'){
    res.end();
  }else{
    next();
  }
});
/*app.use(function sleep(req,res,next){
  setTimeout(next,2000);
});*/
let sliders = require('./mock/sliders');
app.get('/api/sliders',function(req,res){
    res.json(sliders);
});
let lessons = require('./mock/lessons');//{hasMore,list}
app.get('/api/lessons',function(req,res){
  let {type="",offset=0,limit=5} = req.query;
  offset = isNaN(offset)?0:parseInt(offset);
  limit = isNaN(limit)?0:parseInt(limit);
  let newLessons = JSON.parse(JSON.stringify(lessons));
  //如果type为空，则不过滤课程类型，如果type不为空，则只出现课程类型跟传入的type相同的课程
  newLessons.list = newLessons.list.filter(item=>item.type == type || type =="");
  // 0+5  5+5=10 10+5=15 15+5=20
  //如果下一页的起始索引已经大于等于总条数了，则认为已经分页完毕，后面已经没有数据了
  newLessons.hasMore = limit+offset<newLessons.list.length;//20
  //提取指定页的数据
  newLessons.list = newLessons.list.slice(offset,offset+limit);//offset0 0-4
  for(let i=0;i<newLessons.list.length;i++){
    let lesson = newLessons.list[i];
    lesson.title = `${offset+i+1}-${lesson.title}`;
  }
  res.json(newLessons);
});
//users=[{username:'zfpx',password:'123'}]
app.post('/api/reg',function(req,res){
  let user = req.body;//取得请求体
  let oldUser = users.find(item=>item.username == user.username);
  if(oldUser){
    //两种异常 1.服务异常 2.业务异常
    res.json({code:1,error:'用户名重复'});//如果失败有一个error
  }else{
    users.push(user);
    // code=0表示一切正常成功，非0表示失败
    res.json({code:0,success:'注册成功'});//如果成功有一个success
  }
});
app.post('/api/login',function(req,res){
   let user = req.body;//取得登录的请求体
  console.log(user)
   let oldUser = users.find(item=>item.username==user.username&&item.password==user.password);
  console.log(users)
   if(oldUser){
     //如果找到了用户名和密码相同的用户，表示登录成功,把用户存放入session中
     req.session.user = oldUser;
     res.json({code:0,success:"登录成功",user});
   }else{
     res.json({code:1,error:'用户名或密码错误'});
   }
});
app.get('/api/logout',function(req,res){
   req.session.user = null;
   res.json({code:0,success:'退出成功'});
});
//验证用户是否登录
app.get('/api/validate',function(req,res){
   if(req.session.user){
     console.log('current=' + req.session.user.username);
     res.json({code:0,user:req.session.user});
   }else{
     console.log('unlogined=' + req.session.user);
     res.json({code:1,error:'此用户未登录'});
   }
});
app.listen(4000);
