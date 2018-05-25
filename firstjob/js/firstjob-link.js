$(document).ready(function(){
	$("#footer .link ul li").mouseover(function(){
	
		$(this).addClass("current");          
	    $(this).children(".slect").stop().fadeIn(300);
	}).mouseout(function(){
		$(this).removeClass("current");
		$(this).children(".slect").stop().fadeOut();
	});
}); 




	
	/*	var $parent = $(this).parents(".recruit_top_slide");

 */

 