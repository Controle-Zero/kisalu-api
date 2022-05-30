<div align="center">
  <a href="https://github.com/Controle-Zero/kisalu-api">
    <img src="https://i.imgur.com/y2m1PiH.png" alt="Logo" width="300">
  </a>

  <h3 align="center">Kisalu Server Side</h3>

  <p align="center">
    Kisalu's back-end readme file
    <br />
    <a href="https://github.com/Controle-Zero/kisalu"><strong>Explore the front-end repo »</strong></a>
    <br />
    <br />
    <a href="https://github.com/Controle-Zero/kisalu-api/issues">Report Bug</a>
    ·
    <a href="https://github.com/Controle-Zero/kisalu-api/issues">Request Feature</a>
  </p>
</div>

<hr></hr>

<div align=center>
    <h2>Tech Stack</h2>
    <br />

<a href = "https://expressjs.com/">Express JS <img src="https://img.shields.io/node/v/express" alt="Logo" width="70"> </a>
·
<a href = "https://socket.io/">Socket Io <img src="https://img.shields.io/node/v/socket.io" alt="Logo" width="70"></a>
·
<a href = "https://www.prisma.io/">Prisma <img src="https://img.shields.io/node/v/prisma" alt="Logo" width="70"></a>
·
<a href = "https://jwt.io/">JWT <img src="https://img.shields.io/node/v/jsonwebtoken" alt="Logo" width="60"></a>
·
<a href = "https://www.typescriptlang.org/">TypeScript <img src="https://img.shields.io/node/v/typescript" alt="Logo" width="70"></a>

</div>

<br />
<hr></hr>

## Requirements

- [**Node JS 16.X**](http://nodejs.org)
- [**Docker**](https://www.docker.com/get-started/)

## Local Development

First of all, install the dependencies using the command below

```bash
npm install
```

### Setup the environment

Create a .env file in the root with the following structure

```sh
DATABASE_URL="postgresql://postgres:docker@localhost:5432/kisalu_local?schema=public"

MONGO_URL = "mongodb://kisalu_mongo:docker@127.0.0.1:27017/admin"

SECRET= "30b9dce7-08c2-4c22-8204-b9e41d624ab9"

SOCKETS_NAMESPACE = "Kisalu"
```

Make sure you have docker installed, then run

```bash
# This command will pull images (if not pulled yet) and iniate docker containers
docker-compose up -d
```

```bash
# Show all running containers
docker ps
```

Once all images have been installed and started running, execute the command

```bash
# This command will create the whole data base structure based on the schema.prisma file
npm run migrate-dev
```

### Live Test

Use the command below to start the server

```bash
npm run dev
```

Checkout the API's documentation (interactive)

```url
http://localhost:8080/api/doc
```

### Unit Tests

```bash
npm test
```

### Local Data Base

### Relational

To interact with the data base use (recommended) open-source clients such as:

- [BeeKeeper Studio](https://www.beekeeperstudio.io/)
- [DBeaver](https://dbeaver.io/)

Or, run the following command

```bash
npm run data-base
```

### Non-Relational

Open the following link to access Mongo-Express interface

```url
http://localhost:8081
```
