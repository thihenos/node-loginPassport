exports.IsAuthenticated = function(req,res,next){
	console.log(req.isAuthenticated());
	if(req.isAuthenticated()){
		next();
	}else{
    	res.render('welcome/index',{message:'Ops! Efetur o login para prosseguir!'});
	}
};

exports.destroySession = function(req,res,next){
	req.session.destroy();
    res.redirect('welcome/index');
};