
$(function() {

	// 控制模态框图片的尺寸自适应窗口大小 - 初始化
	ctrlModalPicSise();
	//单页目录滚动插件使用
	scrollNav();

	// 设置文字说明的高度和图片等高 - 初始化
	explainHeight();

	// 监听
    $(window).resize(function() {
    	// 设置文字说明的高度和图片等高
        explainHeight();
		// 控制模态框图片的尺寸自适应窗口大小
		ctrlModalPicSise();
    });









});


/**函数实现区****************************************************/

/**************************
*函数名：
*功能：
**************************/
function saveAnalyRecord(){
	
	// 点击保存
	$("#saveMyResult").click(function(){
		
		// 获得标题
		var getTitle = $("#saveTitle").val();
		// 获得备注
		var getRemark = $("#remarkInfo").val();

		if(getTitle == ""){
			// 提示标题不能为空
			$.alert({
					icon: 'glyphicon glyphicon-exclamation-sign D-signColorRed',
				    title: '提示：',
				    confirmButton: '确定',
				    content: '请输入保存标题',
				    confirm: function(){
				    }
				});			

		}else if(getRemark == ""){
			// 提示备注不能为空
			$.alert({
					icon: 'glyphicon glyphicon-exclamation-sign D-signColorRed',
				    title: '提示：',
				    confirmButton: '确定',
				    content: '请输入备注内容',
				    confirm: function(){
				    }
				});			

		}else{
			// 提交ajax
			var getParam = {
				"title":getTitle,
				"descript":getRemark
			}

			$.post("",getParam,function(data){
				if(data.isRecordSuccess == true){

				}else{
					// 提示备注不能为空
					$.alert({
							icon: 'glyphicon glyphicon-exclamation-sign D-signColorRed',
						    title: '提示：',
						    confirmButton: '确定',
						    content: '保存失败，请稍后重试',
						    confirm: function(){
						    }
						});
				}

			},"json");
		}

	});
}


/***************
*函数名：explainHeight
*功能：设置文字说明的高度和图片等高
***************/
function explainHeight() {
	// 获取图片和文字所有节点
	var getPicEle =  $(".D-myImg");
	var getWordEle = $(".D-explain");
	// 遍历所有的节点
	var n=0;
	for(var i=0; i<getPicEle.length; i++){

		(
			function(i){

				getPic = getPicEle.eq(i);
				getWord = getWordEle.eq(i);

				getPic.one('load',function(){
					// getWord.css("height",$(this).innerHeight() + "px");
				}).each(function(){
					if(this.complete){
						n++;
						$(this).load();
					}
				})
				
			}
		)(i)
	}

	alert(n);
	alert("pic="+n);

	if(n == parseInt(getPicEle.length)){
		for(var j = 0; j<getPicEle.length; j++){
				getMyPic = getPicEle.eq(j);
				getMyWord = getWordEle.eq(j);
				getMyWord.css("height",getMyPic.innerHeight() + "px");
				alert("第"+j);
		}

	}else{
		alert("加载错误，请刷新页面");
	}

}





/*调试代码
	// var src = getPic.attr('src'); 
	// getPic.attr('src',''); 
	// 每张图片各自加载完成后再设置
	// alert("zt");
	// if(getPic.complete == true){
	// 	alert(i);
	// 	alert(getPic.attr("src")+"=========="+getPic.innerHeight());
	// 	// getWord.css("height") = getPic.offsetHeight + "px";
	// }else{
	// 	alert("no");
	// }					
	// imgLoad(getPic, function(){
	// 	alert(img);
	// 	// alert(getPic.attr("src"));
	// });
*/
/*
*/

// function imgLoad(img,callback){
// 	alert("jaiz");
// 	// alert(img.attr("src"));
// 	var timer = setInterval(function(){
// 		alert(img.attr("src"));
// 		if(img.complete){
// 			callback(img);
// 			clearInterval(timer);
// 			alert("加载完成");
// 		}
// 	},50)
// }


/****************
*函数名：ctrlModalPicSize
*功能：控制模态框图片的尺寸自适应窗口大小
****************/
function ctrlModalPicSise(){

	// 设置模态框图片的最大宽度,防止超出窗口
	var getPicEle = $(".D-modalPicSise img");
	// 获取图片外层的div
	var getPicDiv = $(".D-modalPicSise");

	// 获取浏览器窗口的宽和高
	var viewWidth = document.body.clientWidth;
	var viewHeight = $(window).height();

	// 遍历所有图片
	for (var i=0; i<getPicEle.length; i++){
		// 图片最大宽度为浏览器窗口的90%
		getPicEle[i].style["max-width"] = viewWidth*0.90 + "px";

		// 如果图片原图的高度小于当前窗口的高度，则图片在高度上居中显示
		// 其中，viewHeight-100表示减去css样式中添加的高度
		if(getPicEle[i].height < viewHeight){
			getPicDiv[i].style["height"] = (viewHeight-100) + "px";
			getPicDiv[i].style["line-height"] = (viewHeight-100) + "px";
		}
	}
}


/****************
*函数名：scrollNav
*功能：单页目录滚动插件使用
****************/
function scrollNav() {
	$('#myContents').onePageNav(
		{
		    currentClass: 'current',
		    changeHash: false,
		    scrollSpeed: 500,
		    scrollThreshold: 0.5,
		    filter: '',
		    easing: 'swing',
		    begin: function() {
		    },
		    end: function() {
		    },
		    scrollChange: function($currentListItem) {
		    }
		}

	);
}
