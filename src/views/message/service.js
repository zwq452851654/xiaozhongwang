import request from "@/utils/http";


// 获取消息列表
function getMsg(params){
	return request.get("/message/getMsg", params);
}

// 更新消息状态为已读
function updateMsgState(params){
	return request.post("/message/updateMsgState", params);
}



export default {
  getMsg,
	updateMsgState
};