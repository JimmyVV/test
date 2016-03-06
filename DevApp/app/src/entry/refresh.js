import { data,firstName } from './data.js';
var $ = require('zepto');
var refresh = (function() {
    var refresher = $('.refresh-btn'), //更新btn
        imgsItem = $('.container img'); //获得imgs的个数
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
        //比如: ['images/people/小明.png',....]
    var getImgs = function() {
        var kindsof = random(0, 2), //[0,2)
            select = produceNum(26, 9), //26,9
            srcs = [],
            src,
            headName=[];
        for (var i in select) {
            src = `images/people/${data[kindsof][i]}.png`;
            headName.push(firstName[kindsof][i]);
            srcs.push(src);
        }
        return {
        	srcs,headName
        };
    }
    try {
        var loadImgs = function() {
            var people = getImgs(); //获得新的Img连接地址
            for (var i in people.srcs) {
                imgsItem[i].src = people.srcs[i];
                imgsItem[i].alt = people.headName[i];
                imgsItem[i].onload = function() {
                    this.classList.add('active');
                    setTimeout(() => {
                        this.classList.remove('active');
                    }, 1400);
                }
            }
        }
    } catch(e) {
    	console.log(e.message);
    }

    refresher.on('click', function() {
        //更新图片内容
        for(var i = 0; i<9;i++){
        	imgsItem[i].src = '';
        }
        loadImgs();
    });
})();
