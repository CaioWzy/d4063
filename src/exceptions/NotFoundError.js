const httpStatuses = require('../enums/HttpStatuses')

const BaseException = require('./BaseException')


class AuthenticationError extends BaseException {  
    constructor (message) {
        super(message)
        this.statusCode = httpStatuses.NOT_FOUND
    }
}

module.exports = AuthenticationError