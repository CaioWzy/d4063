const service = require('./AgentsService')
const httpStatuses = require('../enums/HttpStatuses')


const index = async (req, res, next) => {
    const domain = req.getDomain();

    try {
        res.json(await service.listAll(domain));
    } catch (error) {
        next(error);
    }
};

const create = async (req, res, next) => {
    const domain = req.getDomain();
    const agent = req.body;

    try {
        res.status(httpStatuses.CREATED).json(await service.create(domain, agent));
    } catch (error) {
        next(error);
    }
};

const get = async (req, res, next) => {
    const domain = req.getDomain();
    const { id } = req.params

    try {
        res.json(await service.get(domain, id));
    } catch (error) {
        next(error);
    }
};

const update = async (req, res, next) => {
    const domain = req.getDomain();
    const { id } = req.params;
    const payload = req.body;

    try {
        res.json(await service.update(domain, id, payload));
    } catch (error) {
        next(error);
    }
};

const destroy = async (req, res, next) => {
    const domain = req.getDomain();
    const { id } = req.params;

    try {
        res.json(await service.destroy(domain, id));
    } catch (error) {
        next(error);
    }
};

const destroyByLogin = async (req, res, next) => {
    const domain = req.getDomain();
    const { login } = req.query;

    try {
        res.json(await service.destroy(domain, null, login));
    } catch (error) {
        next(error);
    }
};

module.exports = {
    index,
    create,
    get,
    update,
    destroy,
    destroyByLogin
}