$(function() {
	// 随机加载背景图片
	changerHeadPic(10);

	// 监听
    $(window).resize(function() {
    });
});

//==========================
//下面是实现的函数
//==========================

/*********************
函数名：changerHeadPic
作用：随机更换背景图片
参数：picNum：图片个数，和json的数量一致
**********************/
function changerHeadPic(picNum){
	var json = {
		"0":"images/1.jpg",
		"1":"images/2.jpg",
		"2":"images/3.jpg",
		"3":"images/4.jpg",
		"4":"images/5.jpg",
		"5":"images/6.jpg",
		"6":"images/7.jpg",
		"7":"images/8.jpg",
		"8":"images/9.jpg",
		"9":"images/10.jpg"
	};

	var num = parseInt(Math.random()*picNum);
	$("#theHeader-Image img").attr("src",json[num]);
}

/*********************
函数名：viewSmallSysLink
作用：显示或者隐藏子系统超链接
**********************/
function viewSmallSysLink(){
	var flag = false;
	$("#triStyle").click(
			function(){
				$("#smallSysForLink").slideToggle("normal");
				$("#cancelSysLink").slideToggle("normal");	
			}
		);
}