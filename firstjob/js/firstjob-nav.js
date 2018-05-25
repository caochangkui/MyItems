 /*µ¼º½Ð§¹û*/
$(document).ready(function(){
	 $("#header .nav-middle .ul-first").hover(function(){
		 $(this).find(".submenu").stop(false,true).slideDown(300);
	 },function(){
		 $(this).find(".submenu").stop(false,true).slideUp(300);
		 });
	 })
 

 