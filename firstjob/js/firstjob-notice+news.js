$(document).ready(function(){
	$(".hot-right .top li").mouseover(function(){
		$(this).addClass("current").siblings().removeClass("current");  
			var idx = $(".hot-right .top li").index(this);
			showHotRight(idx);
	}).eq(0).mouseover(); 
	
});

 function showHotRight(index){
	var $rollobj = $(".notice-news");
	$rollobj.hide().eq(index).show();
	
	
	/*
	$rollobj.eq(index).stop(true,true).fadeIn().siblings().fadeOut();
		$rolllist.removeClass("current").eq(index).addClass("current");  */

}

	
	
 