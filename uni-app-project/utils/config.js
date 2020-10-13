const config = {
	api_base_url : ""
}
if(process.env.NODE_ENV === 'development'){
    console.log('开发环境')
	config.api_base_url = "/dev";
}else{
    console.log('生产环境')
	config.api_base_url = "https://ceshi2.dishait.cn/"
}
export {config}