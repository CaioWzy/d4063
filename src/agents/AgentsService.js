const repository = require('./AgentsRepository')

const listAll = async (domain) => repository.findAll(domain);

const create = async (domain, agent) => {
    agent.domain = domain;
    return repository.save(agent);
}

const get = async (domain, id) => repository.findOne(domain, id);

const update = async (domain, id, agent) => repository.update(domain, id, agent);

const destroy = async (domain, id, login) => repository.destroy(domain, id, login);

module.exports = {
    listAll,
    create,
    get,
    update,
    destroy
}