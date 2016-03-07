webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _data = __webpack_require__(7);

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
	    var loadImgs = function loadImgs() {
	        var people = getImgs(); //获得新的Img连接地址
	        for (var i in people.srcs) {
	            imgsItem[i].src = people.srcs[i];
	            imgsItem[i].dataset.firstName = people.headName[i];
	            imgsItem[i].onload = function () {
	                var _this = this;

	                this.classList.add('active');
	                setTimeout(function () {
	                    _this.classList.remove('active');
	                }, 1400);
	            };
	        }
	    };
	    //得到更新Img的连接
	    //比如: ['images/people/小明.png',....]
	    var getImgs = function getImgs() {
	        var kindsof = random(0, 3),
	            //[0,2)
	        select = produceNum(26, 9),
	            //26,9
	        srcs = [],
	            src,
	            headName = [];
	        for (var i in select) {
	            src = 'images/people/' + _data.data[kindsof][select[i]] + '.png';
	            headName.push(_data.firstName[kindsof][select[i]]);
	            srcs.push(src);
	        }
	        return {
	            srcs: srcs,
	            headName: headName
	        };
	    };

	    refresher.on('tap', function () {
	        //更新图片内容
	        for (var i = 0; i < 9; i++) {
	            imgsItem[i].src = '';
	        }
	        loadImgs();
	    });
	}();

/***/ },

/***/ 7:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var data = [["鹿晗", "华晨宇", "王俊凯", "王凯", "朴海镇", "吴磊", "宋仲基", "张艺兴", "张翰", "易烊千玺", "吴亦凡", "权志龙", "郑容和", "罗志祥", "TOP", "吴彦祖", "盛一伦", "王祖蓝", "宋小宝", "李光洙", "尔康", "黄子韬", "高晓松", "黄渤", "孙红雷", "叫兽易小星", "靳东"], ["霍建华", "阮经天", "胡歌", "朴灿烈", "李易峰", "周杰伦", "撒贝宁", "李钟硕", "杨洋", "蒋劲夫", "陈伟霆", "王源", "黄致列", "井柏然", "陈晓", "刘恺威", "钟汉良", "薛之谦", "艾克里里", "岳云鹏", "肖骁", "王思聪", "沙溢", "陈赫", "邓超", "白客", "贾乃亮", "大张伟"], ["林志颖", "王大陆", "陈建州", "大鹏", "张震", "郑恺", "朱亚文", "刘烨", "尼坤", "张智霖", "王力宏", "杜海涛", "何炅", "余文乐", "陈柏霖", "冯绍峰", "马东", "包贝尔", "徐峥", "袁弘", "林更新", "郑允浩", "金在中", "金钟国", "武艺", "林丹", "小李"]];
	var firstName = [['鹿', '华', '王', '王', '朴', '吴', '宋', '张', '张', '易', '吴', '权', '郑', '罗', '塔', '吴', '盛', '王', '宋', '李', '福', '法', '高', '黄', '孙', '易', '靳'], ['霍', '阮', '胡', '朴', '李', '周', '撒', '李', '杨', '蒋', '陈', '王', '黄', '井', '陈', '刘', '钟', '薛', '岳', '肖', '王', '沙', '陈', '邓', '白', '贾', '大'], ['林', '王', '陈', '董', '张', '郑', '朱', '刘', '尼', '张', '王', '杜', '何', '余', '陈', '冯', '马', '包', '徐', '袁', '林', '郑', '金', '金', '武', '林', '小']];
	exports.data = data;
	exports.firstName = firstName;

/***/ }

});