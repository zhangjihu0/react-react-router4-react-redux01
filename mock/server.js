let express = require('express');
let app = express();
app.listen(3000);
let ad = require('./home/ad');
//广告的接口
app.get('/api/ad',(req,res)=>{
    console.log('A');
    res.send(ad);
});

let list = require('./home/list');
//获取列表 需要传递城市
// :city 必须有但任意；
app.get('/api/list/:city/:page',(req,res)=>{
    console.log(req.params.city);
    console.log(req.params.page);
    res.send(list)
});
//fetch 获取数据
//res,json() 数据传输为字符串，由.json()转化为json()格式；
// fetch(url,{
//     Accept:"application/json",

// }).then(res=>res.json()).then(data=>{

// })

