const httpStatuses = require('../enums/HttpStatuses')


class BaseException extends Error {  
    constructor (message) {
        super(message)
        Error.captureStackTrace(this, this.constructor)

        this.name = this.constructor.name
        this.statusCode = httpStatuses.INTERNAL_SERVER_ERROR
    }

    getStatusCode() {
        return this.statusCode
    }

    getMessage() {
        return this.message
    }
}

module.exports = BaseException