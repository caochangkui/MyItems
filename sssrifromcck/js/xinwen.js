$(document).ready(function(){
	var index=0;
	$(".post2 div a").mouseover(function(){
		index=$(".post2 div a").index(this);
		showImg(index);
		}).eq(0).mouseover();
	})
	

function showImg(index){
	var $rollobj=$(".post2");
	var $rolllist=$rollobj.find("div a");
	var newhref=$rolllist.eq(index).attr("href");
	$(".yewulingyu").attr("href",newhref)
	                .find("img").eq(index).stop(true,true).fadeIn()
					.siblings().fadeOut();
	$rolllist.removeClass("chos")
	          .eq(index).addClass("chos");

	}
