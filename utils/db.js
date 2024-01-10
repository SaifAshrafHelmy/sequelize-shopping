import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('seq-dev', 'postgres', 'pass123', {
  host: 'localhost',
  dialect: 'postgres',
  logging: console.log,
});

const main = async () => {
  try {
    const seqConnection = await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    return seqConnection;
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

const seqConnection = await main();
export default seqConnection;
