import request from "@/utils/http";


// 注册
function reg(params){
	return request.post("/user/reg", params);
}

// 登录
function login(params){
	return request.post("/user/login", params);
}

// 获取用户信息
function userInfo(params){
	return request.get("/user/userInfo", params);
}

// 获取导航菜单
function queryMenu(params){
	return request.get("/user/queryMenu", params);
}


export default {
  reg,
	login,
	userInfo,
  queryMenu,
};