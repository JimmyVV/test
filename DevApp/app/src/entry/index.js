var $ = require('zepto');

var contain = function() {
    var container = $('.container');
    var getPara = function(src) {
        var reg = /people+\/(.*).png/;
        return src.match(reg)[1];
    }
    var random = function(min, max) {
        var diff = max - min;
        var number = Math.floor(Math.random() * diff + min);
        return number;
    }
    var returnHref = function(src,firstName,random) {
        return `/detail?name=${src}&firstName=${firstName}&random=${random}`;
    }
    container.on("click", 'img', function(e) {
        var src = getPara(e.target.src);
        var firstName = e.target.dataset.firstname;
        var select = random(0,30);
        window.location.href = returnHref(src,firstName,select);
    })
};
//异步加载数据
var asyncAdd = function(src) {
    var script = document.createElement('script');
    script.src = src;
    document.head.appendChild(script);
}
window.onload = function() {
    asyncAdd('./dist/refresh.entry.js');
    contain(); //当页面加载稳定时，执行
};
document.addEventListener("DOMContentLoaded", function() {
	require('./redirect.js');
}, false);

