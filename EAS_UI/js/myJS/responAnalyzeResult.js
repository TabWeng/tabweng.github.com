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


