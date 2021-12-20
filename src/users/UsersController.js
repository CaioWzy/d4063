const service = require('./UsersService');

const authenticate = async (req, res, next) => {
    const { clientId, clientSecret } = req.body;

    try {
        res.json(await service.authenticate(clientId, clientSecret));
    } catch (error) {
        next(error);
    }
};

module.exports = {
    authenticate
}