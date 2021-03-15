import request from "@/utils/http";

// ---------------------   收藏夹   -----------------------------

// 文件夹列表
function queryFolder(params){
	return request.get("/collect/queryFolder", params);
}


// 获取一级收藏夹列表查询
function queryCollect(params){
	return request.get("/collect/queryCollect", params);
}


// 获取二级收藏夹列表查询
function querySecondCollect(params){
	return request.get("/collect/querySecondCollect", params);
}

// 添加网址收藏
function addCollect(params){
	return request.post("/collect/addCollect", params);
}

// 删除收藏
function delCollectItem(params){
	return request.post("/collect/delCollectItem", params);
}

// 添加收藏文件目录
function addFolder(params){
	return request.post("/collect/addFolder", params);
}

// 修改网址信息
function updateWeb(params){
	return request.post("/collect/updateWeb", params);
}






export default {
  queryFolder,
  queryCollect,
  querySecondCollect,
  addCollect,
  delCollectItem,
  addFolder,
  updateWeb
};