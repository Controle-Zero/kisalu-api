<div align="center">
  <a href="https://github.com/Controle-Zero/kisalu-api">
    <img src="https://i.imgur.com/y2m1PiH.png" alt="Logo" width="300">
  </a>

  <h3 align="center">Kisalu Server Side</h3>

  <p align="center">
    Kisalu's back-end source code readme file
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

</div>

<br />
<hr></hr>

## Requirements

- [**Node JS 16.X**](http://nodejs.org)
- [**Docker**](https://www.docker.com/get-started/)

## Installation

First of all, install the dependencies using de command below

```bash
npm install
```

## Local Tests

Make sure you have docker installed, then run

```bash
docker-compose up -d db redis
```

Once all images have been installed and started running, execute the command

```bash
npm run migrate-dev
```

### API Tests

```bash
npm run dev
```

### Websockets Tets

```bash
npm test
```
