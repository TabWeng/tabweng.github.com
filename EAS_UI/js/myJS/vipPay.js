$(function(){

	// 初始化清空
	$('#inputVipMonth')[0].value = '';

	// 时时监听输入的内容
	$('#inputVipMonth').bind('input propertychange', function() { 
 		if(this.value.length >= "3"){
 			this.value = this.value.substr(0,3);
 			if(this.value > 100){
 				//提示一次最多充100个月
 				 this.value = '';
 				alert("一次性最多充值100个月");
 			}
 		}
	});

    // 动态给出价格和ajax二维码
    // 写在html里面

	// 限制输入字符长度
	$('#vipKey').bind('input propertychange', function(){
		if(this.value.length >= "6"){
			this.value = this.value.substr(0,6);
		}
	});

	// 提交表单
	$("#surePad").click(function(){
		if($('#inputVipMonth')[0].value == ''){
			$('#inputVipMonth').css("border","2px solid red");
			alert("请输入申请会员月数！");
		}else{
			var getVipKeyLength = $('#vipKey')[0].value.length;
			if( getVipKeyLength == 0){
				alert("请输入支付订单尾号的6位数，如果不知道如何操作，请查看“帮助”");
			}else if(getVipKeyLength != "6"){
				alert("输入长度有误，请输入订单尾号的6位数");
			}else{
				$("#applyVipForm").submit();
			}
		}
	});



});
