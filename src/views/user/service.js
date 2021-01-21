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


export default {
  reg,
	login,
	userInfo,
};