/**
 * @caochangkui
 * */

//名字空间模块
var app = {
	util:{}
};

//工具方法模块
app.util = {
	$: function(selector,node){  //定义一个取元素的方法
		return (node || document).querySelector(selector);
	},
	formatTime : function(ms){
		var d = new Date(ms);
		var pad = function(s){  //如果时间中出现单位数，则在前面加上0，例如将1点表示为01点；
			if(s.toString().length===1){
				s = '0'+s;
			}
			return s;
		};
		var year = d.getFullYear();
	    var month = d.getMonth() + 1;
	    var date = d.getDate(); 
	    var hour = d.getHours();
	    var minute = d.getMinutes();
	    var second = d.getSeconds();
	
	    return year + '-' + pad(month) + '-' + pad(date) + ' ' + pad(hour) + ':' + pad(minute) + ':' + pad(second);
	}
};

//需要应用的代码
(function(util){  //立即执行函数  
	var $ = util.$;  //取得$符号（全局变量）
	var movedNote = null;
	var startX; //移动的坐标（全局变量）
	var startY;
	var maxZIndex = 0;
	
	var noteTpl = `
		<i class="u-close"></i>
		<div class="u-editor" contenteditable="true"></div>
		<div class="u-timestamp">
			<span>更新：</span>
			<span class="time"></span>
		</div>
	`;   //es6中的模板字符串
	
	
	function Note(option){ //创建便签，option包括便签的创建时间、内容等因素
		var note = document.createElement('div');
		note.className = 'm-note';
		note.innerHTML = noteTpl;
		note.style.left = option.left + 'px';
		note.style.top = option.top + 'px';
		note.style.zIndex = option.zIndex;
		document.body.appendChild(note);
		
		this.note = note;
		this.updateTime();
		this.addEvent();
	}
	
	Note.prototype.updateTime = function(ms){
		var ts = $('.time',this.note);
		ms = ms || Date.now();
		ts.innerHTML = util.formatTime(ms);
	}
	
	Note.prototype.close = function(){ //定义关闭事件(这个方法比较重要！！！)
		console.log('close note');
		document.body.removeChild(this.note);//删除DOM节点的方法是removeChild()。
	}
	
	Note.prototype.addEvent = function(){
		//添加便签的mousedown事件
		var mousedownHandler = function(e){
			var e = e||event;  
			movedNote = this.note;
			startX = e.clientX - movedNote.offsetLeft;
			startY = e.clientY - movedNote.offsetTop; 
			if(parseInt(this.note.style.zIndex) !== maxZIndex-1){  //判断是否处于最上面
				this.note.style.zIndex = maxZIndex++;
			}
		}.bind(this);
		this.note.addEventListener('mousedown',mousedownHandler);
		
		//添加便签的关闭事件
		var closeBtn = $('.u-close',this.note);
		var closeHandler = function(e){
			this.close(e);
			closeBtn.removeEventListener('click',closeHandler);//移除关闭事件
			closeBtn.removeEventListener('mousedown',mousedownHandler);//移除mousedown事件
		}.bind(this);//回调函数的后面加个bind(this)的作用是使js绑定事件this指向发生改变
		
		closeBtn.addEventListener('click',closeHandler);
		
		
	}
	
	document.addEventListener('DOMContentLoaded',function(e){//DOMContentLoaded和load
		//创建按钮事件
		$('#create').addEventListener('click',function(e){
			new Note({  //点击"创建"就生成一个便签
				left : Math.round(Math.random() * (window.innerWidth - 220)), //便签位置随机
        		top : Math.round(Math.random() * (window.innerHeight - 320)),
        		zIndex : maxZIndex++  //使最新添加的便签处于最顶层
			});   
		})
		
		//移动监听
		function mousemoveHandler(e){
			var e = e||event;  
			//console.log(e);
			if(!movedNote){  //判断便签是否已存在
				return;
			}
			console.log(e);
			movedNote.style.left = e.clientX - startX + 'px';
			movedNote.style.top = e.clientY - startY + 'px';

		}
		
		function mouseupHandler(e){
			movedNote = null;
		}
		
		document.addEventListener('mousemove',mousemoveHandler);
		document.addEventListener('mouseup',mouseupHandler);
		
	});
	
	
})(app.util);








