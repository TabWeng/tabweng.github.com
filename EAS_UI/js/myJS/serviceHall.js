$(function(){
	// 调用操作方法
	operation();

});

// 分析师搜索过来的操作
function operation(){
	var getParam = GetQueryString("search");
	if(getParam!=null && getParam.toString().length>1){
		$("#toClick").click();
	}
}

// 获得参数值
function GetQueryString(name)
{
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}
