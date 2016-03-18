$(function(){

	myResponsive(
		"#myNav",
		0,748,
		{
			"position":"static"
		}
	);

	myResponsive(
		"#myLeftBar",
		748,1023,
		{
			"display":"none"
		}
	);

	myResponsive(
		"#myContents li",
		0,767,
		{
			"background-color":"#222222"
		}
	);

	myResponsive(
		"#myLeftBar",
		767,1400,
		{
			"background-color":"#F7F7F7",
			"border-color":"#F7F7F7"
		}
	);

	myResponsive(
		"#myNav",
		1228,1251,
		{
			"left":"10px"
		}
	);

	myResponsive(
		"#myNav",
		0,1228,
		{
			"left":"0"
		}
	);

});


function myResponsive(target,minWidth,maxWidth,styleJson){
	// 获取目标元素及总数
	var targetEle = $(target);
	// 用来获取原来的css样式
	var styleName = [];
	var styleValue = [];

	var t = 0;
	for(var i in styleJson){
		styleName[t] = i;
		styleValue[t] = targetEle.css(i);
		t++;
	}

	// 执行一遍所有，解决手机端无响应问题
	var t = styleName.length;
	var bodyWidth = document.body.clientWidth;
	// // 设置新样式
	if(bodyWidth > minWidth && bodyWidth < maxWidth){
	 	for(var n = 0; n < t; n++){
	 		targetEle.css(styleName[n],styleJson[styleName[n]]);
	 	}
	}
	else{
		// 设置为原来的样式
		for(var n = 0; n < t; n++){
			targetEle.css(styleName[n],styleValue[n]);
		}
	}


	// 随窗口动态变化
	$(window).resize(function() {

		var t = styleName.length;
		var bodyWidth = document.body.clientWidth;
		// // 设置新样式
		if(bodyWidth > minWidth && bodyWidth < maxWidth){
		 	for(var n = 0; n < t; n++){
		 		targetEle.css(styleName[n],styleJson[styleName[n]]);
		 	}
		}
		else{
			// 设置为原来的样式
			for(var n = 0; n < t; n++){
				targetEle.css(styleName[n],styleValue[n]);
			}
		}
    });
}