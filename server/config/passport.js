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
        db.sequelize.query("SELECT * FROM usuarios WHERE email = :p_login",{replacements: {p_login :user.email},type: db.sequelize.QueryTypes.SELECT}).then(function(result) {
            console.log('Still Serializing')
            done(null,user);
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
        passwordField : 'senha'
        ,passReqToCallback : true
        },
        function (req,login,senha,done){
            //Querying on database to find the user by the email or the login
            db.sequelize.query("SELECT * FROM usuarios WHERE email = :p_login or cpf = :p_login",{replacements: {p_login :req.body.login},type: db.sequelize.QueryTypes.SELECT}).then(function(result) {
                //Verify if the query returns a result
                if(result){
                    //finishing the by sereliazing user object attributes
                    done(null,result[0]);
                }
            });
        }//Fim função de procura do usuario
        )//Fim passport
    );
};