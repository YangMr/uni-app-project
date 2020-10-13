import {HTTP} from "../utils/http.js";

class IndexModel extends HTTP {
	//获取文章所有分类
	getPostClass(){
		return this.request({url : "/api/v1/postclass"})
	}
}

export {IndexModel}