var Blog_model=require('../models/blog_model.js'); 
exports.index=function(req,res,next){
    Blog_model.sel_all(function(err,data){
		//console.log(data);
		res.render("index_logined",{
			'blogs':data,
			'sess':req.session,
		})
    });
    
    //res.render('index.ejs');
}