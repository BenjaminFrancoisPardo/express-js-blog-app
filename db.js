require('dotenv').config();

const { MongoClient } = require('mongodb');

const port = process.env.PORT || 3000;

// Initialize server
(async () => {
  const dbConnectionString = `mongodb://${process.env.MONGO_ADMIN}:${process.env.MONGO_ADMIN_PASSWORD}@localhost:${process.env.MONGO_HOST_PORT}/${process.env.DB_NAME}?&authSource=admin`;
  const client = new MongoClient(dbConnectionString);

  await client.connect();

  module.exports = client;

  const app = require('./app');

  app.listen(port);
  console.info(
    `${process.env.APP_USERNAME}'s Blog App is listening on port `,
    port
  );
})();
