const httpStatuses = require('../enums/HttpStatuses')

const BaseException = require('./BaseException')


class IntegrityError extends BaseException {  
    constructor (message) {
        super(message)
        this.statusCode = httpStatuses.CONFLICT
    }
}

module.exports = IntegrityError