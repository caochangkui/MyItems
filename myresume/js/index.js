$(document).ready(function(){ 
	//配置项 
	$("#fullpage").fullpage({ 
		  //可以为每一个section设置background-color属性 
//		  sectionsColor:['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90','blue'],
			
		  //定义是否通过箭头来控制slide幻灯片，默认为true。当我们设置为false，则幻灯片左右两则的箭头就会消失，在移动设备上，我们可以通过滑动来操作幻灯片 
		  controlArrows:true, 
			
		  //每一页的内容是否垂直居中,默认为true.一般保持默认值 
		  verticalCentered:true, 
			
		  //滚动速度，单位为毫秒，默认为700 
		  scrollingSpeed:1000, 
			
		  //定义锚连接，默认为[]。有了锚链接，用户就可以快速打开定位到某一页面 
		  //注意定义锚链接的时候，值不要和页面中任意的id或name相同，尤其是在IE浏览器下。而且定义时不需要要加# 
		  anchors:["page1","page2","page3","page4","page5"], 
			
		  //是否锁定锚链接，默认为false。如果设置为true，那么定义的锚链接，也就是anchors属性则没有效果。这个配置项使用的比较少 
		  lockAnchors:false, 
			
		  //定义页面section滚动的动画方式,如果修改此项,需要引入jquery.easings插件，或者jquery ui ,参考http://www.runoob.com/jqueryui/api-easings.html
		  easing:"easeInOutCubic", 
			
		  //是否使用CSS3 transforms 来实现滚动效果，默认为true。这个配置项可以提高支持css3的浏览器，比如移动设备等的速度，如果浏览器不支持css3，则会使用jquery来替代css3实现滚动效果 
		  css3:true, 
			
		  //滚动到最顶部后是否连续滚动到底部，默认为false 
		  loopTop:false, 
			
		  //滚动到最底部是否连续滚动回顶部，默认为false 
		  loopBottom:false, 
			
		  //横向slider幻灯片是否循环滚动，默认为true 
		  loopHorizontal:true, 
			
		  //是否使用插件的滚动方式，默认为true，如果选择false，则会出现浏览器自带的滚动条，将不会按页滚动，而是按照滚动条的默认行为来滚动 
		  autoScrolling:true, 
			
		  //是否包含滚动条，默认为false，如果设置为true，则浏览器自带的滚动条出现，页面滚动时还是按页滚动，但是滚动条的默认行为也有效 
		  scrollBar:false, 
			
		  //设置每一个section顶部和底部的padding，默认为0，一般如果需要设置一个固定顶部或者底部的菜单、导航、元素等，可以使用这两个配置项 
		  paddingTop:0, 
		  paddingBottom:0, 
			
		  //固定的元素，默认为null，需要配置一个jquery选择器。在页面滚动的时候，fixedElements设置的元素固定不动 
		  fixedElements:"", 
			
		  //是否可以使用键盘方向键导航，默认为true 
		  keyboardScrolling:true, 
			
		  //在移动设备中滑动页面的敏感性，默认为5，是按百分比来衡量，最高为100,越大则越难滑动 
		  touchSensitivity:5, 
			
		  //是否循环滚动，默认为false。如果设置为true，则页面会循环滚动，而不像loopTop或loopBottom那样出现跳动，注意这个属性和这两者不兼容，请不要同时使用 
		  continuousVertical:false, 
			
		  //锚链接是否可以控制滚动动画，默认为true。如果设置为false，则通过锚链接定位到某个页面显示不再有动画效果 
		  animateAnchor:true, 
			
		  //是否记录历史，默认为true，可以记录页面滚动的历史，通过浏览器的前进后退来导航。注意如果设置了autoScrolling:false,那么这个配置也将被关闭，即设置为false 
		  recordHistory:true, 
			
		  //绑定菜单,设定的相关属性与anchors的值对应后，菜单可以控制滚动，默认为false。可以设置为菜单的jquery选择器 
		  menu:'#fullpageMenu', 
			
		  //是否显示导航，默认为false。如果设置为true，会显示小圆点，作为导航 
		  navigation:true, 
			
		  //导航小圆点的位置，可以设置为left或者right 
		  navigationPosition:"right", 
			
		  //导航小圆点的tooltips设置，默认为[]，注意按照顺序设置 
		  navigationTooltips:["首页","学习路线","前端技能","我的作品","请联系我"], 
			
		  //是否显示当前页面的导航的tooltip信息，默认为false 
		  showActiveTooltip:true, 
			
		  //是否显示横向幻灯片的导航，默认为false 
		  slidesNavigation:true, 
			
		  //横向幻灯片导航的位置，默认为bottom，可以设置为top或bottom 
		  slidesNavPosition:"bottom", 
			
		  //内容超过满屏后是否显示滚动条，默认为false。如果设置为true，则会显示滚动条，如果滚动查看内容，还需要jquery.slimscroll插件的配合 
		  scrollOverflow:false, 
			
		  //section的选择器,默认为.section 
		  sectionSelector:".section", 
			
		  //slideSelector:slide的选择器，默认为.slide 
		  slideSelector:".slide", 
		  
		  //afterLoad:滚动到某一屏后的回调函数，接收 anchorLink 和 index 两个参数，anchorLink 是锚链接的名称，index 是序号，从1开始计算
		  afterLoad: function(anchorLink, index){
			if(index == 1){
				$('.section1').find('.touxiang').delay(200).animate({
					bottom: '50%'
				}, 1000, 'easeOutExpo');
				$('.section1').find('.age').delay(200).animate({
					top: '50%'
				}, 1500, 'easeOutExpo');
				$('.section1').find('.myemail').delay(600).animate({
					top: '50%'
				}, 1500, 'easeOutExpo');
				$('.section1').find('.tel').delay(1000).animate({
					top: '50%'
				}, 1500, 'easeOutExpo');
				$('.section1').find('.godown img').delay(200).show(600);
			}
			if(index == 2){
				$('.section2').find('.godown img').delay(200).show(600);
				$(".gotop").fadeIn(400);
			}
			if(index == 3){
				$('.section3').find('.godown img').delay(200).show(600);
				$(".gotop").fadeIn(400);
			}
			if(index == 4){
				$('.section4').find('.godown img').delay(200).show(600);
				$(".gotop").fadeIn(400);
			}
			if(index == 5){
				$('.section5').find('.godown img').delay(200).show(600);
				$(".gotop").fadeIn(400);
				
				//最后一页打字效果
				var con  = $(".myword_1");
		        var s = "不甘平庸，喜欢探索新技术；善于沟通，做事认真，学习和适应能力强。";  
		        var len = s.length;  
		        var index = 0;  
		        var tid = null;  
				
		        function start(){  
		            con.text('');  
		            tid = setInterval(function(){  
		                con.append(s.charAt(index));  
		                if(index ++ === len){  
		                    clearInterval(tid);  
		                }  
		            },100);  
		        }  
		        start(); 
			}
		},
		onLeave: function(index, direction){
			if(index == 1){
				$('.section1').find('.touxiang').animate({
					bottom: '70%'
				}, 1000, 'easeOutExpo');
				$('.section1').find('.age').animate({
					top: '150%'
				}, 1500, 'easeOutExpo');
				$('.section1').find('.myemail').animate({
					top: '150%'
				}, 1500, 'easeOutExpo');
				$('.section1').find('.tel').animate({
					top: '150%'
				}, 1500, 'easeOutExpo');
				$('.section1').find('.godown img').delay(200).hide(600);
			}
			if(index == 2){
				$('.section2').find('.godown img').delay(200).hide(600);
			}   
			if(index == 3){
				$('.section3').find('.godown img').delay(200).hide(600);
			}   
			if(index == 4){
				$('.section4').find('.godown img').delay(200).hide(600);
			}   
			if(index == 5){
				$('.section5').find('.godown img').delay(200).hide(600);
			}   
			if(index = 1){
				$(".gotop").fadeOut();
			}
		}
	}); 
})  