import express from 'express';
import SERVER from './schema';
import models from './models';

const APP = express();

// Middleware: GraphQL
SERVER.applyMiddleware({
  app: APP,
});

// Express: Listener
models.sequelize.sync({ force: true }).then(() => {
  APP.listen();
});

export default APP;
