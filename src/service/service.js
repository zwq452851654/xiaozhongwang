import request from "@/utils/http";


// 获取未读消息数量
function getMsgLength(params){
	return request.get("/message/getMsgLength", params);
}


// 获取消息列表
function getMsg(params){
	return request.get("/message/getMsg", params);
}

// ---------------------   收藏夹   -----------------------------
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


// -----------------   更换皮肤   -----------------
function queryBgPic(params){
	return request.get("/bg/queryBgPic", params);
}

// 自定义上传图片的回调
function uploadBg(params){
	return request.post("/bg/uploadBg", params);
}


// 背景图设置
function setBg(params){
	return request.post("/bg/setBg", params);
}







export default {
  getMsgLength,
	getMsg,
	queryCollect,
	querySecondCollect,
	addCollect,
	delCollectItem,
	addFolder,
	queryBgPic,
	uploadBg,
	setBg
};