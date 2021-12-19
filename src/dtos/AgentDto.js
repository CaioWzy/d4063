class AgentDto {

    constructor({_id, name, login, medias, domain}) {
        this.id = _id,
        this.name = name,
        this.login = login
        this.medias = medias
        this.domain = domain
    }
}

module.exports = AgentDto