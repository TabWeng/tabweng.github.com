$(function(){

// 演讲播放参数设置
var n = {
	playlist:[
		{
		  file: "http://7xuovx.com1.z0.glb.clouddn.com/%E3%80%90%E6%BC%94%E8%AE%B2%E3%80%91%E6%B5%81%E6%98%9F%E9%9B%A8.mp3",
		  thumb: "resource/thumbs/04.jpg",
		  trackName: "流星雨",
		  trackArtist: "三毛",
		  trackAlbum: "Single",
		},
		{
		  file: "http://7xuovx.com1.z0.glb.clouddn.com/%E3%80%90%E6%BC%94%E8%AE%B2%E3%80%91%E9%98%85%E8%AF%BB%E5%A4%A7%E5%9C%B0.mp3",
		  thumb: "resource/thumbs/05.jpg",
		  trackName: "阅读大地",
		  trackArtist: "三毛",
		  trackAlbum: "Single",
		}
	],
	autoPlay:false
}

$(".audio-1").jAudio(n);

});