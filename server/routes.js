'use strict';

module.exports = function (app,passport) {

	//If the user tries to access any address of the app which not exists in routes.js file, it will be send to the welcome page
	app.route('/*').get(function (req, res) {
    	res.render('welcome/index');
  	});

	//Route responsable to use Passport to verify the user and password
	app.post('/auth/login',function(req,res,next){
	  //Pointing to passport that the app will use local strategy, which means that user and password will be save in some database
      passport.authenticate('local-login'
            //{successRedirect: '/home',failureRedirect:'/'}
      ,function(err,user){
        if(!user){
          res.send('User or password wrong');
        }else{
          req.logIn(user,function(error){
            if(error) return next(error);
            console.log('Request Login Sucess');
            return  res.send('Test OK');
          });
        }
      })(req,res,next);
    });

};