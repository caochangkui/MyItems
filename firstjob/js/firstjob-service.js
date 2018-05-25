$(document).ready(function(){
	$(".service-img").hover(function(){
		$(this).find(".desc").stop().animate({ left : 0},300);
		$(this).addClass("current");
	},function(){
		$(this).find(".desc").stop().animate({ left : "-100%"},300);
		$(this).removeClass("current");	
		
	});
});


	
	
/*
 $(".service img").hover(function(){
		$(this).parent().find(".desc").animate({ left : 0},300);
	},function(){
		$(this).parent().find(".desc").animate({ left : -100%},300);
	}),

 $(document).ready(function(){
	$(".service img").hover(function(){
		$roll=$(this).parents(".service-img");
		$show=$roll.find(".desc")
		$show.animate({ left : 0},300);
	},function(){
		$show.animate({ left : "-100%"},300);
	});
});

*/