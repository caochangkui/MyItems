$(document).ready(function(){
	$("#inputSearch").focus(function(){
	    var txt_value= $(this).val();
	    if(txt_value==this.defaultValue){
		    $(this).val("");
		    }
	    }).blur(function(){
		var txt_value= $(this).val();
		if(txt_value==""){
			$(this).val("请输入搜索内容");
			}
		}).keyup(function(e){
		if(e.which == 13){
			alert('回车提交搜索内容!');
		}
	})
})
/*本节参考课本P85*/


/*例子，jquery键盘事件、回车键事件用法。
http://www.jb51.net/article/28074.htm
1、keydown()  
keydown事件会在键盘按下时触发.  

2、keyup()  
keyup事件会在按键释放时触发,也就是你按下键盘起来后的事件  

3、keypress()  
keypress事件会在敲击按键时触发,我们可以理解为按下并抬起同一个按键

             case 9: keyName = "[制表]"; break;  
     　 　 　 case 13:keyName = "[回车]"; break;  
     　 　 　 case 32:keyName = "[空格]"; break;  
     　 　 　 case 33:keyName = "[PageUp]";   break;  
     　 　 　 case 34:keyName = "[PageDown]";   break;  
     　 　 　 case 35:keyName = "[End]";   break;  
     　 　 　 case 36:keyName = "[Home]";   break;  
     　 　 　 case 37:keyName = "[方向键左]";   break;  
     　 　 　 case 38:keyName = "[方向键上]";   break;  
     　 　 　 case 39:keyName = "[方向键右]";   break;  
    　 　 　   case 40:keyName = "[方向键下]";   break;  
     　 　 　 case 46:keyName = "[删除]";   break;  
	 
	 
	  */