$(function(){

	myResponsive(
		".D-myDataDownload",
		0,750,
		{
			"width":"100%",
			"display":"block"
		}
	);

	myResponsive(
		".D-canChooseWord",
		972,1183,
		{
			"font-size":"13px"
		}
	);

	myResponsive(
		"#hiddenProFuntion",
		0,975,
		{
			"display":"none"
		}
	);	

// 操作连接数据库测边栏的出现和隐藏
$("#LinkDataBase").click(function(){
	$("#myLeftFixed").animate({
		left:"0"
	}, 500);
});

//取消按钮
$("#LineCancelBtn").click(function(){
	$("#myLeftFixed").animate({
		left:"-330px"
	},300);
});

// 正在分析
$("#submitLink").click(function(){
	$(".D-leftInput > form").waitMe({
	    effect: 'roundBounce',
	    text: '正在连接数据库并分析中....',
	    bg: 'rgba(255,255,255,0.7)',
	    color:'#000',
	    sizeW:'',
	    sizeH:''
	});
});

$("#LineCancelBtn").click(function(){
	$(".D-leftInput > form").waitMe('hide');
});



});