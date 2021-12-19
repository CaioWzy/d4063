function getDomain() {
    return "digitro";
}


const getDomainHandler = (req, res, next) => {
    req.getDomain = getDomain;
    return next()
}

module.exports = {
    getDomainHandler
}