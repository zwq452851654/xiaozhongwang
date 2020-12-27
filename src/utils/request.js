/****   request.js   ****/
import config from '../common/config'
import qs from 'qs'
const store = require('@/store');
import router from '../router'
// 导入axios
import axios from 'axios'
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// 使用element-ui Message做消息提醒
import { Message } from 'element-ui';
//1. 创建新的axios实例，
const service = axios.create({
  // 公共接口--这里注意后面会讲
  baseURL: config.BASE_API,
  // 超时时间 单位是ms，这里设置了3s的超时时间
  timeout: 3 * 1000
})
// 2.请求拦截器
service.interceptors.request.use(config => {
  config.headers = {
    'Content-Type':'application/x-www-form-urlencoded',
    'token': localStorage.getItem('token')
  }
	console.log(config)
  // 为避免因页面手动刷新登录状态丢失，在这做一个根据token的判断进行登录状态保持
  let isLogin = store.default.state.isLogin;
  let token = localStorage.getItem('token');
  if(!isLogin && token){
    store.default.dispatch('loginFun', true);
  }
  config.data = qs.stringify(config.data);
  return config
}, error => {
  Promise.reject(error)
})



let intercept_flag = true;
// 3.响应拦截器
service.interceptors.response.use(response => {
  //接收到响应数据并成功后的一些共有的处理，关闭loading等
	if(response.data.code && response.data.msg == '未登录' && intercept_flag){
		// Message({
		//   type:'warning',
		//   message: response.data.msg
		// })
		store.default.dispatch('loginFun', false);
		localStorage.removeItem('token')
		// router.push('/user/login');
		intercept_flag = false;
		let t = setTimeout(()=>{
			intercept_flag = true;
		},5000)
	}
  return response
}, error => {
   /***** 接收到异常响应的处理开始 *****/
  if (error && error.response) {
    // 1.公共错误处理
    // 2.根据响应码具体处理
    switch (error.response.status) {
      case 400:
        error.message = '错误请求'
        break;
      case 401:
        error.message = '未授权，请重新登录'
        break;
      case 403:
        error.message = '拒绝访问'
        break;
      case 404:
        error.message = '请求错误,未找到该资源'
        window.location.href = "/NotFound"
        break;
      case 405:
        error.message = '请求方法未允许'
        break;
      case 408:
        error.message = '请求超时'
        break;
      case 500:
        error.message = '服务器端出错'
        break;
      case 501:
        error.message = '网络未实现'
        break;
      case 502:
        error.message = '网络错误'
        break;
      case 503:
        error.message = '服务不可用'
        break;
      case 504:
        error.message = '网络超时'
        break;
      case 505:
        error.message = 'http版本不支持该请求'
        break;
      default:
        error.message = `连接错误${error.response.status}`
    }
  } else {
    // 超时处理
    if (JSON.stringify(error).includes('timeout')) {
      Message.error('服务器响应超时，请刷新当前页')
    }
    // error.message('连接服务器失败')
  }

  Message.error(error.message)
  /***** 处理结束 *****/
  //如果不需要错误处理，以上的处理过程都可省略
  return Promise.resolve(error.response)
})
//4.导入文件
export default service