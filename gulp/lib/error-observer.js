module.exports = function (callback, errorHandler) {
    if (typeof errorHandler === 'undefined')
        errorHandler = console.log;
    return function (err) {
        if (err)
            errorHandler(err);
        callback()
    }
};