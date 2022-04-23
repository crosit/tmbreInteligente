import config from './config/envs';
/* CHANGE <Example> for the name of the service */
export default {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "DocsSwagger<Example>",
      version: "1.0.0",
      descriptions: "API <Example>",
    },
    servers: [{ url: `http://localhost:${config.APP_PORT}` }],
  },
  apis: ["./src/routes/*.ts"]
};
