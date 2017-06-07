(function(){

	var shopPanoRect = {w: 2360, h: 1206};
    var shopBgData = [
        {url: 'images/qp/qp1.png'},
        {url: 'images/qp/qp2.png'},
        {url: 'images/qp/qp3.png'},
        {url: 'images/qp/qp4.png'},
        {url: 'images/qp/qp5.png'},
        {url: 'images/qp/qp6.png'},
        {url: 'images/qp/qp7.png'},
        {url: 'images/qp/qp8.png'},
        {url: 'images/qp/qp9.png'},
        {url: 'images/qp/qp10.png'},
        {url: 'images/qp/qp11.png'},
        {url: 'images/qp/qp12.png'},
        {url: 'images/qp/qp13.png'},
        {url: 'images/qp/qp14.png'},
        {url: 'images/qp/qp15.png'},
        {url: 'images/qp/qp16.png'},
        {url: 'images/qp/qp17.png'},
        {url: 'images/qp/qp18.png'},
        {url: 'images/qp/qp19.png'},
        {url: 'images/qp/qp20.png'}
    ];


    var view=document.getElementById("view");
    var stage=document.getElementById("stage");
    var container=document.getElementById('container');

    function init(){
        view.style.width=window.innerWidth+'px';
        view.style.height=window.innerHeight+'px';
        stage.style.transform='translate3d(-50%, -50%, 0px) '+'translate3d('+window.innerWidth/2+'px, '+window.innerHeight/2+'px, '+window.innerWidth/2*2.317+'px) '+' rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale3d(1, 1, 1)';
    }
    init();
    
    var _len=shopBgData.length;
    for(var i=0;i<_len;i++){
    	var div=document.createElement('div');
    	var _step = shopPanoRect.w / _len;       //每张图片宽度
        var _radius = Math.floor(_step / 2 / Math.tan(Math.PI / _len));    //圆柱体半径大小
    	var _a = Math.PI * 2 / _len * i;
    	var _r = 360 / _len * i; 
    	div.setAttribute('class','item');
    	div.style.backgroundImage='url('+shopBgData[i].url+')';
    	div.style.width=shopPanoRect.w/_len+'px';
    	div.style.height=shopPanoRect.h+'px';
        div.style.transform='translate3d(-50%, -50%, 0px) ';
        div.style.transform+='translate3d('+Math.floor(Math.sin(_a) * _radius)+'px, 0px, '+Math.floor(-Math.cos(_a) * _radius)+'px) ';
        div.style.transform+='rotateY('+(-_r)+'deg)';
        div.style.transform+=' scale3d(1, 1, 1)';
    	container.appendChild(div);
    }

    function resize() {
        init();
    }

    window.onresize = function () {
        resize();
    };
    resize();

    //刷新场景
    requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame ||
        function (callback) {
            setTimeout(callback, 1000 / 60);
        };

    function go(){
        touch.angleX -= (touch.curMouseX - touch.lastMouseX ) * 0.2;
        container.style.transform='translate3d(-50%, -50%, 0px) translate3d(0px, 0px, -400px) rotateX(0deg) '+'rotateY('+touch.angleX+'deg) rotateZ(0deg) scale3d(1, 1, 1)';
        // mountainPano.rotate(0, -touch.angleX, 0).updateT();
        requestAnimationFrame(go);
    }

    requestAnimationFrame(go);

    var touch={
        lastMouseX : 0,
        curMouseX : 0,
        lastAngleX :0,
        angleX : 0
    };

    document.addEventListener("touchstart",touchStartHandler);
    document.addEventListener("touchmove",touchMoveHandler);
    document.addEventListener("touchend",touchEndHandler);

    function touchStartHandler(event){
        var target=event.touches[0];
        touch.lastMouseX=target.clientX;
        touch.curMouseX=target.clientX;
    }

    function touchMoveHandler(event){
        var target=event.changedTouches[0];
        touch.lastMouseX=touch.curMouseX;
        touch.curMouseX=target.clientX;
    }

    function touchEndHandler(event){
        var target=event.changedTouches[0];
        touch.curMouseX=target.clientX;
        touch.lastMouseX=target.clientX;
    }

})();