var $ = require('zepto');

var contain = function() {
    var container = $('.container');
    var getPara = function(src) {
        var reg = /people+\/(.*).png/;
        return src.match(reg)[1];
    }
    var returnHref = function(src) {
        return `/detail?name=${src}`;
    }
    container.on("touchstart", 'img', function(e) {
        var src = getPara(e.target.src);
        window.location.href = returnHref(src);
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
};
document.addEventListener("DOMContentLoaded", function() {
	require('./redirect.js');
    contain(); //当页面加载稳定时，执行
}, false);

