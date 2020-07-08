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