import express from 'express';
import SERVER from './schema';

const APP = express();

// Middleware: GraphQL
SERVER.applyMiddleware({
  app: APP,
});

// Express: Port
const PORT = 4000 || process.env;

// Express: Listener
APP.listen(PORT, () => {
  console.log(`The server has started on port: ${PORT}`);
  console.log(`http://localhost:${PORT}/graphql`);
});


export default APP;
