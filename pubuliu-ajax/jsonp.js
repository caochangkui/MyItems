function jsonp(obj){

    let {
        url='',
        data={},
        success=function(){},
        cb='callback'
    } = obj;

    // 回调函数名根据时间随机显示
    let fnName = 'jQuery' + (+new Date); 

    // 将data里面的名值对加上callback一起拼接起来
    let str = '';
    let arr = [];
    data[cb] = fnName;  //{wd:ms,'callback':'jquery2313213'}
    for(let attr in data){
        arr.push(attr + '=' + data[attr]);
    }
    str = arr.join('&');

    // 定义全局函数
    window[fnName] = function(data){
        success(data);
    };

    // console.log(str);
    let oS = document.createElement('script');
    oS.src = url + '?'+ str;
    document.getElementsByTagName('head')[0].appendChild(oS);
    oS.remove();
}