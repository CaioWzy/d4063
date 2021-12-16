const httpStatuses = require('../enums/HttpStatuses');


const index = (req, res) => res.sendStatus(httpStatuses.OK);

module.exports = {
    index
}