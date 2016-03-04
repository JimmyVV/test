webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var $ = __webpack_require__(1);

	var contain = function contain() {
	    var container = $('.container');
	    var getPara = function getPara(src) {
	        var reg = /people+\/(.*).png/;
	        return src.match(reg)[1];
	    };
	    var returnHref = function returnHref(src) {
	        return '/detail?name=' + src;
	    };
	    container.on("touchstart", 'img', function (e) {
	        var src = getPara(e.target.src);
	        window.location.href = returnHref(src);
	    });
	};
	//异步加载数据
	var asyncAdd = function asyncAdd(src) {
	    var script = document.createElement('script');
	    script.src = src;
	    document.head.appendChild(script);
	};
	window.onload = function () {
	    asyncAdd('./dist/refresh.entry.js');
	};
	document.addEventListener("DOMContentLoaded", function () {
	    contain(); //当页面加载稳定时，执行
	}, false);

/***/ }
]);