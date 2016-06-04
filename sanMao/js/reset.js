$(function(){

	$("li").click(function(){
		$("a",this).each(function(){
			window.location.href = $(this).attr('href');
		});

	});

});