const Utils = require('../../src/Utils')


describe('Utils', () => {
    test('deve retornar o hash em sa512 a partir do nome e senha', () => {
        const [name, password] = ["Thiago", 123];

        const hash = Utils.hashPassword(name, password);

        expect(hash).toEqual('df945e9c00b0ac161840876e0df22ec5fcdca8ca70e67a0aa0c4b2e9a129f3d6af984e70cabceed5059daf7c9bb2e883ab9b279f0c4a524e4f71fadce9431776')
    })
})
