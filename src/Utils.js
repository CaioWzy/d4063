const crypto = require('crypto')


const hashPassword = (name, password) =>  {
    const sha512 = crypto.createHash('sha512');
    sha512.update(`${name}${password}`, 'utf-8');

    return sha512.digest('hex');
}

module.exports = {
    hashPassword
}