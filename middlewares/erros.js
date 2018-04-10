exports.notfound = function(req,res,next){
	res.status(404);
	res.render('not-found');
};

exports.serverError = function(err, req, res, next) {  
	res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });  
};