import request from "@/utils/http";


// 首页搜索列表
function querySearchList(params){
	return request.get("/nav/querySearchList", params);
}

// 设置搜索目标
function setSearchAims(params){
	return request.post("/nav/setSearchAims", params);
}


// 获取资讯列表
function queryNews(params){
	return request.get("/news/queryNews", params);
}

// 获取常用导航列表
function queryOften(params){
	return request.get("/nav/query_often_nav", params);
}

// 常用导航排序设置
function setOftenNavOrder(params){
	return request.post("/nav/setOftenNavOrder", params);
}


// 删除常用导航
function delOftenNav(params){
	return request.post("/nav/delOftenNav", params);
}

// 获取导航列表
function queryNav(params){
	return request.get("/nav/queryNav", params);
}

// 获取所有的导航菜单
function queryAllNav(params){
	return request.get("/nav/queryAllNav", params);
}

// 添加常用导航 addOftenNav
function addOftenNav(params){
	return request.post("/nav/addOftenNav", params);
}

// 补充遗漏
function addBcyl(params){
	return request.post("/nav/addBcyl", params);
}


// 搜索提示
function sugrec(params){
	return request.get("/nav/sugrec", params);
}

// 百度翻译
function fanyi(params){
	return request.get("/nav/fanyi", params);
}



export default {
  querySearchList,
	setSearchAims,
	queryNews,
	delOftenNav,
	queryOften,
	setOftenNavOrder,
	queryNav,
	queryAllNav,
	addOftenNav,
  addBcyl,
	sugrec,
  fanyi
};