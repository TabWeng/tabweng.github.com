# 中科研拓-前端实习测试题
###题目：实现官网前端页面制作
###官网地址：[http://www.zhongkerd.com](http://www.zhongkerd.com/)
###要求：独立完成，可使用框架
***
###实现
#####本实现已经发布到github博客上，点击链接查看实现效果：[https://tabweng.github.io/zkyt-index/index.html](https://tabweng.github.io/zkyt-index/index.html)
###使用技术：
#####Bootstrap
![Alt text](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLJHOOqSYXHkPSSBPb_vHc78T44LcRCO9wfcBXZ_Bdji6pqHTm)
#####jQuery
![Alt text](http://stavarengo.com/var/post/12/1306925626.png)
#####CSS3
![Alt text](https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSjNgMow5cdemSTlR2-ThTYLLnG1WUYKh8dfV2xbprtdjJltRjBWw)

###性能优化：
1. 使用CSS Sprite技术，减少HTTP请求
2. 保证图片质量的情况下，对图片进行尽可能的压缩（在官网中发现个别图片并未压缩）
3. 由于代码需要被查看，此处不做代码混淆压缩处理
4. 尽量使用css代替JavaScript对页面进行行为控制，比如导航的二级菜单的显示就是纯CSS编写

###支持响应式：
1. 使用Bootstrap的栅格系统进行响应式布局
2. 使用CSS3的媒体查询优化不同分辨率的响应式效果
3. 使用jquery动态控制首页滚动窗的字体大小
4. 各种分辨率显示效果均通过测试，都能比较完美的支持

###编写符合W3C标准的代码：
1. 行为、样式与结构分离，本页面实现中，html代码中头部引入css代码，尾部引入js代码，这种顺序可以提高页面的性能。此外，在html代码中，尽量少的添加class、id，而是通过css的选择器的规则来进行选择，这样可使结构代码尽量简单明了。
2. HTML语义化，对于标题用h1、h2等，对于重要的内容，用strong强调等，这样不仅有利于阅读，也做有利于搜索引擎查找网站关键字。

###兼容性：
1. 由于本页面使用css3、html5等前端技术，这些技术支持IE9+，所以本页面的兼容IE9+、Firefox、Chrome（均使用工具测试通过）
2. 可使用一些兼容IE8及以下版本的js插件来使页面支持css3的效果（这里未做处理）

###需要改进：
2. 需要更多时间思考本页面的优雅降级、尽量使在IE6、7、8也能显示出正常的页面效果
3. 由于时间关系，本页面未使用渐进增强的开发方案进行

##说明：
1. 本页面由本人独立完成，各种效果的实现通过以往经验和自己的思考来实现。
2. 个别效果不能100%完成和页面一样，本页面中仅使用Bootstrap和jQuery，尽量少用插件来实现效果（一般插件都比较冗余），对于官网中使用插件来完成的效果，这里我用自己的jQuery的代码来实现，效果有点异曲同工。


