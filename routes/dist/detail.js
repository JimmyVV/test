var data = require('./data.js');
//得到imgs的src路径
var getImgs = (function(){
	var random = function(min, max) {
        var diff = max - min;
        var number = Math.floor(Math.random() * diff + min);
        return number;
    }
    var produceNum = function(num, limit) { //在[0,num]间随机生成limit个不同的数字
            var a = [];
            for (var i = 0; i < num; i++) {
                a.push(i);
            }
            a.sort(function() {
                return 0.5 - Math.random()
            });
            a.length = limit;
            return a;
        }
        //得到更新Img的连接
        //比如: ['images/小明.png',....]
    var getImgs = function() {
        var kindsof = random(0, 2),
            select = produceNum(27, 9), //27,9
            srcs = [],
            src;
        for (var i of select) {
            src = `images/people/${data.data[kindsof][i]}.png`;
            srcs.push(src);
        }
        return srcs;
    }
    var getPara = function(){
    	var select = random(0,30);
    	var para = data.phara[select];
    	return para;
    }
    return {
    	getImgs,
    	getPara
    }
})();
exports.returnSrc = function(name){
	return `images/${name}_1.png`;
}
exports.getImgs = getImgs.getImgs;
exports.getPara = getImgs.getPara;
