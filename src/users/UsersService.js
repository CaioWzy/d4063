const jwt = require('jsonwebtoken');

const repository = require('./UsersRepository');


const authenticate = async (clientId, clientSecret) => {
    const user = await repository.findOne(clientId, clientSecret);
    
    if (!user) throw new Error("Not authenticated");

    const { domain } = user;

    const token = jwt.sign({ clientId, domain }, 'shhhhh');

    return {
        clientId,
        domain,
        token
    }
}

module.exports = {
    authenticate
}