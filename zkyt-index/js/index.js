$(function(){

/**************
*函数调用
**************/
setHeadPic();
setHeadWord();
turnCooperation();

$(window).resize(function() {
	setHeadPic();
	setHeadWord();	
});

/*************
*函数名：setHeadPic
*功能：设置首页滚动窗的图片高度与浏览器等高
*************/
function setHeadPic(){
	var getWindowHeight = $(window).height();
	$(".img-indexHead").css("height", getWindowHeight + "px");
}

/*************
*函数名：setHeadWord
*功能：控制页首字体的响应式大小
*************/
function setHeadWord(){

	var getWindowHeight = $(window).height();
	var getWindowWidth = $(window).width();

	var getFirstPageWord = $("#p-indexHead");
	getFirstPageWord.css("font-size", getWindowWidth/15.5 + "px");
	getFirstPageWord.css("top", (getWindowHeight/2 - getWindowWidth/11)+ "px");

	var getFirstPageWord2 = $("#p-indexHead-2 p");
	getFirstPageWord2.css("font-size", getWindowWidth/15.5 + "px");

	$("#p-indexHead-2").css("font-size", getWindowWidth/15.5 + "px");
	$("#p-indexHead-2").css("top", (getWindowHeight/2 - getWindowWidth/5)+ "px");

	$("#p-indexHead-2 div:last-child p:first-child").css("top", "-" + getWindowWidth/15.5*3 + "px");
	$("#p-indexHead-2 div:last-child p:last-child").css("top", "-" + getWindowWidth/15.5*2 + "px");

	$("#span-down span").css("top", getWindowHeight * 0.85);

}

/*************
*函数名：turnCooperation
*功能：控制合作伙伴左右滑动
*************/
function turnCooperation(){
	$("#turnRight").click(function(){
		$("#cooperationImage").animate({"background-position": "-=220px"});
	});
	$("#turnLeft").click(function(){
		$("#cooperationImage").animate({"background-position": "+=220px"});
	});	
}

});

