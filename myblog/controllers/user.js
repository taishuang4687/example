var User_model=require('../models/user_model.js');
var crypto=require('crypto');
exports.reg=function(req,res,next){
    res.render('reg');
}
exports.checkname=function(req,res,next){
    var name=req.body.value;
    User_model.checkname(name,function(err,data){
        if(data.length>0){
            res.send('success');
        }else{
            res.send('error');
        }
    })
}
exports.do_reg=function(req,res,next){
    var name=req.body.email;
    var pass=req.body.pwd;
    User_model.insert_data(name,pass,function(err,data){
        //console.log(data);
        if(data.affectedRows>0){
            res.redirect('/login');
        }
    })
}
exports.login=function(req,res,next){
    res.render('login');
}
exports.do_login=function(req,res,next){
    var name=req.body.email;
    var pass=req.body.pwd;
    User_model.sel_name_by_pass(name,pass,function(err,data){
		if(data.length>0){
            console.log(req.session);
			//设置cookie session
			req.session=data[0];
			res.redirect("/index");
		}
	})
}
exports.unlogin=function(req,res,next){
    req.session=null;
    res.redirect('/index');
}
function md5(str){
	var hash=crypto.createHash("md5");
	hash.update(str);
	var md5str=hash.digest('hex');
	return md5str;
}