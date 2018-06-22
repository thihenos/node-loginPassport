var express = require('express'),
session = require('express-session');
path = require('path'),
bodyParser = require('body-parser'),
cons = require('consolidate'),
dust = require('dustjs-helpers'),
dustlinkedin = require('dustjs-linkedin')
passport = require('passport'),
passportConfig = require('./server/config/passport'),
cookieParser = require('cookie-parser');
app = express();

var server = require('http').createServer(app);

/* Assing Dust Engine to .dust Files, and the files will be converted to HTML for the browser,
 * this is a view engine for nodejs
 */
app.engine('dust',cons.dust);


/* Parse Cookie header and populate req.cookies with an object keyed by the cookie names. 
 * Optionally you may enable signed cookie support by passing a secret string, which assigns req.secret so it may be used by other middleware.
 */
app.use(cookieParser('MyK3y'));

/* 
 *Body Parser Middleware that can transform all elements inside <body></body> tags which have NAME atribute into a JSON
 *and we can access all data via req.body
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

/* 
 * Creating session, using express session. it's secret have to be the same of cookieParser in 24 line
 * params:
 	- Secret: kind of a key, that will use to secure the session
 	- resave: Forces the serrion to be save back to the session store
 	- saveUninitialized: Forces session, when is new and not modified to be save
 	- MaxAge: Duration of the session
 *and we can access all data via req.body
 */
app.use(session({secret:'MyK3y',saveUninitialized:true,resave:true,cookie: {maxAge: 3600000}}));

/* 
 * This is where the magic starts!
 * Initializing passport and attaching it to the session
 */
app.use(passport.initialize());
app.use(passport.session());
require('./server/config/passport')(app);

/*
 * Setting node dust as view engine, to process all dust files
 * Set Default Ext .dust
 */ 
app.set('view engine', 'dust','dustjs-linkedin');

/*
 * Setting node the view folder, responsable to render the HTML's files
 */
app.set('views',__dirname + '/views');

/*
 * Setting public as static folder for using CSS
 */
app.use(express.static(path.join(__dirname,'public')));

/*
 * Setting src as static folder for using in Multer 
 */
app.use(express.static(path.join(__dirname,'src')));


/*
 * Initializing sequelize section
 */
let db = require('./server/models');

/*
 * Sync all tables to database
 */
db.sequelize.sync({force:true}).then(function(){
    console.log('DB Connection - OK');
    let crypto = require('crypto');
	//Lib for crypting strings
	let crypto = require('crypto');

	//Creating my cipher, by using the key REPLACE_YOUR_KEY_HERE 
	let cipher = crypto.createCipher('aes192','REPLACE_YOUR_KEY_HERE');

	//Crypting ADM string
	let crypted = cipher.update('ADM','utf8','hex');
	crypted += cipher.final('hex');
	if(crypted){
	  //Creating ADM user
	  db.User.create({username: 'ADM', password: crypted}).then(function() {
	    console.log('ADM user inserted');
	  }, function (error) {
	    console.log(error);res.sendStatus(500);
	  });
	}else{
	  console.log('Something went wrong with crypting the password :(');
	}
});

// Starting Server on PORT 3000
app.listen(process.env.PORT || 3000, function(){
	console.log('Server Started On Port 3000');
});

/*
 * I prefer to isolate all get and post request in a file especif file
 * in that way, it makes the code much more cleaner
 */
 require('./server/routes')(app,passport);