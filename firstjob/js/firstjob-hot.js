$(document).ready(function(){
	$("#main .hot-left .pagenation-2 li").mouseover(function(){
		$(this).addClass("current").siblings().removeClass("current");         /*给1,2,3,4,5点击时添加样式*/
	var idx = $("main .hot-left .pagenation-2 li").index(this);
	showHot(idx);
	}).eq(0).mouseover();
});


function showHot(index){
	var $rollobj = $(".hot-left-roll");
	var rollWidth = $rollobj.find("li").outerWidth();
	$rollobj.stop().animate({ left : -rollWidth*index},600);
}


	
	

 

 