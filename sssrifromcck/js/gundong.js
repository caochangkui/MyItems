/*$(function(){
    $(".xinwen .next").click(function(){ 
		
		var idx =1;
		showList(idx);
		idx=idx+1;
		return false;
   }).eq(1).click();
});
//显示不同的模块
function showList(idx){
	var $rollobj = $(".xinwen");
    var rollWidth = $rollobj.find("li").outerWidth();
	//rollWidth = rollWidth * 4; 一个版面的宽度
	$rollobj.stop(true,false).animate({ left : '-='+rollWidth*idx},1000);
}
*/

$(function(){
    var page = 1;
    var i = 1; //每版放1个图片
    //向后 按钮
    $("span.next").click(function(){    //绑定click事件
	     var $parent = $(this).parents(".post1");//根据当前点击元素获取到父元素
		 var $v_show = $parent.find("div.xinwen"); //寻找到“视频内容展示区域”
		 var $v_content = $parent.find("div.roll"); //寻找到“视频内容展示区域”外围的DIV元素
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
			$parent.find("span").eq((page-1));
		 }
   });
    //往前 按钮
    $("span.pre").click(function(){
	     var $parent = $(this).parents(".post1");//根据当前点击元素获取到父元素
		 var $v_show = $parent.find("div.xinwen"); //寻找到“视频内容展示区域”
		 var $v_content = $parent.find("div.roll"); //寻找到“视频内容展示区域”外围的DIV元素
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
			$parent.find("span").eq((page-1));
		}
    });
});
