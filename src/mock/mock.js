import Mock from 'mockjs'


import { allwebNav, oftenNav } from './home.js';


Mock.mock('/query_all_nav', {
    "code":0,
    data: allwebNav,
});

Mock.mock('/query_often_nav', {
  "code":0,
  data: oftenNav,
});


// 返回技术性导航
let skill = ()=>{
  let data = [];
  allwebNav.forEach((item)=>{
    if(item.parentValue == '001'){
      data.push(item)
    }
  })
  return data;
}
Mock.mock('/query_skill_nav', {
  "code":0,
  data: skill(),
});