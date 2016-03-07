var express = require('express'),
    async = require('async'),
    detail = require('./dist/detail.js');

module.exports = function(app) {
    app.route('/')
        .get(function(req, res) {
            var people = detail.getImgs();
            console.log(people);
            res.render('index',{imgs:people.srcs,firstName:people.headName});
        });
    //获取到明星之后，填入图片链接
    app.route('/detail')
        .get(function(req, res) {
             var name = req.query.name; //获取抽取到的明星
             var firstName = req.query.firstName;  //获取到姓
             var select = req.query.random;
             var para = detail.getPara(select); //获取分享文案
             res.render('detail',{name:name,para:para.para,share:para.share,firstName:firstName});
        });
    //提醒用户，使用手机端;
    app.route('/redict')
        .get(function(req, res) {
            res.render('redict');
        });
}


