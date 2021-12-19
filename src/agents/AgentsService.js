const repository = require('./AgentsRepository')

const listAll = async (domain) => repository.findAll(domain)

module.exports = {
    listAll
}