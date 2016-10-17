if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session')
const bodyParser = require('body-parser');
const knex = require('./db/knex')

const routes = require('./routes/index');
const users = require('./routes/users');
const signup = require('./routes/signup');
const profile = require('./routes/profile');
const posts = require('./routes/posts');
const writepost = require('./routes/writepost');
const logout = require('./routes/logout');
const login = require('./routes/login');
// const one = require('./routes/one');

const app = express();

const userRouter = express.Router()
    // const itemRouter = express.Router({mergeParams: true})

app.use(cookieSession({
    name: 'come_blog_with_me',
    secret: process.env.SESSION_SECRET,
    secureProxy: app.get('env') === 'production'
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/signup', signup);
app.use('/profile', profile);
app.use('/posts', posts);
app.use('/writepost', writepost);
app.use('/logout', logout);
app.use('/login', login);
// app.use('/id', one);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

// const port = process.env.PORT || 8000
//
// app.listen(port, () => {
//     console.log('listening on port ', port);
// })

//this comment means nothing

module.exports = app;
