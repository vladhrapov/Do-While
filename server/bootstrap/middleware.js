var logger = require('morgan'),
//  favicon = require('serve-favicon')
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser');

module.exports = function (app) {
    // todo uncomment after placing your favicon in /public
    // app.use(favicon(__dirname + '/public/favicon.ico'));
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(cookieParser());
};