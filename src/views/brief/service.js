import request from "@/utils/http";


// 首页搜索列表
function queryYlbc(params){
	return request.get("/glzx/queryYlbc", params);
}

// 发送消息
function sendMsg(params){
	return request.post("/message/sendMsg", params);
}

// 审核通过
function navReview(params){
	return request.post("/nav/navReview", params);
}


// -------------------   导航类型维护   --------------------
// 新增、修改
function editBzx(params){
	return request.post("/bzx/editBzx", params);
}

// 网址类型查询
function queryWebType(params){
	return request.get("/bzx/queryWebType", params);
}

// 删除
function delWebType(params){
	return request.post("/bzx/delWebType", params);
}







export default {
  queryYlbc,
  sendMsg,
	navReview,
  editBzx,
  queryWebType,
  delWebType
};