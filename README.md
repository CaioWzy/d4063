
# Configuração

1. Na pasta raiz rode o `docker-compose build && docker-compose up`
2. Uma vez com os dois serviços rodando, o primeiro o de API e o segundo o MongoDB, conecte com o MongoDB diretamente (as credenciais são root@123 e a porta de acesso do container está propositalmene exposta para este fim) e cadastre uma credencial de acesso à API seguindo os passos abaixo:
		a. Crie um banco de dados chamado 'd4063' com uma collection chamada 'users' e dentro desta um registro de usuário como exemplificado a seguir:
		`{  
            "clientId": "empresadev",
		    "clientSecret": "abcdef",
		    "domain": "empresa"
		}`
3. Uma vez cadastrado o usuário de acesso, gere o token fazendo uma requisição do tipo POST à endpoint {{baseUrl}}/v1/public/users/auth com o seguinte corpo:
    `
    {
        "clientId": "digitro",
        "clientSecret": "123"
    }`
4. Pronto, uma vez obtido o token, use-o como o valor de access_token na header de cada requisição feita.