# KISALU's (Back-end)🌐

Kisalu server-side structure

## Authors

- [@Reginaldo Reis](https://www.github.com/RegiReis7)
- [@Rafael Willen](https://github.com/rafaelwillen)
- [@Roberto Lemos](https://github.com/roblemos1)

## Tech Stack

- [**Node JS**](https://nodejs.org)
- [**Express**](https://expressjs.com/)
- [**Socket.io**](https://socket.io/)
- [**Prisma**](https://www.prisma.io/)

## Requirements

- [NodeJS v16.X +](http://nodejs.org)
- [Docker](https://www.docker.com/get-started/)

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