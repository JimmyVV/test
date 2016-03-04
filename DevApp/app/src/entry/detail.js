//异步加载数据
var asyncAdd = function(src) {
    var script = document.createElement('script');
    script.src = src;
    document.head.appendChild(script);
}
window.onload = function() {
    asyncAdd('./dist/share.entry.js');
};

