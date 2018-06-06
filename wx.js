function onBridgeReady(){
 WeixinJSBridge.call('hideOptionMenu');
}

if (typeof WeixinJSBridge == "undefined"){
    if( document.addEventListener ){
        document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
    }else if (document.attachEvent){
        document.attachEvent('WeixinJSBridgeReady', onBridgeReady); 
        document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
    }
}else{
    onBridgeReady();
}

var useragent = navigator.userAgent;
if (useragent.match(/MicroMessenger/i) != 'MicroMessenger') {
	// 这里警告框会阻塞当前页面继续加载
	//alert('已禁止本次访问：您必须使用微信内置浏览器访问本页面！');
	// 以下代码是用javascript强行关闭当前页面
	var opened = window.open('https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxa5ff24073b976f78e');
	opened.opener = null;
	//opened.close();
}
