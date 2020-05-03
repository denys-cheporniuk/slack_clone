import Sequelize from 'sequelize';

const sequelize = new Sequelize('slack', 'postgres', 'postgres', {
  dialect: 'postgres',
});

const models = {
  User: sequelize.import('./user'),
  Channel: sequelize.import('./channel'),
  Team: sequelize.import('./team'),
  Message: sequelize.import('./message'),
};

Object.keys(models).forEach((modeName) => {
  if ('associate' in models[modeName]) {
    models[modeName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;
