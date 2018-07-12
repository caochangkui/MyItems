# ES7 之 async await 的使用

在 js 异步请求数据时，通常，我们多采用回调函数的方式解决，但是，如果有多个回调函数嵌套时，代码显得很不优雅，维护成本也相应较高。 ES6 提供的 Promise 方法和 ES7 提供的 Async/Await 语法糖可以更好解决多层回调问题。

Promise 对象用于表示一个异步操作的最终状态（完成或失败），以及其返回的值。await 操作符用于等待一个Promise 对象。它只能在异步函数 async function 中使用。await 表达式会暂停当前 async function 的执行，等待 Promise 处理完成。若 Promise 正常处理(fulfilled)，其回调的resolve函数参数作为 await 表达式的值，继续执行 async function。

## 一个ajax请求时
通常 使用 ajax 请求数据时，会

```
$.ajax({
    url: 'data1.json',
    type: 'GET',
    success: function (res) {
        console.log(res) // 请求成功，则得到结果res
    },
    error: function(err) {
        console.log(err)
    }
})
```

上面可以得到我们想要的结果 res ---> { "url": "data2.json" }

## 多个ajax请求时
但是 当得到的数据 res 需要用于另一个 ajax 请求时，则需要如下写法：

```
$.ajax({
    url: 'data1.json',
    type: 'GET',
    success: function (res) {
        $.ajax({
            url: res.url, // 将 第一个ajax请求成功得到的res 用于第二个ajax请求
            type: 'GET',
            success: function (res) {
                $.ajax({
                    url: res.url,  // 将第二个ajax请求成功得到的res 用于第三个ajax请求
                    type: 'GET',
                    success: function (res) {
                        console.log(res)   // {url: "this is data3.json"}
                    },
                    error: function(err) {
                        console.log(err)
                    }
                })
            },
            error: function(err) {
                console.log(err)
            }
        })
    },
    error: function(err) {
        console.log(err)
    }
})
```

上面出现多个回调函数的嵌套，可读性较差（虽然这种嵌套在平常的开发中少见，但是在node服务端开发时，还是很常见的）

## 优化方法

### 使用 promise 链式操作

如下，使用 Promise，进行链式操作，可以使上面的异步代码看起来如同步般易读，从回调地狱中解脱出来。。

```
function ajaxGet (url) {
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: url,
            type: 'GET',
            success: function (res) {
                resolve(res);
            },
            error: function(err) {
                reject('请求失败');
            }
        })
    })
};

ajaxGet('data1.json').then((d) => {
    console.log(d);       // {url: "data2.json"}
    return ajaxGet(d.url);
}).then((d) => {
    console.log(d);       // {url: "data3.json"}
    return ajaxGet(d.url);
}).then((d) => {
    console.log(d);       // {url: "this is data3.json"}
})
```

### Async/await 方法

- async 表示这是一个async函数，即异步函数，await只能用在这个函数里面。
- await 表示在这里等待promise返回结果了，再继续执行。
- await 后面跟着的应该是一个promise对象（当然，其他返回值也没关系，只是会立即执行，不过那样就没有意义了…）
- await 操作符用于等待一个Promise 对象。它只能在异步函数 async function 中使用。
- await 等待的虽然是promise对象，但不必写.then(..)，直接可以得到返回值。


执行一个ajax请求，可以通过如下方法：

```
function ajaxGet (url) {
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: url,
            type: 'GET',
            success: function (res) {
                resolve(res)
            },
            error: function(err) {
                reject('请求失败')
            }
        })
    })
};

async function getDate() {
    console.log('开始')
    let result1 = await ajaxGet('data1.json');
    console.log('result1 ---> ', result1); // result1 --->  {url: "data2.json"}
};

getDate();  // 需要执行异步函数
```
执行多个ajax请求时：

```
function ajaxGet (url) {
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: url,
            type: 'GET',
            success: function (res) {
                resolve(res)
            },
            error: function(err) {
                reject('请求失败')
            }
        })
    })
};

async function getDate() {
    console.log('开始')
    let result1 = await ajaxGet('data1.json');
    let result2 = await ajaxGet(result1.url);
    let result3 = await ajaxGet(result2.url);
    console.log('result1 ---> ', result1); // result1 --->  {url: "data2.json"}
    console.log('result2 ---> ', result2); // result2 --->  {url: "data3.json"}
    console.log('result3 ---> ', result3); // result3 --->  {url: "this is data3.json"}
};

getDate();  // 需要执行异步函数
```

async await捕捉错误:

- async await中.then(..)不用写了，那么.catch(..)也不用写，可以直接用标准的try catch语法捕捉错误。

例如，如果下面的 url 写错了

```
function ajaxGet (url) {
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: url111, // 此处为错误的 url
            type: 'GET',
            success: function (res) {
                resolve(res)
            },
            error: function(err) {
                reject('请求失败')
            }
        })
    })
};


async function getDate() {
    console.log('开始')
    try {
        let result1 = await ajaxGet('data1.json'); // 执行到这里报错，直接跳至下面 catch() 语句
        let result2 = await ajaxGet(result1.url);
        let result3 = await ajaxGet(result2.url);
        console.log('result1 ---> ', result1);
        console.log('result2 ---> ', result2);
        console.log('result3 ---> ', result3);

    } catch(err) {
        console.log(err) // ReferenceError: url111 is not defined
    }
};

getDate();  // 需要执行异步函数
```
## 源码

源码查看

## 更多

请参考：
- https://www.cnblogs.com/cckui/p/7809813.html
- https://www.cnblogs.com/aspwebchh/p/6629333.html
- https://cnodejs.org/topic/5640b80d3a6aa72c5e0030b6
- http://es6.ruanyifeng.com/#docs/async
- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/await
- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise