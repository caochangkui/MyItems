$(document).ready(function(){
	var page = 1;
    var i = 5; //每版放4个图片
    //向后 按钮
    $(".recruit_button .next").click(function(){    //绑定click事件
	     var $parent = $(this).parents(".recruit_top_slide");//根据当前点击元素获取到父元素
		 var $v_show = $parent.find(".recruit_content"); //寻找到“视频内容展示区域”
		 var $v_content = $parent.find(".recruit_roll"); //寻找到“视频内容展示区域”外围的DIV元素
		 var v_width = $v_content.width() ;
		 var len = $v_show.find("li").length;
		 var page_count = Math.ceil(len / i) ;   //只要不是整数，就往大的方向取最小的整数
		 if( !$v_show.is(":animated") ){    //判断“视频内容展示区域”是否正在处于动画
			  if( page == page_count ){  //已经到最后一个版面了,如果再向后，必须跳转到第一个版面。
				$v_show.animate({ left : '0px'}, "slow"); //通过改变left值，跳转到第一个版面
				page = 1;
			  }else{
				$v_show.animate({ left : '-='+v_width }, "slow");  //通过改变left值，达到每次换一个版面
				page++;
			 }
		 }
   });
   $(".recruit_button .prev").click(function(){
	     var $parent = $(this).parents(".recruit_top_slide");//根据当前点击元素获取到父元素
		 var $v_show = $parent.find(".recruit_content"); //寻找到“视频内容展示区域”
		 var $v_content = $parent.find(".recruit_roll"); //寻找到“视频内容展示区域”外围的DIV元素
		 var v_width = $v_content.width();
		 var len = $v_show.find("li").length;
		 var page_count = Math.ceil(len / i) ;   //只要不是整数，就往大的方向取最小的整数
		 if( !$v_show.is(":animated") ){    //判断“视频内容展示区域”是否正在处于动画
		 	 if( page == 1 ){  //已经到第一个版面了,如果再向前，必须跳转到最后一个版面。
				$v_show.animate({ left : '-='+v_width*(page_count-1) }, "slow");
				page = page_count;
			}else{
				$v_show.animate({ left : '+='+v_width }, "slow");
				page--;
			}
		}
    });
	
	
	$(".recruit_content li").mouseover(function(){
		$(this).addClass("current").siblings().removeClass("current");    
		var index = $(".recruit_content li").index(this);
		show(index);
	}).eq(0).mouseover();
	
	function show(index){            //滚动函数 
	var $rollobj=$(".recruit_top_slide");
	var $rolllist=$rollobj.find("recruit_content li");
	var newhref=$rolllist.eq(index).attr("href");     //传index索引进来，就是当第几张鼠标经过的时候，第几张就滚动起来
	$(".recruit_img").attr("href",newhref)
	                .find("li").eq(index).stop(true,true).fadeIn()
					.siblings().fadeOut();
	}
})


	
	

 

 