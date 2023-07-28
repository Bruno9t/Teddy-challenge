# Teddy challenge by Coodesh

## Objetivo do desafio
Desafio proposto pela empresa Teddy Open Finance para fins de seleção.

O Objetivo seria desenvolver uma aplicação web que gerasse emails temporários para o usuário usando a API do Dropmail https://dropmail.me/api/ e o framework Angular.

## Tecnologias principais usadas
- Angular(Angular Material)
- Node.js(Moment.js)
- Typescript
- Docker
- docker-compose
## Como usar o projeto

Como estamos utilizando Docker compose será necessário ter o Docker instalado, caso não tenha segue a documentação https://www.docker.com/get-started/.

Após instalado o Docker realize o clone deste projeto via ssh ou https.

Realizado o clone deste projeto, utilizaremos o site https://cors-anywhere.herokuapp.com/ para não termos problemas com o Cors, acessando o site clique para poder usar a API.

Para rodar o projeto basta acessar o clone do projeto onde esta o arquivo docker-compose.yml e executar via terminal o comando "docker-compose up".

Agora apenas aguarde ele realizar o build da imagem e rodar o container, finalizando acesse http://localhost:4200/.
