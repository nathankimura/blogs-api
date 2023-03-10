# Blogs API

# Sobre o projeto

Projeto backend para gerenciamento de um blog com um CRUD simples (Criar, Ler, Atualizar, Deletar) para posts. Além disso a API conta com sitema para realização de login de usuário.

# Tecnologias utilizadas
## Back end
- Node.js
- Express
- MySQL
- Sequelize
- Docker
- JWT

# Como executar o projeto

## Back end
Pré-requisitos: npm / docker rodando

```bash
# clonar repositório
git clone git@github.com:nathankimura/blogs-api.git

# entrar na pasta da aplicação
cd blogs-api

# executar o projeto tanto no ubuntu quanto no windows com wsl

docker-compose up -d --build // para iniciar aplicação
docker exec -it blogs_api bash // para abrir o bash do container da api no modo iterativo
npm install // para instalar as dependencias dentro do container
npm run prestart // para criar o banco de dados e realizar migrações
npm run seed // para popular o banco de dados
npm run debug // para rodar a aplicação
npm run drop // caso for necessário dropar o banco de dados
docker-compose down --remove-orphans // para parar a aplicação e remover containers
```
Após executar os comandos acima, já é possível realizar requisições para a api seguindo os endpoints abaixo.

### Endpoints

#### User

| Método HTTP | Ação | URL/endpoint |
|---|---|---|
| `POST` | Crie um novo usuário | http://localhost:3000/user |
| `POST` | Realize login com um usuário já cadastrado | http://localhost:3000/login |
| `GET` | Retorna todos os usuários cadastrados | http://localhost:3000/user | // passando authorization com o token no header da requisição
| `GET` | Retorna um usuário específico referente ao id passado na url | http://localhost:3000/user/:id | // passando authorization com o token no header da requisição
| `DELETE` | Remove um usuário | http://localhost:3000/user/me | // passando authorization com o token no header da requisição

Exemplo de JSON para enviar na requisição POST para /user:

```
{
 "displayName": "username example",
 "email": "example@email.com",
 "password": "pass_example",
 "image": "https://picsum.photos/1920/1080"
}
```

Exemplo de JSON para enviar na requisição POST para /login:

```
Body example:
{
 "email": "example@email.com",
 "password": "pass_example",
}
```

Para requisições GET ou DELETE, é necessário passar no Header da requisição uma chave "authorization" com o token gerado em uma das rotas POST para /user ou /login.

#### Category

| Método HTTP | Ação | URL/endpoint |
|---|---|---|
| `POST` | Crie um novo usuário | http://localhost:3000/categories |
| `GET` | Retorna todas as categorias cadastradas no banco de dados | http://localhost:3000/categories | // passando authorization com o token no header da requisição

Exemplo de JSON para enviar na requisição POST para /categories:

```
{
 "name": "category_name",
}
```

Para a requisição GET , é necessário passar no Header da requisição uma chave "authorization" com o token gerado em uma das rotas POST para /user ou /login.

#### Post

| Método HTTP | Ação | URL/endpoint |
|---|---|---|
| `POST` | Crie um novo post | http://localhost:3000/post |
| `PUT` | Edite um post existente referente ao id passado na ulr | http://localhost:3000/post/:id |
| `GET` | Retorna todos os posts cadastrados | http://localhost:3000/post | // passando authorization com o token no header da requisição
| `GET` | Retorna um post específico referente ao id passado na url | http://localhost:3000/post/:id | // passando authorization com o token no header da requisição
| `GET` | Retorna posts que contenham a palavra passada na url | http://localhost:3000/post/search?q={search_query} | // passando authorization com o token no header da requisição
| `DELETE` | Remove um usuário | http://localhost:3000/post/:id | // passando authorization com o token no header da requisição

Exemplo de JSON para enviar na requisição POST para /post:

```
{
 "title": "new title example",
 "content": "new content example",
 "categoryIds": [1, 2]
}
```

Exemplo de JSON para enviar na requisição PUT para /post/:id:

```
{
 "title": "updated title example",
 "content": "updated content example"
}
```
Para todas as requisições referentes a Posts é necessário passar no Header da requisição uma chave "authorization" com o token gerado em uma das rotas POST para /user ou /login.

# Autor

Nathan Kimura Maciel

https://www.linkedin.com/in/nathan-kimura/
