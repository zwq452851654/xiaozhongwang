import request from "@/utils/http";


// 首页搜索列表
function queryYlbc(params){
	return request.get("/glzx/queryYlbc", params);
}

// 发送消息
function sendMsg(params){
	return request.post("/message/sendMsg", params);
}



export default {
  queryYlbc,
  sendMsg
};