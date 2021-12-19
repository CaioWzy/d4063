const repository = require('./AgentsRepository')

const listAll = async (domain) => repository.findAll(domain);

const create = async (domain, agent) => {
    agent.domain = domain;
    repository.save(agent);
}

module.exports = {
    listAll,
    create
}