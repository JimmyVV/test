var express = require('express'),
    async = require('async');

module.exports = function(app) {
    app.route('/')
        .get(function(req, res) {
            res.render('index');
        });
    app.route('/getTyrant')
        .post(function(req, res) {
            var name = req.query.name,
                len = Number(req.query.len),
                tyrant_name = req.body.name; //获取data传入的信息
            //接受传来参数的长度
            if (len > 68) {
                res.redirect('/');
                return false;
            }
            async.waterfall([
                function( cb) {
                    //如果存在,则不inserrt，如果不存在则insert;
                        Post.save(utils.md5(name), function(err, mark) {
                            
                            if (err) {
                                res.redirect('/');
                                return false;
                            }
                            cb(null, mark);
                        })
                    // }
                },
                //获取tyrants;
                function(mark, cb) {
                    if (mark) {
                        /*
                         * 获得土豪的信息内容
                         */
                        Post.getTyrant(tyrant_name, function(err, data) {
                            //获得单个土豪信息                              
                            cb(err, data);
                        })
                    }
                },
                function(data, cb) {
                    //解析土豪信息的基本格式
                    Post.saveUser(utils.md5(name), data, function(err) {
                        cb(err, data);
                    })

                }

            ], function(err, data) {
                //如果存在错误,返回首页
                
                if (!err) {
                    res.redirect('./');
                    return false;
                }
                //返回获得的单个土豪信息;
                res.json(data);
            })
        });
    //提醒用户，使用手机端;
    app.route('/redict')
        .get(function(req, res) {
            res.render('redict');
        });
}

