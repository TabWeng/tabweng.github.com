$(function(){
	setColorToTitle();
	$("#firstTitle").css("background-color","#fff");

	$("#myUlTitle a").each(function(index){
		switch(index){
			case 0:
				$(this).click(function(){
					setColorToTitle();
					$(this).css("background-color","#fff");
				});
				break;
			case 1:
				$(this).click(function(){
					setColorToTitle();
					$(this).css("background-color","#fff");
				});
				break;
			case 2:
				$(this).click(function(){
					setColorToTitle();
					$(this).css("background-color","#fff");
				});
				break;
			case 3:
				$(this).click(function(){
					setColorToTitle();
					$(this).css("background-color","#fff");
				});
				break;			
		}
	})
});



function setColorToTitle() {
	$("#myUlTitle a").each(function(index){
		switch (index){
			case 0: 
				$(this).css("background-color","#B2DFEE");
				break;
			case 1: 
				$(this).css("background-color","#98FB98");
				break;
			case 2: 
				$(this).css("background-color","#FFF68F");
				break;
			case 3: 
				$(this).css("background-color","#EEAEEE");
				break;
		}
		$(this).css("color","#555");
	});
}