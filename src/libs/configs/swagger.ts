import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Kisalu API",
      version: "1.0.0",
      description: "Kisalu's interactive API documentation built using Swagger",
      contact: {
        name: "Controle Zero",
        url: "https://github.com/Controle-Zero",
        email: "ccontrolezero@gmail.com",
      },
    },
    servers: [
      {
        url: "http://localhost:8080",
        description: "Development Server",
      },
      {
        url: "https://uservices-api-teste.herokuapp.com/",
        description: "Production Server",
      },
    ],
  },
  apis: ["../../routes/*.routes.ts"],
};

const specs = swaggerJSDoc(options);
export default specs;
