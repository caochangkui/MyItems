//鼠标滑过立方体显示内容 
$(document).ready(function(){
//	旋转立方体上的字显示与隐藏
	$(".map-show li ").hover(function(){
		$(this).find("span").stop(true,true).fadeIn(600);
	},function(){
		$(this).find("span").stop(true,true).fadeOut(600);	
	});
	
//点击按钮效果
	$(".button input").click(function(){
		$(this).addClass("current").siblings().removeClass("current"); /*给1,2,3,4,5,6点击时添加样式*/
	});
	
	//返回顶部
//	$("#goTopBtn").click(function(){  
//		$(this).css("transform","translateY(200px)").css("transition","1s");
//		$('body').animate({scrollTop:0},500);
//	})
}); 



//$("p").css("background-color","yellow");animate({scrollTop:0},500);
