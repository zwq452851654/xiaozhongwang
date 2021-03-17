import request from "@/utils/http";


// 设置搜索目标
function saveLevae(params){
	return request.post("/levae/saveLevae", params);
}


export default {
  saveLevae
};