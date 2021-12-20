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
        data = jwt.verify(token, process.env.SECRET_KEY);
    } catch(error) {
        return next(new AuthenticationError("Invalid access token!"));
    }

    if (!data && !data.domain) return next(new AuthenticationError("Invalid access token!"));

    req.__domain = data.domain;
    req.getDomain = getDomain;

    next()
}

const globalErrorHandler = (error, req, res, next) => {
    console.log(error);

    if (error instanceof BaseException) {
        res.status(error.getStatusCode()).send(error.getMessage());
        return;
    }
    
    res.sendStatus(HttpStatuses.INTERNAL_SERVER_ERROR);
}


module.exports = {
    authenticationHandler,
    globalErrorHandler
}