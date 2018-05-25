 /*导航效果*/
$(document).ready(function(){
	 $("nav .nav1").hover(function(){
		 $(this).find(".submenu").stop(false,true).slideDown(600);
	 },function(){
		 $(this).find(".submenu").stop(false,true).slideUp(600);
		 });
	 })
 

 