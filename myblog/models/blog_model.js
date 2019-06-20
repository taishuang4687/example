var db=require('./db.js');
exports.sel_all=function(callback){
    var sql='select * from t_blogs';
    db.query(sql,[],callback);
}
exports.sel_id_by_data = function(uid,callback){
    var sql = 'select * from t_users,t_blogs where t_users.USER_ID=t_blogs.WRITER and t_blogs.WRITER=1';
}