/*使用说明：

举例：
myResponsive(
	"#myBody", //这里和CSS样式一样的语法，支持"#myBody li",".abc ul li"等等
	468,1000, //表示在 468px ~ 1000px 之间改变css为下面的样式，超出的会变回原来的样式
	{
		"background-color":"green", //这里设置CSS样式，注意最后一个不用加逗号
		"font-size":"50px"
	}
);

使用说明：

第零步：若html文件中没有导入jquery，要先导入jQuery，jQuery的引入要放在下面两个文件的前面
第一步：在html中引入本js文件，文件名为：myResponsive.js
第二步：新建一个自己的js文件，用来写响应式，并复制下面的语句到该js文件里面：

$(function(){
	myResponsive(
		"#myBody",
		468,1000,
		{
			"background-color":"green",
			"font-size":"50px"
		}
	);
});

请自行修改，修改为自己想要的内容

第三步：把第二步新建的js文件引入到html中，注意一定要放在（本文件）myResponsive.js后面

使用技巧：
	1. 如果宽度不需要最小值，可以设置为0
	2. 如果宽度不需要最大值，可以设置为2000

注意：
	1. 在写CSS样式中，最后一个不需要加逗号，前面的都要加逗号
	2. 获取样式要和CSS一样，比如id，要加上 #，class要加上点.
*/

/* 更新说明

V1.1 2016-3-18
	1. 优化初始窗口也适应css操作
*/
/*内容********************************/

/***********
*函数名：myResponsive
*作用：实现响应式功能（V1.1）
*参数：
	target：（string）要操作的元素，字符串类型
	minWidth：（int）操作区间宽度的最小值
	maxWidth：（int）操作区间宽度的最大值
	styleJson：（json）要修改的css样式，json格式
*作者：TabWeng
*邮箱：hlwyfeng@gmail.com
***********/

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

	// 触发resize
	$(window).trigger("resize");

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
