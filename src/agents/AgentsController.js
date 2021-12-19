const service = require('./AgentsService')


const index = async (req, res, next) => {
    try {
        res.json(await service.listAll())
    } catch (error) {
        next(error)
    }
};

const create = (req, res) => res.sendStatus(200);

const get = (req, res) => res.sendStatus(200);

const update = (req, res) => res.sendStatus(200);

const destroy = (req, res) => res.sendStatus(200);

module.exports = {
    index,
    create,
    get,
    update,
    destroy
}