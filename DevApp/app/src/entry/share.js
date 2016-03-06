var cover = require('../component/cover.js');
var $ = function(selector){
    return document.querySelector(selector);
}
Function.prototype.after = function(fn){
    var _this = this;
    return function(){
        var res = _this.apply(this,arguments);
        if(res==="next"){  //值为Boolean
            return fn.apply(this,arguments);
        }
        return res;
    }
}
var bind = (function() {
    var DOM2 = function() {
        if (document.addEventListener) {
            return function(ele, fn, type) {
                ele.addEventListener(type, fn, false);
            }
        } else {
            return "next";
        }
    };
    var IE = function() {
        if (document.attachEvent) {
            return function(ele, fn, type) {
                ele.attachEvent(type, fn);
            }
        } else {
            return "next";
        }
    };
    var DOM0 = function(){
        return function(ele, fn, type) {
            ele[`on`] = () => {
                fn();
            };
        }
    }
    return DOM2.after(IE).after(DOM0)();
})();

var share = (function(){
    var shareBtn=$('.share-btn');  //分享Btn
    var coverDiv = cover.createCover();
    var isShow = false;
    bind(shareBtn,function(event){
        if(!isShow){
            document.body.appendChild(coverDiv)
            isShow = true;
        };
        event.stopPropagation();
    },'click');
    bind($('body'),function(){
        if(isShow){
            document.body.removeChild(coverDiv);
            isShow = false;
        }
    },"click")
})()

