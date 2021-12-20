const jwt = require('jsonwebtoken');
const AuthenticationError = require('../exceptions/AuthenticationError');

const repository = require('./UsersRepository');


const authenticate = async (clientId, clientSecret) => {
    const user = await repository.findOne(clientId, clientSecret);
    
    if (!user && !user.domain) throw new AuthenticationError("Invalid credentials.");

    const { domain } = user;

    const token = jwt.sign({ clientId, domain }, process.env.SECRET_KEY);

    return {
        clientId,
        domain,
        token
    }
}

module.exports = {
    authenticate
}