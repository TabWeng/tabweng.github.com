
$(function(){

// 各个表格的页面初始化（全局变量）****************
	var userManagePage = 1;
	var analystManagePage = 1;
	var vipGatheringPage = 1;
	var analysisGatheringPage = 1;
	var returnMoneyPage = 1;
	var analysisApplyManagePage = 1;

// 各个表格总页数（全局变量）**********************
	var userManageTotalPage = 1;
	var analystManageTotalPage = 1;
	var vipGatheringTotalPage = 1;
	var analysisGatheringTotalPage = 1;
	var returnMoneyTotalPage = 1;
	var analysisApplyManageTotalPage = 1;


//*********************************************************************
//URL 赋值区
//*********************************************************************
//所以页面的加载（一开始加载和翻页）***************
	var ALLloadUrl = "admin_dataLoad";
//搜索按钮功能*************************************
	var ALLSearchUrl = "admin_serachByPhone";

//分析师管理页面***********************************
	// 取消资格的URL
	var ALLCancelAnalystUrl = "admin_cancleAnalst";
// 会员收款操作************************************
	//已付款的url
	var ALLVipHavePadUrl = "admin_verifyVipPay";
	//取消的url
	var ALLVipCancelUrl = "admin_cancleVipOrders";
// 专向分析收款操作********************************
	// 已付款的url
	var ALLanalysisHavePadUrl = "admin_verifySpecialOrdersPay";
	//取消的url
	var ALLanalysisCancelUrl = "admin_cancleSpecialOrders";
// 回款分析师操作**********************************
	var ALLreturnMoneyOperatonUrl = "admin_verifyPayAnalyst";
// 分析师申请操作
	// 通过
	var ALLApplyPassUrl = "admin_approveAnalystApply";
	//不通过
	var ALLApplyNoPassUrl = "admin_disapproveAnalystApply";
// 系统管理页面
	//平台费调控
		//加载到前端的Url
		var ALLSystemProfitLoadUrl = "system_loadSystemInfo";
		// 保存到数据库的Url
		var ALLSaveProfitCtrlUrl = "system_settingSystemInfo";
	//系统统计
	var ALLSystemUrl = "admin_systemCount";
//*********************************************************************


// 第一次加载的ajax请求****************************
	var firstLoadParm = "page=1&type=all&timeStamp=" + new Date().getTime();
	myAdminAjax(ALLloadUrl,firstLoadParm,"ALL");

// 翻页********************************************
	pageUpAndDown(ALLloadUrl);

// 刷新按钮****************************************
	refreshBtn(ALLloadUrl);

// 搜索按钮****************************************
	searchBtn(ALLSearchUrl);

// 取消资格****************************************
	cancelQualification(ALLCancelAnalystUrl,ALLloadUrl);

// 会员收款操作
	vipGatheringOperation(ALLVipHavePadUrl,ALLVipCancelUrl,ALLloadUrl);

// 专向分析收款操作
	analysisGatheringOperation(ALLanalysisHavePadUrl,ALLanalysisCancelUrl,ALLloadUrl);

// 回款分析师操作
	returnMoneyOperation(ALLreturnMoneyOperatonUrl,ALLloadUrl);

// 分析师申请审核操作
	analysisApplyOperation(ALLApplyPassUrl,ALLApplyNoPassUrl,ALLloadUrl);

// 系统管理页面
	//平台费调控
	ctrlSystemProfit(ALLSystemProfitLoadUrl,ALLSaveProfitCtrlUrl);
	//系统统计
	SystemStatisticsLoad(ALLSystemUrl);

// 下面为封装的函数*****************************************************************

/**************
*函数名：myAdminAjax
*功能：页面加载，分页等
*参数：
	requestParam 传给后端的参数
	pageType 请求加载的类型，是某个表格还是全部表格，参数如下：
		所有页面：ALL
		用户管理：userManage
		分析师管理：analystManage
		会员付款：vipGathering
		专向分析付款：analysisGathering
		回款分析师：returnMoney
		分析师申请管理：analysisApplyManage
**************/

function myAdminAjax(url, requestParam, pageType){

	switch (pageType){
		case "userManage":
			userManageAjax(url,requestParam);
			break;
		case "analystManage":
			analystManageAjax(url,requestParam);
			break;
		case "vipGathering":
			vipGatheringAjax(url,requestParam);
			break;
		case "analysisGathering":
			analysisGatheringAjax(url,requestParam);
			break;
		case "returnMoney":
			returnMoneyAjax(url,requestParam);
			break;
		case "analysisApplyManage":
			analysisApplyManageAjax(url,requestParam);
			break;
		case "ALL":
			userManageAjax(url,requestParam);
			analystManageAjax(url,requestParam);
			vipGatheringAjax(url,requestParam);
			analysisGatheringAjax(url,requestParam);
			returnMoneyAjax(url,requestParam);
			analysisApplyManageAjax(url,requestParam);
			break;
		default:
				$.alert({
					icon: 'glyphicon glyphicon-exclamation-sign D-signColorRed',
				    title: '提示：',
				    confirmButton: '确定',
				    content: 'Ajax传参出错！',
				    confirm: function(){
				    }
				});
	}
}


/*************************
*函数名：pageUpAndDown
*功能：翻页
*参数：url：向后台请求地址
**************************/

function pageUpAndDown(url){
	// 用户管理分页
	$("#userManageUp").click(function(){
		if(userManagePage > 1){
			userManagePage--;
			requestParam = "page="+userManagePage+"&type=userManage&timeStamp=" + new Date().getTime();
			myAdminAjax(url, requestParam, "userManage");
		}
	});
	$("#userManageDown").click(function(){
		if(userManagePage < userManageTotalPage){
			userManagePage++;
			requestParam = "page="+userManagePage+"&type=userManage&timeStamp=" + new Date().getTime();
			myAdminAjax(url, requestParam, "userManage");
		}

	});

	// 分析师管理分页
	$("#analystManageUp").click(function(){
		if(analystManagePage > 1){
			analystManagePage--;
			requestParam = "page="+analystManagePage+"&type=analystManage&timeStamp=" + new Date().getTime();
			myAdminAjax(url, requestParam, "analystManage");
		}
	});
	$("#analystManageDown").click(function(){
		if(analystManagePage < analystManageTotalPage){
			analystManagePage++;
			requestParam = "page="+analystManagePage+"&type=analystManage&timeStamp=" + new Date().getTime();
			myAdminAjax(url, requestParam, "analystManage");
		}
	});

	//会员收款
	$("#vipGatheringUp").click(function(){
		if(vipGatheringPage > 1){
			vipGatheringPage--;
			requestParam = "page="+vipGatheringPage+"&type=vipGathering&timeStamp=" + new Date().getTime();
			myAdminAjax(url, requestParam, "vipGathering");
		}
	});
	$("#vipGatheringDown").click(function(){
		if(vipGatheringPage < vipGatheringTotalPage){
			vipGatheringPage++;
			requestParam = "page="+vipGatheringPage+"&type=vipGathering&timeStamp=" + new Date().getTime();
			myAdminAjax(url, requestParam, "vipGathering");
		}
	});

	//专向分析付款
	$("#analysisGatheringUp").click(function(){
		if(analysisGatheringPage > 1){
			analysisGatheringPage--;
			requestParam = "page="+analysisGatheringPage+"&type=analysisGathering&timeStamp=" + new Date().getTime();
			myAdminAjax(url, requestParam, "analysisGathering");
		}
	});
	$("#analysisGatheringUp").click(function(){
		if(analysisGatheringPage < analysisGatheringTotalPage){
			analysisGatheringPage++;
			requestParam = "page="+analysisGatheringPage+"&type=analysisGathering&timeStamp=" + new Date().getTime();
			myAdminAjax(url, requestParam, "analysisGathering");
		}
	});

	// 回款分析师
	$("#returnMoneyUp").click(function(){
		if(returnMoneyPage > 1){
			returnMoneyPage--;
			requestParam = "page="+returnMoneyPage+"&type=returnMoney&timeStamp=" + new Date().getTime();
			myAdminAjax(url, requestParam, "returnMoney");
		}
	});
	$("#returnMoneyDown").click(function(){
		if(returnMoneyPage < returnMoneyTotalPage){
			returnMoneyPage++;
			requestParam = "page="+returnMoneyPage+"&type=returnMoney&timeStamp=" + new Date().getTime();
			myAdminAjax(url, requestParam, "returnMoney");
		}
	});

	// 分析师申请管理
	$("#analysisApplyManageUp").click(function(){
		if(analysisApplyManagePage > 1){
			analysisApplyManagePage--;
			requestParam = "page="+analysisApplyManagePage+"&type=analysisApplyManage&timeStamp=" + new Date().getTime();
			myAdminAjax(url, requestParam, "analysisApplyManage");
		}
	});
	$("#analysisApplyManageDown").click(function(){
		if(analysisApplyManagePage < analysisApplyManageTotalPage){
			analysisApplyManagePage++;
			requestParam = "page="+analysisApplyManagePage+"&type=analysisApplyManage&timeStamp=" + new Date().getTime();
			myAdminAjax(url, requestParam, "analysisApplyManage");
		}
	});
}

/*****************
*函数名：searchBtn
*功能：搜索按钮
*参数
	url 向后端请求的地址
*****************/
function searchBtn(url){
	// 用户管理搜索
	$("#searchUserBtn").click(function(){
		var getPhone = $("#searchUser")[0].value;
		if(getPhone == ""){
			$.alert({
					icon: 'glyphicon glyphicon-exclamation-sign D-signColorRed',
				    title: '提示：',
				    confirmButton: '确定',
				    content: '请输入手机号码进行搜索！',
				    confirm: function(){
				    }
				});
		}else{
			// 获取搜索值并拼装成参数传给后端
			var getUserPhone = "phone="+getPhone+"&type=userManage&timeStamp=" + new Date().getTime();
			$.get(url,getUserPhone,function(data){
				if(data.userManage.list.length != 0){
					disposeTableToUserManage(data);
					PageTureHiddenOrView("hidden", "userManage");
				}else{
					$.alert({
							icon: 'glyphicon glyphicon-exclamation-sign D-signColorRed',
						    title: '提示：',
						    confirmButton: '确定',
						    content: '搜索结果不存在！',
						    confirm: function(){
						    }
						});
				}
			},"json");
		}
	});

	// 分析师管理搜索
	$("#searchAnalystBtn").click(function(){
		var getPhone = $("#searchAnalyst")[0].value;
		if(getPhone == ""){
			$.alert({
					icon: 'glyphicon glyphicon-exclamation-sign D-signColorRed',
				    title: '提示：',
				    confirmButton: '确定',
				    content: '请输入手机号码进行搜索！',
				    confirm: function(){
				    }
				});
		}else{
			var getAnalystPhone = "phone="+getPhone+"&type=analystManage&timeStamp=" + new Date().getTime();
			$.get(url,getAnalystPhone,function(data){
				if(data.analystManage.list.length != 0){
					disposeTableToAnalystManage(data);
					cancelQualificationSmall(ALLCancelAnalystUrl);
					PageTureHiddenOrView("hidden", "analystManage");
				}else{
					$.alert({
							icon: 'glyphicon glyphicon-exclamation-sign D-signColorRed',
						    title: '提示：',
						    confirmButton: '确定',
						    content: '搜索结果不存在！',
						    confirm: function(){
						    }
						});
				}
			},"json");
		}
	});

	// 会员收款搜索
	$("#searchVipGatheringBtn").click(function(){

		var getPhone = $("#searchVipPay")[0].value;
		if(getPhone == ""){
			$.alert({
					icon: 'glyphicon glyphicon-exclamation-sign D-signColorRed',
				    title: '提示：',
				    confirmButton: '确定',
				    content: '请输入手机号码进行搜索！',
				    confirm: function(){
				    }
				});
		}else{
			var getVipGatheringPhone = "phone="+ getPhone +"&type=vipGathering&timeStamp=" + new Date().getTime();
			$.get(url,getVipGatheringPhone,function(data){
				if(data.vipGathering.list.length != 0){
					disposeTableToVipGathering(data);
					vipGatheringOperationSmall(ALLVipHavePadUrl,ALLVipCancelUrl);
					PageTureHiddenOrView("hidden", "vipGathering");
				}else{
					$.alert({
							icon: 'glyphicon glyphicon-exclamation-sign D-signColorRed',
						    title: '提示：',
						    confirmButton: '确定',
						    content: '搜索结果不存在！',
						    confirm: function(){
						    }
						});
				}
			},"json");
		}

	});

	// 专向分析收款搜索
	$("#searchAnalysisGatheringBtn").click(function(){

		var getPhone = $("#searchPay")[0].value;
		if(getPhone == ""){
			$.alert({
					icon: 'glyphicon glyphicon-exclamation-sign D-signColorRed',
				    title: '提示：',
				    confirmButton: '确定',
				    content: '请输入手机号码进行搜索！',
				    confirm: function(){
				    }
				});
		}else{
			var getAnalysisGatheringPhone = "phone="+getPhone+"&type=analysisGathering&timeStamp=" + new Date().getTime();
			$.get(url,getAnalysisGatheringPhone,function(data){
				if(data.analysisGathering.list.length != 0){
					disposeTableToAnalysisGathering(data);
					analysisGatheringOperationSmall(ALLanalysisHavePadUrl,ALLanalysisCancelUrl);
					PageTureHiddenOrView("hidden", "analysisGathering");
				}else{
					$.alert({
							icon: 'glyphicon glyphicon-exclamation-sign D-signColorRed',
						    title: '提示：',
						    confirmButton: '确定',
						    content: '搜索结果不存在！',
						    confirm: function(){
						    }
						});
				}
			},"json");
		}

	});

	// 分析师回款搜索
	$("#searchReturnMoneyBtn").click(function(){

		var getPhone = $("#searchReturnPay")[0].value;
		if(getPhone == ""){
			$.alert({
					icon: 'glyphicon glyphicon-exclamation-sign D-signColorRed',
				    title: '提示：',
				    confirmButton: '确定',
				    content: '请输入手机号码进行搜索！',
				    confirm: function(){
				    }
				});
		}else{
			var getReturnMoneyPhone = "phone="+getPhone+"&type=returnMoney&timeStamp=" + new Date().getTime();
			$.get(url,getReturnMoneyPhone,function(data){
				if(data.returnMoney.list.length != 0){
					disposeTableToReturnMoney(data);
					returnMoneyOperationSmall(ALLreturnMoneyOperatonUrl);
					PageTureHiddenOrView("hidden", "returnMoney");
				}else{
					$.alert({
							icon: 'glyphicon glyphicon-exclamation-sign D-signColorRed',
						    title: '提示：',
						    confirmButton: '确定',
						    content: '搜索结果不存在！',
						    confirm: function(){
						    }
						});
				}
			},"json");
		}
	});

}

/*************************
*函数名：limitInputSearch
*功能：防止用户输入非数字字符
*参数：
	limitEleId 要控制的节点的 id
*************************/
function limitInputSearch(limitEleId){
	var getEle = $("#"+limitEleId);
	getEle.attr("onkeyup","this.value=this.value.replace(/[^\\d]/g,'')");
	getEle.attr("onafterpaste","this.value=this.value.replace(/[^\\d]/g,'')");
}
limitInputSearch("searchUser");
limitInputSearch("searchAnalyst");
limitInputSearch("searchVipPay");
limitInputSearch("searchPay");
limitInputSearch("searchReturnPay");


/*************************
*函数名：refreshBtn
*功能：刷新按钮
*参数
	url 向后端请求的地址
*ajax 传给后端的参数举例：
	page=1&type=userManage
**************************/
function refreshBtn(url){
	$("#viewAlluserManageRow").click(function(){
		userManageAjax(url,"page=1&type=userManage&timeStamp=" + new Date().getTime());
		PageTureHiddenOrView("view", "userManage");
	});
	$("#viewAllanalystManageRow").click(function(){
		analystManageAjax(url,"page=1&type=analystManage&timeStamp=" + new Date().getTime());
		PageTureHiddenOrView("view", "analystManage");
	});
	$("#viewAllvipGatheringRow").click(function(){
		vipGatheringAjax(url,"page=1&type=vipGathering&timeStamp=" + new Date().getTime());
		PageTureHiddenOrView("view", "vipGathering");
	});
	$("#viewAllanalysisGatheringRow").click(function(){
		analysisGatheringAjax(url,"page=1&type=analysisGathering&timeStamp=" + new Date().getTime());
		PageTureHiddenOrView("view", "analysisGathering");
	});
	$("#viewAllreturnMoneyRow").click(function(){
		returnMoneyAjax(url,"page=1&type=returnMoney&timeStamp=" + new Date().getTime());
		PageTureHiddenOrView("view", "returnMoney");
	});
}

/****************************
*函数名：cancelQualification
*功能：取消资格，删除取消资格的行，同时重新加载表格
*参数：
	cancelUrl 取消资格要发送的后端url地址
	LoadUrl 取消资格操作完成后重新加载表格的url地址（与翻页相同）
*ajax传给后端的参数举例：
	analystId=9999999
*****************************/
function cancelQualification(cancelUrl,LoadUrl){
	$(".D-cancelQualification").click(function(){
		// 获取此行
		var thisRow = $(this).parent().parent();
		// 获得取消资格的UID
		var cancelUID = "analystId="+ thisRow.children().eq(0).html();

		$.confirm({
	      icon: 'glyphicon glyphicon-exclamation-sign D-signColor',
	      title: '',
	      content: '确认取消UID为 '+thisRow.children().eq(0).html()+' 分析师的资格？',
	      confirmButton: '确定',
	      cancelButton: '取消',
	      confirmButtonClass: 'D-confirm',
	      cancelButtonClass: 'D-confirm',
	      confirm: function(){
			$.get(cancelUrl,cancelUID,function(data){
				if(data.cancelAnalyst == true){
					// 删除此行
					// thisRow.remove();
					var myRequestParam = "page="+analystManagePage+"&type=analystManage&timeStamp=" + new Date().getTime();
					// 重新加载本页面
					myAdminAjax(LoadUrl, myRequestParam, "analystManage");

				}else{
					$.alert({
						icon: 'glyphicon glyphicon-exclamation-sign D-signColorRed',
					    title: '提示：',
					    confirmButton: '确定',
					    content: '无法取消，请稍后重试！',
					    confirm: function(){
					    }
					});
				}

			},"json");
	      }
	    });

	});
}

// 取消资格副产品
function cancelQualificationSmall(cancelUrl){
	$(".D-cancelQualification").click(function(){
		// 获取此行
		var thisRow = $(this).parent().parent();
		// 获得取消资格的UID
		var cancelUID = "analystId="+ thisRow.children().eq(0).html();

		$.confirm({
	      icon: 'glyphicon glyphicon-exclamation-sign D-signColor',
	      title: '',
	      content: '确认取消UID为 '+thisRow.children().eq(0).html()+' 分析师的资格？',
	      confirmButton: '确定',
	      cancelButton: '取消',
	      confirmButtonClass: 'D-confirm',
	      cancelButtonClass: 'D-confirm',
	      confirm: function(){
			$.get(cancelUrl,cancelUID,function(data){
				if(data.cancelAnalyst == true){
					// 删除此行
					thisRow.remove();
					var myRequestParam = "page="+analystManagePage+"&type=analystManage&timeStamp=" + new Date().getTime();
				}else{
					$.alert({
						icon: 'glyphicon glyphicon-exclamation-sign D-signColorRed',
					    title: '提示：',
					    confirmButton: '确定',
					    content: '无法取消，请稍后重试！',
					    confirm: function(){
					    }
					});
				}

			},"json");
	      }
	    });

	});
}


/**********************
*函数名：vipGatheringOperation
*功能：会员收款页面操作-已收款，取消
*参数：
	havePadUrl 已付款的url
	cancelUrl 删除的url
	loadUrl 加载的url
**********************/
function vipGatheringOperation(havePadUrl,cancelUrl,loadUrl){
	// 已付款操作
	$(".D-VipHavePadOperation").click(function(){

		var getId = "vipOrderId="+$(this).parent().prev().html();

	    $.confirm({
	      icon: 'glyphicon glyphicon-exclamation-sign D-signColor',
	      title: '',
	      content: '确认已付款？',
	      confirmButton: '确定',
	      cancelButton: '取消',
	      confirmButtonClass: 'D-confirm',
	      cancelButtonClass: 'D-confirm',
	      confirm: function(){
			$.get(havePadUrl,getId,function(data){
				if(data.VipHavePadOperation == true){
					var myRequestParam = "page="+vipGatheringPage+"&type=vipGathering&timeStamp=" + new Date().getTime();
					myAdminAjax(loadUrl, myRequestParam, "vipGathering");
				}else{
					$.alert({
						icon: 'glyphicon glyphicon-exclamation-sign D-signColorRed',
					    title: '提示：',
					    confirmButton: '确定',
					    content: '无法取消，请稍后重试！',
					    confirm: function(){
					    }
					});
				}
			},"json");
	      }
	    });
	});
	// 删除操作
	$(".D-VipCancelOperation").click(function(){

		var getId = "vipOrderId="+$(this).parent().prev().html();

		$.confirm({
	      icon: 'glyphicon glyphicon-exclamation-sign D-signColor',
	      title: '',
	      content: '确认删除？',
	      confirmButton: '确定',
	      cancelButton: '取消',
	      confirmButtonClass: 'D-confirm',
	      cancelButtonClass: 'D-confirm',
	      confirm: function(){
			$.get(cancelUrl, getId, function(data){
				if(data.VipCancelOperation == true){
					var myRequestParam = "page="+vipGatheringPage+"&type=vipGathering&timeStamp=" + new Date().getTime();
					myAdminAjax(loadUrl, myRequestParam, "vipGathering");
				}else{
					$.alert({
						icon: 'glyphicon glyphicon-exclamation-sign D-signColorRed',
					    title: '提示：',
					    confirmButton: '确定',
					    content: '无法取消，请稍后重试！',
					    confirm: function(){
					    }
					});
				}
			},"json");
	      }
	    });
	});
}

//副产品
function vipGatheringOperationSmall(havePadUrl,cancelUrl){
	// 已付款操作
	$(".D-VipHavePadOperation").click(function(){
		// 获取此行
		var thisRow = $(this).parent().parent();
		var getId = "vipOrderId="+$(this).parent().prev().html();

	    $.confirm({
	      icon: 'glyphicon glyphicon-exclamation-sign D-signColor',
	      title: '',
	      content: '确认已付款？',
	      confirmButton: '确定',
	      cancelButton: '取消',
	      confirmButtonClass: 'D-confirm',
	      cancelButtonClass: 'D-confirm',
	      confirm: function(){
			$.get(havePadUrl,getId,function(data){
				if(data.VipHavePadOperation == true){
					thisRow.remove();
				}else{
					$.alert({
						icon: 'glyphicon glyphicon-exclamation-sign D-signColorRed',
					    title: '提示：',
					    confirmButton: '确定',
					    content: '无法取消，请稍后重试！',
					    confirm: function(){
					    }
					});
				}
			},"json");
	      }
	    });
	});
	// 删除操作
	$(".D-VipCancelOperation").click(function(){
		// 获取此行
		var thisRow = $(this).parent().parent();

		var getId = "vipOrderId="+$(this).parent().prev().html();

		$.confirm({
	      icon: 'glyphicon glyphicon-exclamation-sign D-signColor',
	      title: '',
	      content: '确认删除？',
	      confirmButton: '确定',
	      cancelButton: '取消',
	      confirmButtonClass: 'D-confirm',
	      cancelButtonClass: 'D-confirm',
	      confirm: function(){
			$.get(cancelUrl, getId, function(data){
				if(data.VipCancelOperation == true){
					thisRow.remove();
				}else{
					$.alert({
						icon: 'glyphicon glyphicon-exclamation-sign D-signColorRed',
					    title: '提示：',
					    confirmButton: '确定',
					    content: '无法取消，请稍后重试！',
					    confirm: function(){
					    }
					});
				}
			},"json");
	      }
	    });
	});
}

/***************************
*函数名：analysisGatheringOperation
*功能：专向分析收款操作 - 已付款，取消
*参数：
	havePadUrl 已付款的url
	cancelUrl 删除的url
	loadUrl 加载的url
***************************/
function analysisGatheringOperation(havePadUrl,cancelUrl,loadUrl){
	$(".D-analysisHavePadOperation").click(function(){

		var getId = "specialOrderId="+$(this).parent().prev().html();

	    $.confirm({
	      icon: 'glyphicon glyphicon-exclamation-sign D-signColor',
	      title: '',
	      content: '确认已付款？',
	      confirmButton: '确定',
	      cancelButton: '取消',
	      confirmButtonClass: 'D-confirm',
	      cancelButtonClass: 'D-confirm',
	      confirm: function(){
			$.get(havePadUrl,getId,function(data){
				if(data.analysisHavePadOperation == true){
					var myRequestParam = "page="+analysisGatheringPage+"&type=analysisGathering&timeStamp=" + new Date().getTime();
					myAdminAjax(loadUrl, myRequestParam, "analysisGathering");
				}else{
					$.alert({
						icon: 'glyphicon glyphicon-exclamation-sign D-signColorRed',
					    title: '提示：',
					    confirmButton: '确定',
					    content: '无法取消，请稍后重试！',
					    confirm: function(){
					    }
					});
				}
			},"json");
	      }
	    });

	});

	$(".D-analysisCancelOperation").click(function(){

		var getId = "specialOrderId="+$(this).parent().prev().html();

	    $.confirm({
	      icon: 'glyphicon glyphicon-exclamation-sign D-signColor',
	      title: '',
	      content: '确认删除？',
	      confirmButton: '确定',
	      cancelButton: '取消',
	      confirmButtonClass: 'D-confirm',
	      cancelButtonClass: 'D-confirm',
	      confirm: function(){
			$.get(cancelUrl,getId,function(data){
				if(data.analysisCancelOperation == true){
					var myRequestParam = "page="+analysisGatheringPage+"&type=analysisGathering&timeStamp=" + new Date().getTime();
					myAdminAjax(loadUrl, myRequestParam, "analysisGathering");
				}else{
					$.alert({
						icon: 'glyphicon glyphicon-exclamation-sign D-signColorRed',
					    title: '提示：',
					    confirmButton: '确定',
					    content: '无法取消，请稍后重试！',
					    confirm: function(){
					    }
					});
				}
			},"json");
	      }
	    });

	});
}

//副产品
function analysisGatheringOperationSmall(havePadUrl,cancelUrl){
	$(".D-analysisHavePadOperation").click(function(){
		// 获取此行
		var thisRow = $(this).parent().parent();
		var getId = "specialOrderId="+$(this).parent().prev().html();

	    $.confirm({
	      icon: 'glyphicon glyphicon-exclamation-sign D-signColor',
	      title: '',
	      content: '确认已付款？',
	      confirmButton: '确定',
	      cancelButton: '取消',
	      confirmButtonClass: 'D-confirm',
	      cancelButtonClass: 'D-confirm',
	      confirm: function(){
			$.get(havePadUrl,getId,function(data){
				if(data.analysisHavePadOperation == true){
					thisRow.remove();
				}else{
					$.alert({
						icon: 'glyphicon glyphicon-exclamation-sign D-signColorRed',
					    title: '提示：',
					    confirmButton: '确定',
					    content: '无法取消，请稍后重试！',
					    confirm: function(){
					    }
					});
				}
			},"json");
	      }
	    });

	});

	$(".D-analysisCancelOperation").click(function(){
		// 获取此行
		var thisRow = $(this).parent().parent();
		var getId = "specialOrderId="+$(this).parent().prev().html();

	    $.confirm({
	      icon: 'glyphicon glyphicon-exclamation-sign D-signColor',
	      title: '',
	      content: '确认删除？',
	      confirmButton: '确定',
	      cancelButton: '取消',
	      confirmButtonClass: 'D-confirm',
	      cancelButtonClass: 'D-confirm',
	      confirm: function(){
			$.get(cancelUrl,getId,function(data){
				if(data.analysisCancelOperation == true){
					thisRow.remove();
				}else{
					$.alert({
						icon: 'glyphicon glyphicon-exclamation-sign D-signColorRed',
					    title: '提示：',
					    confirmButton: '确定',
					    content: '无法取消，请稍后重试！',
					    confirm: function(){
					    }
					});
				}
			},"json");
	      }
	    });

	});
}

/********************************
*函数名：returnMoneyOperation
*功能：回款给分析师的 完成回款 操作
*参数：
	feekBackUrl 完成回款的url
	loadUrl 加载的url
********************************/
function returnMoneyOperation(feekBackUrl,loadUrl){
	$(".D-returnMoneyOperation").click(function(){

		var getId = "specialOrderId="+$(this).parent().prev().html();

	    $.confirm({
	      icon: 'glyphicon glyphicon-exclamation-sign D-signColor',
	      title: '',
	      content: '确认回款？',
	      confirmButton: '确定',
	      cancelButton: '取消',
	      confirmButtonClass: 'D-confirm',
	      cancelButtonClass: 'D-confirm',
	      confirm: function(){
			$.get(feekBackUrl,getId,function(data){
				if(data.returnMoneyOperation == true){
					var myRequestParam = "page="+returnMoneyPage+"&type=returnMoney&timeStamp=" + new Date().getTime();
					myAdminAjax(loadUrl, myRequestParam, "returnMoney");
				}else{
					$.alert({
						icon: 'glyphicon glyphicon-exclamation-sign D-signColorRed',
					    title: '提示：',
					    confirmButton: '确定',
					    content: '无法取消，请稍后重试！',
					    confirm: function(){
					    }
					});
				}
			},"json");
	      }
	    });

	});
}

//副产品
function returnMoneyOperationSmall(feekBackUrl){
	$(".D-returnMoneyOperation").click(function(){
		// 获取此行
		var thisRow = $(this).parent().parent();
		var getId = "specialOrderId="+$(this).parent().prev().html();

	    $.confirm({
	      icon: 'glyphicon glyphicon-exclamation-sign D-signColor',
	      title: '',
	      content: '确认回款？',
	      confirmButton: '确定',
	      cancelButton: '取消',
	      confirmButtonClass: 'D-confirm',
	      cancelButtonClass: 'D-confirm',
	      confirm: function(){
			$.get(feekBackUrl,getId,function(data){
				if(data.returnMoneyOperation == true){
					thisRow.remove();
				}else{
					$.alert({
						icon: 'glyphicon glyphicon-exclamation-sign D-signColorRed',
					    title: '提示：',
					    confirmButton: '确定',
					    content: '无法取消，请稍后重试！',
					    confirm: function(){
					    }
					});
				}
			},"json");
	      }
	    });

	});
}

/*********************************
*函数名：analysisApplyOperation
*功能：分析师申请管理操作 - 通过，不通过
*参数：
	passUrl 通过的url
	noPassUrl 不通过的url
	load Url 加载的url
*********************************/
function analysisApplyOperation(passUrl,noPassUrl,loadUrl){
	// 通过
	$(".D-ApplyPassOperation").click(function(){

		var getId = "applyAnalystId="+$(this).parent().parent().children().eq(0).html();

	    $.confirm({
	      icon: 'glyphicon glyphicon-exclamation-sign D-signColor',
	      title: '',
	      content: '确认审核通过？',
	      confirmButton: '确定',
	      cancelButton: '取消',
	      confirmButtonClass: 'D-confirm',
	      cancelButtonClass: 'D-confirm',
	      confirm: function(){
			$.get(passUrl,getId,function(data){
				if(data.ApplyPassOperation == true){
					var myRequestParam = "page="+analysisApplyManagePage+"&type=analysisApplyManage&timeStamp=" + new Date().getTime();
					myAdminAjax(loadUrl, myRequestParam, "analysisApplyManage");
				}else{
					$.alert({
						icon: 'glyphicon glyphicon-exclamation-sign D-signColorRed',
					    title: '提示：',
					    confirmButton: '确定',
					    content: '无法取消，请稍后重试！',
					    confirm: function(){
					    }
					});
				}
			},"json");
	      }
	    });

	});

	$(".D-ApplyNoPassOperation").click(function(){

		var getId = "applyAnalystId="+$(this).parent().parent().children().eq(0).html();

	    $.confirm({
	      icon: 'glyphicon glyphicon-exclamation-sign D-signColor',
	      title: '',
	      content: '确认审核不通过？',
	      confirmButton: '确定',
	      cancelButton: '取消',
	      confirmButtonClass: 'D-confirm',
	      cancelButtonClass: 'D-confirm',
	      confirm: function(){
			$.get(noPassUrl,getId,function(data){
				if(data.ApplyNoPassOperation == true){
					var myRequestParam = "page="+analysisApplyManagePage+"&type=analysisApplyManage&timeStamp=" + new Date().getTime();
					myAdminAjax(loadUrl, myRequestParam, "analysisApplyManage");
				}else{
					$.alert({
						icon: 'glyphicon glyphicon-exclamation-sign D-signColorRed',
					    title: '提示：',
					    confirmButton: '确定',
					    content: '无法取消，请稍后重试！',
					    confirm: function(){
					    }
					});
				}
			},"json");
	      }
	    });

	});
}


/***********************************
*函数名：ctrlSystemProfit
*功能：平台费调控
*参数：
	ctrlProfitUrl 传给后端的用于加载的Url
	saveSystemUrl 传给后端的用于保存的Url
************************************/
function ctrlSystemProfit(SystemLoadUrl,saveSystemUrl){
	ctrlSystemProfitLoadData(SystemLoadUrl);

	ctrlInputLimit("inputPercentSome");
	ctrlInputLimit("inputPercentAll");

	$("#confirmChange").click(function(){

		var getPartEleValue = $("#inputPercentSome")[0].value;
		var getFullEleValue = $("#inputPercentAll")[0].value;

		if(getPartEleValue == "" || getFullEleValue == ""){
			$.alert({
				icon: 'glyphicon glyphicon-exclamation-sign D-signColorRed',
			    title: '提示：',
			    confirmButton: '确定',
			    content: '请输入调控值再确定！',
			    confirm: function(){
			    }
			});
		}else{
		    $.confirm({
		      icon: 'glyphicon glyphicon-exclamation-sign D-signColor',
		      title: '',
		      content: '确定按此平台费调控？',
		      confirmButton: '确定',
		      cancelButton: '取消',
		      confirmButtonClass: 'D-confirm',
		      cancelButtonClass: 'D-confirm',
		      confirm: function(){
				var getPart = "partTime="+$("#inputPercentSome")[0].value / 100;
			 	var getFull = "fullTime="+$("#inputPercentAll")[0].value / 100;
			 	$.get(saveSystemUrl,getPart+"&"+getFull,function(data){
			 		if(data.SystemCtrl == false){
						$.alert({
							icon: 'glyphicon glyphicon-exclamation-sign D-signColorRed',
						    title: '提示：',
						    confirmButton: '确定',
						    content: '操作失败，请稍后重试！',
						    confirm: function(){
						    }
						});
			 			ctrlSystemProfitLoadData(SystemLoadUrl);
			 		}
			 	},"json");
		      }
		    });
		}

	});
}

// 加载
function ctrlSystemProfitLoadData(SystemLoadUrl){
	$.get(SystemLoadUrl,function(data){
		$("#inputPercentSome")[0].value = data.systemInfo.partTime * 100;
		$("#inputPercentAll")[0].value = data.systemInfo.fullTime * 100;
	},"json");
}

// 平台费 限制输入
function ctrlInputLimit(IDelement){

	$("#"+IDelement).bind('input propertychange',function(){
		var floatNum = /^[+-]?([0-9]*\.?[0-9]+|[0-9]+\.?[0-9]*)([eE][+-]?[0-9]+)?$/i;
		if(floatNum.test(this.value) == false && this.value != ""){
			this.value = "";
			$.alert({
				icon: 'glyphicon glyphicon-exclamation-sign D-signColorRed',
			    title: '提示：',
			    confirmButton: '确定',
			    content: '请输入合法数字！',
			    confirm: function(){
			    }
			});
		}

		if(this.value > 100){
			this.value = '';
				$.alert({
					icon: 'glyphicon glyphicon-exclamation-sign D-signColorRed',
				    title: '提示：',
				    confirmButton: '确定',
				    content: '请输入100以内的数字！',
				    confirm: function(){
				    }
				});
		}

	});
}

/*************************
*函数名：SystemStatisticsLoad
*功能：系统统计加载
*参数：
	SystemUrl 后端url
*************************/
function SystemStatisticsLoad(SystemUrl){
	systemManageAjax(SystemUrl);
	$("#SystemStatisticsBtn").click(function(){
		systemManageAjax(SystemUrl);
	});
}


// 子函数实现区*******************************************************************

/************************************
*函数名：dealWithDate
*功能：处理时间，去掉T
*参数：
	dateTime 要处理的时间字符串
*返回：
	newDateTime 处理完成的时间字符串
************************************/
function dealWithDate(dateTime){
	var pattern = /T/ig;
	return dateTime.replace(pattern," ");
}


//各个表格加载函数实现区**********

// 用户管理
function userManageAjax(url,requestParam){

	$.get(url,requestParam,function(data){
		disposeTableToUserManage(data);
	},"json");
}

// 用户管理表格处理
function disposeTableToUserManage(data){
	// 先清空列表
	$("#UserTable tbody").remove();
	// 添加tbody节点
	$("#UserTable thead").after("<tbody></tbody>");
	// 添加用户管理表格内容*******************
	for(var i in data.userManage.list){
		$("#UserTable tbody").append("<tr><td>"+data.userManage.list[i].id
			+"</td><td>"+data.userManage.list[i].username
			+"</td><td>"+data.userManage.list[i].realName
			+"</td><td>"+data.userManage.list[i].phone
			+"</td><td>"+data.userManage.list[i].email
			+"</td><td>"+dealWithDate(data.userManage.list[i].vipDeadline)
			+"</td></tr>"
			);
	}
	// 获取总页数
	userManageTotalPage = data.userManage.totalPage;
}


// 分析师管理
function analystManageAjax(url,requestParam){

	$.get(url,requestParam,function(data){
		disposeTableToAnalystManage(data);
		// 取消资格操作，递归调用
		cancelQualification(ALLCancelAnalystUrl,url);
	},"json");
}

// 分析师管理表格处理
function disposeTableToAnalystManage(data){
	// 先清空列表
	$("#analystManage tbody").remove();
	// 添加tbody节点
	$("#analystManage thead").after("<tbody></tbody>");
	// 添加分析师管理表格内容*****************
	for(var i in data.analystManage.list){
		// 转化：1为全职，0为兼职
		var typeEmployee;
		if(data.analystManage.list[i].isEmployee == 1){
			typeEmployee = "全职";
		}else if(data.analystManage.list[i].isEmployee == 0){
			typeEmployee = "兼职";
		}

		$("#analystManage tbody").append("<tr><td>"+data.analystManage.list[i].id
			+"</td><td>"+data.analystManage.list[i].username
			+"</td><td>"+data.analystManage.list[i].realName
			+"</td><td>"+data.analystManage.list[i].phone
			+"</td><td>"+data.analystManage.list[i].alipayAccount
			+"</td><td>"+data.analystManage.list[i].analistOrders
			+"</td><td>"+data.analystManage.list[i].analistStarAverage
			+"</td><td>"+typeEmployee
			+"</td><td><a class='D-cancelQualification D-cancelAnalizeBtn button button-caution button-rounded'>取消资格</a></td></tr>"
			);
	}
	analystManageTotalPage = data.analystManage.totalPage;
}

// 会员付款
function vipGatheringAjax(url,requestParam){

	$.get(url,requestParam,function(data){
		disposeTableToVipGathering(data);
		// 递归调用页面操作
		vipGatheringOperation(ALLVipHavePadUrl,ALLVipCancelUrl,url);
	},"json");
}

// 会员付款处理
function disposeTableToVipGathering(data){

	// 先清空列表
	$("#vipGathering tbody").remove();
	// 添加tbody节点
	$("#vipGathering thead").after("<tbody></tbody>");

	// 添加会员付款表格内容
	for(var i in data.vipGathering.list){

		// 判断是否已付款-用于搜索
		var myBtn;
		if(data.vipGathering.list[i].isRealPay == null){
			myBtn = "</td><td><a class='D-VipHavePadOperation D-havePadBtn button button-action button-rounded'>确认</a><a class='D-VipCancelOperation D-cancelAnalizeBtn button button-caution button-rounded'>删除</a></td></tr>";
		}else if(data.vipGathering.list[i].isRealPay == 1){
			myBtn = "</td><td><a class='D-haveAlreadyPad D-havePadBtn button button-rounded'>已确认付款</a></td></tr>";
		}else{
			myBtn = "</td><td><a class='D-haveDele D-haveAlreadyPad D-havePadBtn button button-rounded'>已删除</a></td></tr>";
		}

		$("#vipGathering tbody").append("<tr><td>"+data.vipGathering.list[i].user.username
			+"</td><td>"+data.vipGathering.list[i].month
			+"</td><td>"+data.vipGathering.list[i].price
			+"</td><td>"+data.vipGathering.list[i].user.phone
			+"</td><td>"+data.vipGathering.list[i].orderSix
			+"</td><td>"+dealWithDate(data.vipGathering.list[i].payDate)
			+"</td><td>"+data.vipGathering.list[i].id
			+myBtn
			);
	}
	vipGatheringTotalPage = data.vipGathering.totalPage;

}

// 专向分析付款
function analysisGatheringAjax(url,requestParam){

	$.get(url,requestParam,function(data){
		disposeTableToAnalysisGathering(data);
		// 递归调用页面操作
		analysisGatheringOperation(ALLanalysisHavePadUrl,ALLanalysisCancelUrl,url);
	},"json");
}

// 专向分析付款处理
function disposeTableToAnalysisGathering(data){
	// 先清空列表
	$("#analysisGathering tbody").remove();
	// 添加tbody节点
	$("#analysisGathering thead").after("<tbody></tbody>");
	// 添加专向分析付款表格内容
	for(var i in data.analysisGathering.list){

		// 判断是否已付款-用于搜索
		var myBtn;
		if(data.analysisGathering.list[i].isRealPay == null){
			myBtn = "</td><td><a class='D-analysisHavePadOperation D-havePadBtn button button-action button-rounded'>确认</a><a class='D-analysisCancelOperation D-cancelAnalizeBtn button button-caution button-rounded'>删除</a></td></tr>";
		}else if(data.analysisGathering.list[i].isRealPay == 1){
			myBtn = "</td><td><a class='D-haveAlreadyPad D-havePadBtn button button-rounded'>已确认付款</a></td></tr>";
		}else{
			myBtn = "</td><td><a class='D-haveDele D-haveAlreadyPad D-havePadBtn button button-rounded'>已删除</a></td></tr>";
		}

		$("#analysisGathering tbody").append("<tr><td>"+data.analysisGathering.list[i].userByUserId.username
			+"</td><td>"+data.analysisGathering.list[i].price
			+"</td><td>"+data.analysisGathering.list[i].userByUserId.phone
			+"</td><td>"+data.analysisGathering.list[i].orderSix
			+"</td><td>"+dealWithDate(data.analysisGathering.list[i].userPayDate)
			+"</td><td>"+data.analysisGathering.list[i].userByAnalystId.realName
			+"</td><td>"+data.analysisGathering.list[i].id
			+myBtn
			);
	}
	analysisGatheringTotalPage = data.analysisGathering.totalPage;
}

// 回款分析员
function returnMoneyAjax(url,requestParam){

	$.get(url,requestParam,function(data){
		disposeTableToReturnMoney(data);
		// 递归调用页面操作
		returnMoneyOperation(ALLreturnMoneyOperatonUrl,url);

	},"json");
}
// 回款分析员表格处理
function disposeTableToReturnMoney(data){
	// 先清空列表
	$("#returnMoney tbody").remove();
	// 添加tbody节点
	$("#returnMoney thead").after("<tbody></tbody>");
	// 添加回款分析员表格内容
	for(var i in data.returnMoney.list){

		// 判断是否已回款-用于搜索
		var myBtn;
		if(data.returnMoney.list[i].payAnlistDate == null){
			myBtn = "</td><td><a class='D-returnMoneyOperation D-havePadBtn button button-action button-rounded'>完成回款</a></td></tr>";
		}else{
			myBtn = "</td><td><a class='D-haveReturn D-havePadBtn button button-rounded'>已完成</a></td></tr>";
		}

		// 转化：1为全职，0为兼职
		var typeEmployee;
		if(data.returnMoney.list[i].userByAnalystId.isEmployee == 1){
			typeEmployee = "全职";
		}else if(data.returnMoney.list[i].userByAnalystId.isEmployee == 0){
			typeEmployee = "兼职";
		}
		$("#returnMoney tbody").append("<tr><td>"+data.returnMoney.list[i].userByAnalystId.realName
			+"</td><td>"+typeEmployee
			+"</td><td>"+data.returnMoney.list[i].userByAnalystId.phone
			+"</td><td>"+data.returnMoney.list[i].price
			+"</td><td>"+data.returnMoney.list[i].userByAnalystId.analistStarAverage
			+"</td><td>"+dealWithDate(data.returnMoney.list[i].finishDate)
			+"</td><td>"+data.returnMoney.list[i].payAnlistPrice
			+"</td><td>"+data.returnMoney.list[i].id
			+myBtn
			);
		returnMoneyTotalPage = data.returnMoney.totalPage;
	}
}

// 分析师申请管理
function analysisApplyManageAjax(url,requestParam){

	$.get(url,requestParam,function(data){
		disposeTableToAnalysisApplyManage(data);
		// 递归调用页面操作
		analysisApplyOperation(ALLApplyPassUrl,ALLApplyNoPassUrl,url);
	},"json");

}
// 分析师申请管理处理
function disposeTableToAnalysisApplyManage(data){
	// 先清空列表
	$("#analysisApplyManage tbody").remove();
	// 添加tbody节点
	$("#analysisApplyManage thead").after("<tbody></tbody>");
	// 分析师申请管理
	for(var i in data.analysisApplyManage.list){

		//*#@@新添加*******
		if(i > 0){
			var newDetailElement = $("#detail_0").clone();
			newDetailElement.attr("id","detail_"+i);
			$("#detail_"+(i-1)).after(newDetailElement);
		}
		//******************

		// 转化：1为全职，0为兼职
		var typeEmployee;
		if(data.analysisApplyManage.list[i].isEmployee == 1){
			typeEmployee = "全职";
		}else if(data.analysisApplyManage.list[i].isEmployee == 0){
			typeEmployee = "兼职";
		}
		$("#analysisApplyManage tbody").append("<tr><td class='D-myHidden'>"+data.analysisApplyManage.list[i].id
			+"</td><td>"+data.analysisApplyManage.list[i].user.id
			+"</td><td>"+data.analysisApplyManage.list[i].user.username
			+"</td><td>"+data.analysisApplyManage.list[i].user.realName
			+"</td><td>"+typeEmployee
			+"</td><td>"+data.analysisApplyManage.list[i].user.phone
			+"</td><td>"+data.analysisApplyManage.list[i].alipayAccount
			// #@@新修改********
			+"</td><td><a class='D-detailBtn button button-highlight button-rounded' data-toggle='modal' data-target='#detail_"+i+"'>详情</a></td><td><a class='D-ApplyPassOperation D-havePadBtn button button-action button-rounded'>通过</a><a class='D-ApplyNoPassOperation D-cancelAnalizeBtn button button-caution button-rounded'>不通过</a></td></tr>"
			//******************
			);

		// 详情
		$("#detail_"+i+" .D-mySelfContent").empty();
		$("#detail_"+i+" .D-skillContent").empty();
		$("#detail_"+i+" .D-experienceContent").empty();
		$("#detail_"+i+" .D-mySelfContent").append(data.analysisApplyManage.list[i].selfIntroduction);
		$("#detail_"+i+" .D-skillContent").append(data.analysisApplyManage.list[i].analyzeAbility);
		$("#detail_"+i+" .D-experienceContent").append(data.analysisApplyManage.list[i].experience);
	}
	analysisApplyManageTotalPage = data.analysisApplyManage.totalPage;
}


// 系统统计
function systemManageAjax(SystemUrl){
	$.get(SystemUrl,function(data){
		disposeTableTosystemManage(data);
	},"json");
}

function disposeTableTosystemManage(data){
	// 先清空列表
	$("#systemManage tbody").remove();
	// 添加tbody节点
	$("#systemManage thead").after("<tbody></tbody>");
	$("#systemManage tbody").append("<tr><td>"+data.userCount
		+"</td><td>"+data.analystCount
		+"</td><td>"+data.partTimeAnalystCount
		+"</td><td>"+data.finishedOrdersCount
		+"</td><td>"+data.unfinishedOrdersCount
		+"</td><td>"+data.vipMemberCount+"</td><tr>"
		);
}

/***************************************
*函数：PageTureHiddenOrView
*功能：隐藏或显示翻页
*参数：
	operation 操作方法 - 隐藏hidden 或者 显示view
	page 要操作的页面的id
****************************************/
function PageTureHiddenOrView(operation, page){
	if(operation == "hidden"){
		$("#"+page+" "+".D-myNavPage").css("display","none");
	}else if(operation == "view"){
		$("#"+page+" "+".D-myNavPage").css("display","block");
	}else{
		alert("Error009");
	}
}

// 函数实现区结束**************************************************************
});
