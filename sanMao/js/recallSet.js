$(function(){
// 音乐播放参数设置
var myPlaylist = [
    {
        mp3:'http://7xuovx.com1.z0.glb.clouddn.com/%E3%80%90%E5%85%B3%E4%BA%8E%E4%B8%89%E6%AF%9B%E3%80%91%E3%80%90%E9%9F%B3%E9%A2%91%E3%80%91%E7%A8%BB%E8%8D%89%E4%BA%BA%E7%9A%84%E6%A2%A6--%E9%98%BF%E7%8B%AC.mp3',
        title:'稻草人的梦',
        artist:'阿独',
        rating:5,
        buy:'',
        // price:'0.99',
        duration:'3:47',
        cover:'resource/thumbs/01.jpg'
    },
    {
        mp3:'http://7xuovx.com1.z0.glb.clouddn.com/%E3%80%90%E5%85%B3%E4%BA%8E%E4%B8%89%E6%AF%9B%E3%80%91%E3%80%90%E9%9F%B3%E9%A2%91%E3%80%91%E6%BB%9A%E6%BB%9A%E7%BA%A2%E5%B0%98--%E7%BD%97%E5%A4%A7%E4%BD%91.mp3',
        title:'滚滚红尘',
        artist:'罗大佑',
        rating:5,
        buy:'',
        // price:'0.99',
        duration:'3:07',
        cover:'resource/thumbs/02.jpg'
    },
    {
        mp3:'http://7xuovx.com1.z0.glb.clouddn.com/%E6%A9%84%E6%A6%84%E6%A0%91%C2%B7%E9%BD%90%E8%B1%AB.MP3',
        title:'橄榄树',
        artist:'齐豫',
        rating:5,
        buy:'',
        // price:'0.99',
        duration:'3:48',
        cover:'resource/thumbs/03.jpg'
    }

];

var description = '';

$('.left-4').ttwMusicPlayer(myPlaylist, {
    autoPlay:false, 
    description:description,
    jPlayer:{
        // swfPath:'../plugin/jquery-jplayer' //You need to override the default swf path any time the directory structure changes
    }
});

});