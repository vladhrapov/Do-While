module.exports = function (app) {
    app.use(function (err, req, res) {
        res.status(err.status || 500);
        res.json({
            message: err.message,
            error: app.get('env') === 'development' ? err : {}
        });
    });
};