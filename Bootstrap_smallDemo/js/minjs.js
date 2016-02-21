
$(document).ready(function(){
	$("#demo-navbar .dropdown-menu a").click(function(){
		var href = $(this).attr("href");
		$("#tab-list-mainSpilit a[href='"+href+"']").tab('show');
	});

	$(".myBtn").click(function(){
		$(this).attr("data-toggle","modal");
		$(this).attr("data-target","#collection");
	});
});
