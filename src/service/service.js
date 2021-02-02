import request from "@/utils/http";


// 获取未读消息数量
function getMsgLength(params){
	return request.get("/message/getMsgLength", params);
}


function getMsg(params){
	return request.get("/message/getMsg", params);
}


export default {
  getMsgLength,
	getMsg
};