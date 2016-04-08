$(function(){
	cancelOrder("test3.json");
});



// 函数实现************************************

/***************
*函数名：cancelOrder
*功能：取消订单
*参数：
	cancelOrderUrl 传给后端的url
***************/

function cancelOrder(cancelOrderUrl){
	// 绑定事件
	$(".CancelOrder").bind("click",function(){
		// 获取节点和行
		var getThisRow = $(this).parent().parent();
		var orderParam = "ASOcalcelOrder?orderNo="+ getThisRow.children().eq(0).html();
		// ajax操作
		$.get(cancelOrderUrl,orderParam,function(data){
			if(data.cancelOrderSituation == true){
				getThisRow.remove();
			}else{
				alert("无法取消订单，请稍后重试");
			}
		},"json");
	});	
}


