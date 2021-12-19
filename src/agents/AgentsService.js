const repository = require('./AgentsRepository')

const listAll = async (domain) => repository.findAll(domain);

const create = async (domain, agent) => {
    agent.domain = domain;
    return repository.save(agent);
}

const get = async (domain, id) => repository.findOne(domain, id);

module.exports = {
    listAll,
    create,
    get
}