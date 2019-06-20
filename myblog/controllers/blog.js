var Blog_model=require('../models/blog_model.js'); 
exports.index=function(req,res,next){
    console.log(req.session);
    var uid = req.session.USER_ID;
    Blog_model.sel_id_by_data(uid,function(err,data){
        //console.log(data);
        res.render('/index_logined',{
            'blogs':data,
            'sess':req.session
        });
    })
    //res.render('index.ejs');
}