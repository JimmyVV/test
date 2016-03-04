webpackJsonp([2],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _data = __webpack_require__(2);

	var $ = __webpack_require__(1);
	var refresh = function () {
	    var refresher = $('.refresh-btn'),
	        //更新btn
	    imgsItem = $('.container img'); //获得imgs的个数
	    var random = function random(min, max) {
	        var diff = max - min;
	        var number = Math.floor(Math.random() * diff + min);
	        return number;
	    };
	    var produceNum = function produceNum(num, limit) {
	        //在[0,num]间随机生成limit个不同的数字
	        var a = [];
	        for (var i = 0; i < num; i++) {
	            a.push(i);
	        }
	        a.sort(function () {
	            return 0.5 - Math.random();
	        });
	        a.length = limit;
	        return a;
	    };
	    //得到更新Img的连接
	    //比如: ['images/people/小明.png',....]
	    var getImgs = function getImgs() {
	        var kindsof = random(0, 2),
	            //[0,2)
	        select = produceNum(27, 9),
	            //27,9
	        srcs = [],
	            src;
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;

	        try {
	            for (var _iterator = select[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                var i = _step.value;

	                src = 'images/people/' + _data.data[kindsof][i] + '.png';
	                srcs.push(src);
	            }
	        } catch (err) {
	            _didIteratorError = true;
	            _iteratorError = err;
	        } finally {
	            try {
	                if (!_iteratorNormalCompletion && _iterator.return) {
	                    _iterator.return();
	                }
	            } finally {
	                if (_didIteratorError) {
	                    throw _iteratorError;
	                }
	            }
	        }

	        return srcs;
	    };
	    var loadImgs = function loadImgs() {
	        var srcs = getImgs(); //获得新的Img连接地址
	        for (var i in srcs) {
	            imgsItem[i].src = srcs[i];
	            imgsItem[i].onload = function () {
	                var _this = this;

	                this.classList.add('active');
	                setTimeout(function () {
	                    _this.classList.remove('active');
	                }, 1400);
	            };
	        }
	    };
	    refresher.on('touchstart', function () {
	        //更新图片内容
	        loadImgs();
	    });
	}();

/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var data = [["鹿晗", "华晨宇", "王俊凯", "王凯", "朴海镇", "吴磊", "宋仲基", "张艺兴", "张翰", "易烊千玺", "吴亦凡", "权志龙", "郑容和", "罗志祥", "TOP", "吴彦祖", "盛一伦", "王祖蓝", "宋小宝", "李光洙", "尔康", "黄子韬", "高晓松", "黄渤", "孙红雷", "叫兽易小星"], ["coin", "coin", "coin", "coin", "coin", "coin", "coin", "coin", "coin", "coin", "coin", "coin", "coin", "coin", "coin", "coin", "coin", "coin", "coin", "coin", "coin", "coin", "coin", "coin", "coin", "coin", "coin"]];
	exports.data = data;

/***/ }
]);