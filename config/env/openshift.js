
module.exports = {
  'secret': 'pierfitness',
  'databaseMongoDb': 'mongodb://localhost:27017/pierfitness',
  'driver': 'mongoDb',
  'mongoServiceName' : process.env.DATABASE_SERVICE_NAME.toUpperCase(),
  'mongoHost'  : process.env[process.env.DATABASE_SERVICE_NAME.toUpperCase() + '_SERVICE_HOST'],
  'mongoPort' : process.env[process.env.DATABASE_SERVICE_NAME.toUpperCase() + '_SERVICE_PORT'],
  'mongoDatabase' : process.env[process.env.DATABASE_SERVICE_NAME.toUpperCase() + '_DATABASE'],
  'mongoPassword' : process.env[process.env.DATABASE_SERVICE_NAME.toUpperCase() + '_PASSWORD'],
  'mongoUser' : process.env[process.env.DATABASE_SERVICE_NAME.toUpperCase() + '_USER'],
  'connectionUrl' : process.env.OPENSHIFT_MYSQL_DB_URL,
  'saltRounds' : 10
};