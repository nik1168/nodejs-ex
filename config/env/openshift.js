
module.exports = {
  'secret': 'pierfitness',
  'databaseMongoDb': 'mongodb://localhost:27017/test',
  'driver': 'mongoDb',
  'mongoUrl' : process.env.OPENSHIFT_MONGODB_DB_URL || process.env.MONGO_URL,
  'mongoServiceName' : process.env.DATABASE_SERVICE_NAME,
  // 'mongoHost'  : process.env[process.env.DATABASE_SERVICE_NAME() + '_SERVICE_HOST'],
  // 'mongoPort' : process.env[process.env.DATABASE_SERVICE_NAME() + '_SERVICE_PORT'],
  // 'mongoDatabase' : process.env[process.env.DATABASE_SERVICE_NAME() + '_DATABASE'],
  // 'mongoPassword' : process.env[process.env.DATABASE_SERVICE_NAME() + '_PASSWORD'],
  // 'mongoUser' : process.env[process.env.DATABASE_SERVICE_NAME() + '_USER'],
  // 'connectionUrl' : process.env.OPENSHIFT_MYSQL_DB_URL,
  'saltRounds' : 10
};