const jwt = require('jsonwebtoken');

const BaseException = require('./exceptions/BaseException')
const AuthenticationError = require('./exceptions/AuthenticationError');
const HttpStatuses = require('./enums/HttpStatuses');


function getDomain() {
    return this.__domain;
}

const authenticationHandler = (req, res, next) => {
    const { access_token: token } = req.headers

    let data = null;

    try {
        data = jwt.verify(token, 'shhhhh');
    } catch(error) {
        return next(new AuthenticationError("Invalid access token!"));
    }

    if (!data && !data.domain) return next(new AuthenticationError("Invalid access token!"));

    req.__domain = data.domain;
    req.getDomain = getDomain;

    next()
}

const globalErrorHandler = (err, req, res, next) => {
    if (err instanceof BaseException) {
        res.status(err.getStatusCode()).send(err.getMessage());
        return;
    }
    
    res.sendStatus(HttpStatuses.INTERNAL_SERVER_ERROR);
}


module.exports = {
    authenticationHandler,
    globalErrorHandler
}