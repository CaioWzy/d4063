const AgentDto = require('./dtos/AgentDto');
const repository = require('./AgentsRepository')
const NotFoundError = require('../exceptions/NotFoundError')


const listAll = async (domain) => {
    const agentList = await repository.findAll(domain);

    return agentList.map(agent => new AgentDto(agent));
}

const create = async (domain, newAgent) => {
    newAgent.domain = domain;
    const agent = await repository.save(newAgent);

    return new AgentDto(await repository.findOne(domain, agent.insertedId));
}

const get = async (domain, id) => {
    const agent = await repository.findOne(domain, id);

    if (!agent) throw new NotFoundError("Object not found.");
    
    return new AgentDto(agent);
}

const update = async (domain, id, newAgent) => {
    await repository.update(domain, id, newAgent);

    const agent = await repository.findOne(domain, id);

    if (!agent) throw new NotFoundError("Object not found.");
    
    return new AgentDto(agent);
}

const destroy = async (domain, id, login) => repository.destroy(domain, id, login);

module.exports = {
    listAll,
    create,
    get,
    update,
    destroy
}