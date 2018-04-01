
module.exports = {
  'secret': 'pierfitness',
  'databaseMongoDb': 'mongodb://localhost:27017/test',
  'mongoUrl' : process.env.OPENSHIFT_MONGODB_DB_URL || process.env.MONGO_URL,
  'mongoServiceName' : process.env.DATABASE_SERVICE_NAME,
  'driver': 'mysql',
  'host' : 'localhost',
  'mysqlPort' : 3306,
  'user' : 'root',
  'database' : 'smartfit',
  'password' : 'control123!',
  'connectionUrl' : '',
  'saltRounds' : 10
};
