 /*---------------------------首页图片滚动----------------------------*/
function imageSlide() {
	var mySwiper = new Swiper ('.swiper-container', {
	  	autoplay : 2000,
		speed:300,
	    direction: 'horizontal',
	    loop: true, 
	    
	    // 如果需要分页器
	    pagination: '.swiper-pagination',
	    // 如果需要前进后退按钮
//	    nextButton: '.swiper-button-next',
//	    prevButton: '.swiper-button-prev', 
	   
	  })
};

/*---------------------------心跳效果----------------------------*/
$(document).ready(function(){
	showImg(); 
});                                                       /*心跳效果*/

	function showImg() 
	{ var imgId = $(".footsteps .map img.xin1");
	    if(imgId.is(':visible'))    
	//如果可见，则隐藏
	        imgId.hide(); 
	    else 
	        imgId.show()    
	//设置图像可见
	    setTimeout('showImg()',500);               
	//间隔的毫秒
	} 
	
/*------------------------旋转立方体-------------------------------*/
function imageRotate() {
    var ul = document.getElementById('map-ul');
    var inputs = document.getElementsByTagName('input');
	inputs[0].onclick = function(){
		ul.style.webkitTransition = '-webkit-transform 1s linear';
		ul.style.oTransition = '-o-transform 1s linear';
		ul.style.transition = 'transform 1s linear';
		ul.style.webkitTransform = 'rotateX(90deg)';
		ul.style.oTransform = 'rotateX(90deg)';
		ul.style.Transform = 'rotateX(90deg)';
	};
	inputs[1].onclick = function(){
		ul.style.webkitTransition = '-webkit-transform 1s linear';
		ul.style.oTransition = '-o-transform 1s linear';
		ul.style.transition = 'transform 1s linear';
		ul.style.webkitTransform = 'rotateX(180deg)';
		ul.style.oTransform = 'rotateX(180deg)';
		ul.style.Transform = 'rotateX(180deg)';
	};
	inputs[2].onclick = function(){
		ul.style.webkitTransition = '-webkit-transform 1s linear';
		ul.style.oTransition = '-o-transform 1s linear';
		ul.style.transition = 'transform 1s linear';
		ul.style.webkitTransform = 'rotateX(270deg)';
		ul.style.oTransform = 'rotateX(270deg)';
		ul.style.Transform = 'rotateX(270deg)';
	};
	inputs[3].onclick = function(){
		ul.style.webkitTransition = '-webkit-transform 1s linear';
		ul.style.oTransition = '-o-transform 1s linear';
		ul.style.transition = 'transform 1s linear';
		ul.style.webkitTransform = 'rotateX(0deg)';
		ul.style.oTransform = 'rotateX(0deg)';
		ul.style.Transform = 'rotateX(0deg)';
	};
	inputs[4].onclick = function(){
		ul.style.webkitTransition = '-webkit-transform 1s linear';
		ul.style.oTransition = '-o-transform 1s linear';
		ul.style.transition = 'transform 1s linear';
		ul.style.webkitTransform = 'rotateY(90deg)';
		ul.style.oTransform = 'rotateY(90deg)';
		ul.style.Transform = 'rotateY(90deg)';
	};
	inputs[5].onclick = function(){
		ul.style.webkitTransition = '-webkit-transform 1s linear';
		ul.style.oTransition = '-o-transform 1s linear';
		ul.style.transition = 'transform 1s linear';
		ul.style.webkitTransform = 'rotateY(-90deg)';
		ul.style.oTransform = 'rotateY(-90deg)';
		ul.style.Transform = 'rotateY(-90deg)';
	};
};

/*------------------------跑马灯-------------------------------*/
function paomadeng() {
	var speed=10; //数字越大速度越慢
    var tab=document.getElementById("demo");
    var tab1=document.getElementById("demo1");
    var tab2=document.getElementById("demo2");
    tab2.innerHTML=tab1.innerHTML;
    function Marquee(){
		if(tab2.offsetWidth-tab.scrollLeft <= 0){
			tab.scrollLeft-= tab1.offsetWidth;  //js中offsetWidth offsetWidth是指对象自身的宽度，整型，单位像素（含边线，如滚动条的占用的宽，值会随着内容的输入而不断改变）。
			                                    // scrollLeft 代表页面利用滚动条滚动到右侧时，隐藏在滚动条左侧的页面的宽度
		}
		else{
			tab.scrollLeft++;
		}
    }
    var MyMar=window.setInterval(Marquee,speed);
    tab.onmouseover=function(){
		window.clearInterval(MyMar)
	};
    tab.onmouseout=function(){
		MyMar=window.setInterval(Marquee,speed)
	};
};

/*------------------------表格-------------------------------*/
function biaoge(){
	var speedhq=30; 
    var tabhq=document.getElementById("table-demo");
    var tabhq1=document.getElementById("table-demo1");
    var tabhq2=document.getElementById("table-demo2");
    tabhq2.innerHTML=tabhq1.innerHTML;
	function Marqueehq(){
	    if(tabhq2.offsetHeight-tabhq.scrollTop <= 0){
			tabhq.scrollTop-= tabhq1.offsetHeight;  
	    }
		else{
			tabhq.scrollTop++;
		}
		
	}  
	var MyMarhq=setInterval(Marqueehq,speedhq)  
	tabhq.onmouseover=function() {
		clearInterval(MyMarhq)
	};
	tabhq.onmouseout=function() {
		MyMarhq=setInterval(Marqueehq,speedhq)
	};
}


/*-----------------------时间--------------------------------*/
 
	function two_char(n) {
            return n >= 10 ? n : "0" + n;
        }
        function time_fun() {
			var mydate = new Date();
            var sec=mydate.getSeconds();     //setSeconds()	设置 Date 对象中的秒钟 (0 ~ 59)。
            setInterval(function () {
                sec++;
                var date = new Date();      //Date 对象会自动把当前日期和时间保存为其初始值     
                date.setSeconds(sec);
                var h = date.getHours(), m = date.getMinutes(), s = date.getSeconds();
                document.getElementById("mytime").innerText = (date.getFullYear()-2008)+"年" +(date.getMonth()+1)+"个月" +date.getDate()+"天" +two_char(h) + "小时" + two_char(m) + "分钟" + two_char(s)+ "秒" ;
            }, 1000);      //js返回的月份是从0开始算起的，0表示1月，11表示12月
        }
 
		


/*---------------------添加多个onload事件----------------------*/
function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      oldonload();
      func();
    }
  }
}

addLoadEvent(imageSlide);
addLoadEvent(imageRotate);
addLoadEvent(paomadeng);
addLoadEvent(biaoge);
addLoadEvent(time_fun);


