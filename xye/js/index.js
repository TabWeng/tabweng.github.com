$(function(){

	var audio = document.getElementsByTagName('audio');

	$(".ctrPlay").click(function(){
		getId = $(this).attr("id");

		if($(this).hasClass("toPlay")){

			// 关闭所有的音频
			for (var i = 0; i < audio.length; i++){
				audio[i].pause();
			}

			// 设置所有有play
			for (var j = 0; j < 8; j++){
				var getEle = $("#"+j);
				getEle.attr("class", "glyphicon glyphicon-play toPlay");
				getEle.next().html("点击开始播放");
			}

			$(this).attr("class","glyphicon glyphicon-pause toPause");
			audio[getId].load();
			audio[getId].play();
			$(this).next().html("正在播放");

		}else{
			$(this).attr("class","glyphicon glyphicon-play toPlay");
			$(this).next().html("点击开始播放");
			getThisId = $(this).attr("id");
			audio[getThisId].pause();
			audio[audio.length-1].play();
		}

	});

	myResponsive(
		"#contents a",
		0,400,
		{
			"font-size":"12px"
		}
	);

	myResponsive(
		"#intro-head",
		0,400,
		{
			"font-size":"22px"
		}
	);	

	myResponsive(
		"#intro-content",
		0,400,
		{
			"font-size":"16px"
		}
	);

	myResponsive(
		".worksDiv img",
		0,400,
		{
			"width":"200px",
			"height":"auto"
		}
	);		

});