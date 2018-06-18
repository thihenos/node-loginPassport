let passport = require('passport');


exports.login = function(req, res) {
    console.log(req.body);
    passport.authenticate('local-login',{
        failureRedirect:'/', sucessRedirect:'/profile'
    }),function(req,res){
        res.json(req.user);   
    };
}