import Mock from 'mockjs'


import { allwebNav, oftenNav, searchList } from './home.js';


// 返回搜索项
Mock.mock('/search', {
  "code":0,
  data: searchList,
});


// 返回所有导航
Mock.mock('/query_all_nav', {
    "code":0,
    data: allwebNav,
});

// 返回常用导航
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

// 设计类网站
let design = ()=>{
  let data = [];
  allwebNav.forEach((item)=>{
    if(item.parentValue == '002'){
      data.push(item)
    }
  })
  return data;
}
Mock.mock('/query_design_nav', {
  "code":0,
  data: design(),
});

// 辅助工具
let tool = ()=>{
  let data = [];
  allwebNav.forEach((item)=>{
    if(item.parentValue == '003'){
      data.push(item)
    }
  })
  return data;
}
Mock.mock('/query_tool_nav', {
  "code":0,
  data: tool(),
});
