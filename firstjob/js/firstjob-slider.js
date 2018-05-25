$(document).ready(function(){
	var $imgrolls = $("#slider .pagenation li");
	var len = $imgrolls.length;
	var index=0;
	var adTimer = null;
	$("#slider .pagenation li").mouseover(function(){
		index=$imgrolls.index(this);   //获取鼠标悬浮 li 的index
		showImg(index);      //执行滚动方法，传index进来就是当用户滑到第几张的时候就显示第几张 
		}).eq(0).mouseover();  //触发鼠标经过第一张，eq(0)指的是第一张
		
	//鼠标滑入，停止动画；鼠标滑出，开始动画
	$("#slider").hover(function(){
		clearInterval(adTimer);    //当鼠标移动到图片上，关掉定时器，就是不在让图片滚动
	},function(){
		adTimer = setInterval(function(){  //离开的时候开定时器，图片继续滚动
			showImg(index);
			index++;
			if(index==len){index=0;}          //最后一张图片之后，转到第一张
		},2000);
	}).trigger("mouseleave");            //程序进来就触发鼠标离开事件，即让图片滚动
})
	
	

function showImg(index){            //滚动函数 
	var $rollobj=$("#slider");
	var $rolllist=$rollobj.find(".pagenation li");
	var newhref=$rolllist.eq(index).attr("href");     //传index索引进来，就是当第几张鼠标经过的时候，第几张就滚动起来
	$("#slider .image").attr("href",newhref)
	                .find("li").eq(index).stop(true,true).fadeIn()
					.siblings().fadeOut();
	$rolllist.removeClass("current").eq(index).addClass("current"); /*这一行代码可以由$rolllist.css("backgroundColor","#d3d3d3");
																															$rolllist.eq(index).css("backgroundColor","red");这两行代码代替*/

	}

 

 