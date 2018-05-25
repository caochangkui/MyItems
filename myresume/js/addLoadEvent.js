/*------------------------旋转立方体-------------------------------*/
function imageRotate() {
    var ul = document.getElementById('map-ul');
    var inputs = document.getElementsByTagName('input');
    var section3 = document.getElementById("section3");
	inputs[0].onclick = function(){
		ul.style.webkitTransition = '-webkit-transform 1s linear';
		ul.style.oTransition = '-o-transform 1s linear';
		ul.style.transition = 'transform 1s linear';
		ul.style.webkitTransform = 'rotateX(270deg)';
		ul.style.oTransform = 'rotateX(270deg)';
		ul.style.Transform = 'rotateX(270deg)';
		section3.style.background = '#339999';
	};
	inputs[1].onclick = function(){
		ul.style.webkitTransition = '-webkit-transform 1s linear';
		ul.style.oTransition = '-o-transform 1s linear';
		ul.style.transition = 'transform 1s linear';
		ul.style.webkitTransform = 'rotateX(360deg)';
		ul.style.oTransform = 'rotateX(360deg)';
		ul.style.Transform = 'rotateX(360deg)';
		section3.style.background="#336699";
	};
	inputs[2].onclick = function(){
		ul.style.webkitTransition = '-webkit-transform 1s linear';
		ul.style.oTransition = '-o-transform 1s linear';
		ul.style.transition = 'transform 1s linear';
		ul.style.webkitTransform = 'rotateX(90deg)';
		ul.style.oTransform = 'rotateX(90deg)';
		ul.style.Transform = 'rotateX(90deg)';
		section3.style.background="#003366";
	};
	inputs[3].onclick = function(){
		ul.style.webkitTransition = '-webkit-transform 1s linear';
		ul.style.oTransition = '-o-transform 1s linear';
		ul.style.transition = 'transform 1s linear';
		ul.style.webkitTransform = 'rotateY(-90deg)';
		ul.style.oTransform = 'rotateY(-90deg)';
		ul.style.Transform = 'rotateY(-90deg)';
		section3.style.background="#666699";
	};
	inputs[4].onclick = function(){
		ul.style.webkitTransition = '-webkit-transform 1s linear';
		ul.style.oTransition = '-o-transform 1s linear';
		ul.style.transition = 'transform 1s linear';
		ul.style.webkitTransform = 'rotateY(90deg)';
		ul.style.oTransform = 'rotateY(90deg)';
		ul.style.Transform = 'rotateY(90deg)';
		section3.style.background="#003333";
	};
	inputs[5].onclick = function(){
		ul.style.webkitTransition = '-webkit-transform 1s linear';
		ul.style.oTransition = '-o-transform 1s linear';
		ul.style.transition = 'transform 1s linear';
		ul.style.webkitTransform = 'rotateX(180deg)';
//		ul.style.oTransform = 'rotateY(-90deg)';
//		ul.style.Transform = 'rotateY(-90deg)';
		section3.style.background="#336666";
	};
};

/*---------------------当前时间----------------------*/
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
		document.getElementById("mytime").innerText = date.getFullYear()+"年" +(date.getMonth()+1)+"月" +date.getDate()+"日" + " " +two_char(h) + ":" + two_char(m) + ":" + two_char(s);
	}, 1000);       //js返回的月份是从0开始算起的，0表示1月，11表示12月
}

/*---------------------百度地图----------------------*/
//创建和初始化地图函数：
function map(){
	function initMap() {
		createMap(); //创建地图
		setMapEvent(); //设置地图事件
		addMapControl(); //向地图添加控件
	}

	//创建地图函数：
	function createMap() {
		var map = new BMap.Map("dituContent"); //在百度地图容器中创建一个地图
		var point = new BMap.Point(121.549926,31.242115); //定义一个中心点坐标
		map.centerAndZoom(point, 17); //设定地图的中心点和坐标并将地图显示在地图容器中
		window.map = map; //将map变量存储在全局
	}
	
	//地图事件设置函数：
	function setMapEvent() {
		map.enableDragging(); //启用地图拖拽事件，默认启用(可不写)
		map.enableScrollWheelZoom(); //启用地图滚轮放大缩小
		map.enableDoubleClickZoom(); //启用鼠标双击放大，默认启用(可不写)
		map.enableKeyboard(); //启用键盘上下左右键移动地图
	}
	
	//地图控件添加函数：
	function addMapControl() {
	//向地图中添加缩放控件
		var ctrl_nav = new BMap.NavigationControl({ anchor: BMAP_ANCHOR_TOP_LEFT, type: BMAP_NAVIGATION_CONTROL_LARGE });
		map.addControl(ctrl_nav);
		//向地图中添加缩略图控件
		var ctrl_ove = new BMap.OverviewMapControl({ anchor: BMAP_ANCHOR_BOTTOM_RIGHT, isOpen: 1 });
		map.addControl(ctrl_ove);
		//向地图中添加比例尺控件
		var ctrl_sca = new BMap.ScaleControl({ anchor: BMAP_ANCHOR_BOTTOM_LEFT });
		map.addControl(ctrl_sca);
	}
	initMap(); //创建和初始化地图
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

addLoadEvent(imageRotate);       
addLoadEvent(time_fun);    
addLoadEvent(map);  
