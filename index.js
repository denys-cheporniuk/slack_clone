import express from 'express';
import SERVER from './schema';
import models from './models';

const APP = express();

// Middleware: GraphQL
SERVER.applyMiddleware({
  app: APP,
});

// Express: Port
const PORT = 4000;

// Express: Listener
models.sequelize.sync().then(() => {
  APP.listen();
});

export default APP;
