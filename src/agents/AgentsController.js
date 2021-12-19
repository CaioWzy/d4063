const service = require('./AgentsService')


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
        res.json(await service.create(domain, agent));
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

const update = (req, res) => res.sendStatus(200);

const destroy = (req, res) => res.sendStatus(200);

module.exports = {
    index,
    create,
    get,
    update,
    destroy
}