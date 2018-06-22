let passport = require('passport'),LocalStrategy = require('passport-local').Strategy;
let db = require('../models');
let crypto = require('crypto');

module.exports = function (app){

    //Serealize Session
    passport.serializeUser(function (user,done){
        console.log('Serializing')
        done(null,user);
    });
    // Deserealize Session
    passport.deserializeUser(function (user,done){
       db.User.find({ where: { username: user.username }}).then(function(user) {
      // db.sequelize.query("SELECT * FROM user WHERE username = :p_login",{replacements: {p_login :user.username},type: db.sequelize.QueryTypes.SELECT}).then(function(result) {
            console.log('Still Serializing')
            done(null,user);
            console.log('Done!')
        }, function (error) {
            //Killing session
            console.log(error);
            done(err,null);
        });
    });

   // Using Passport for local strategy
    passport.use('local-login', new LocalStrategy ({
        //In this part, passport will use' the input in HTML, by using it's name for the strategy
        usernameField : 'login',
        passwordField : 'password'
        ,passReqToCallback : true
        },
        function (req,login,password,done){
            //Querying on database to find the user by the email or the login
            db.User.find({ where: { username: req.body.login }}).then(function(result) {
                //Verify if the query returns a result
                if(result){
                    //Deciphering the password
                    let decipher = crypto.createDecipher('aes192','REPLACE_YOUR_KEY_HERE');
                    let dec = decipher.update(result.password,'hex','utf8');
                    dec += decipher.final('utf8');
                    if(dec){
                        if (dec === req.body.password) {
                            console.log('Login OK');
                            //finishing the by sereliazing user object attributes
                            done(null,result);
                        } else {
                            console.log('Login ou senha errado');
                            done(null,false,{message : 'Username or password are wrong :('});
                        }
                    }
                }else{
                    done(null,false,{message : 'Username or password are wrong :('});
                }
            });
        }//Fim função de procura do usuario
        )//Fim passport
    );
};