
$(function() {

// ajax Url 参数设置区***************************
	// 提交时间区间
	commitTimeURL = "ASdataTrackHasData";

// **********************************************

	// 设置文字说明的高度和图片等高 - 初始化
	explainHeight();
	// 控制模态框图片的尺寸自适应窗口大小 - 初始化
	ctrlModalPicSise();
	//单页目录滚动插件使用
	scrollNav();
	// 时间控件调用
	operationTime();
	// 控制二级菜单
	myContent();
	// 分析结果区间选择后的总图点击
	getUrlToClick();

	// 提交时间区间
	submitTime(commitTimeURL);

	// 监听
    $(window).resize(function() {
    	// 设置文字说明的高度和图片等高
        explainHeight();
		// 控制模态框图片的尺寸自适应窗口大小
		ctrlModalPicSise();

    });



/**函数实现区****************************************************/

/***************
*函数名：explainHeight
*功能：设置文字说明的高度和图片等高
***************/
function explainHeight() {
	// 获取图片和文字所有节点
	var getPicEle =  $(".D-myImg");
	var getWordEle = $(".D-explain");

	// 遍历所有的节点
	for(var i=0; i<getPicEle.length; i++){
		// 把文字说明与图片等高
		// getWordEle[i].style["height"] = getPicEle[i].offsetHeight + "px";
		getWordEle.eq(i).css("height",getPicEle[i].offsetHeight+"px");
	}
}

/***********************
*函数名：
*功能：时间操作
***********************/
function operationTime(){

	$("#beginTime").bind("click",function(){
		WdatePicker();
	});

	$("#endTime").click(function(){
		WdatePicker();
	});
}



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
	$('.D-myContents').onePageNav(
		{
		    currentClass: 'current',
		    changeHash: false,
		    scrollSpeed: 500,
		    scrollThreshold: 0.4,
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

// 二级目录显示控制
function myContent(){
	var getMyLis = $(".D-firstContent");
	var getLis = $(".D-mySecondLi");
	getLis.css("display","none");

	for(var i in getMyLis){
		getMyLis.eq(i).click(function(){
			getLis.css("display","none");
			$(this).next().css("display","block");
		});
	}

}

/*********************
*函数：viewTypeTime
*功能：控制选择显示操作
*********************/
viewTypeTime();
function viewTypeTime(){
	
	// 获得一级目录数
	var getNumber = $(".D-firstContent").length;

	// 对每个btn进行操作
	for(var i = 1; i <= getNumber; i++){
		(
			function(i){
				$("#myFirstContent-"+i).click(function(){
				
					// 先隐藏所有的
					$("#myRightContent").children().css("display","none");
					
					// 把目标显示出来
					$("#myContent-"+i).css("display","block");

					if(i > 1){
						$("#remarkContainer").css("display","block");
						$("#remarkContent").children().css("display","none");
						$("#remark-"+i).css("display","block");
					}else{
						// 总图不显示备注
						$("#remarkContainer").css("display","none");
					}


				});
			}

		)(i)
	}
}

/************
*函数名：submitTime
*功能：提交时间并分析
*参数：
	commitTimeUrl
*************/
function submitTime(commitTimeUrl){

	$("#confirmAnaly").click(function(){
		// 获得时间
		var getBeginTime = $("#beginTime").val();
		var getEndTime = $("#endTime").val();

		if(getBeginTime == "" || getEndTime =="" || getBeginTime >= getEndTime){
			$.alert({
				icon: 'glyphicon glyphicon-exclamation-sign D-signColorRed',
			    title: '提示：',
			    confirmButton: '确定',
			    content: '时间区间选择有误。',
			    confirm: function(){
			    }
			});			
		}else{
			// ajax 提交
			param = "start="+getBeginTime+"&end="+getEndTime;
			
			$.get(commitTimeUrl,param,function(data){
				if(data.submitTimeOperation == true){
					window.location.href="ASdataTrack?start="+getBeginTime+"&end="+getEndTime+"&result=true";
				}else{
					$.alert({
						icon: 'glyphicon glyphicon-exclamation-sign D-signColorRed',
					    title: '提示：',
					    confirmButton: '确定',
					    content: '分析出错',
					    confirm: function(){
					    }
					});						
				}

			},"json");
		}

	});
}


/****************
*函数名：getUrlToClick
*功能：分析结果点击总图
****************/
function getUrlToClick(){
	operation();
}

// 判断是否为搜索结果
function operation(){
	var getParam = GetQueryString("result");
	if(getParam!=null && getParam.toString().length>1){
		$("#myFirstContent-1").click();
	}
}

// 获得参数值
function GetQueryString(name)
{
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}



}); // $(function(){})