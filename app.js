var express         = require('express');
var path = require("path");
var port = process.env.PORT || 3000; 
var cors            = require('cors');
var path            = require('path');
var morgan          = require('morgan');
var bodyParser      = require('body-parser');
var mongoose        = require('mongoose');
var methodOverride  = require("method-override");
var app             = express();
var twitter = require('./controllers/twitterController');
var instagram = require('./controllers/instagramController');
var mailgun = require('./controllers/mailgunController');



app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());


app.use(methodOverride(function(req, res){
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    var method = req.body._method
    delete req.body._method
    return method
  }
}));

app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    return res.status(401).json({message: 'Unauthorized request.'});
  }
  next();
});

app.set("views", "./views");
app.set("view engine", "ejs");

// Only used to serve the static website.
app.get('/', function(req, res){
    res.render('index');
});


var routes = require('./config/routes');

app.use("/api", routes);

app.listen(port, function(){
  console.log('listening on port 3000')
});