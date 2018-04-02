
module.exports = {
  'secret': 'pierfitness',
  'databaseMongoDb': 'mongodb://localhost:27017/test',
  'mongoUrl' : process.env.OPENSHIFT_MONGODB_DB_URL || process.env.MONGO_URL,
  'mongoServiceName' : process.env.DATABASE_SERVICE_NAME,
  'driver': 'mysql',
  'host' : process.env.OPENSHIFT_MYSQL_SERVICE_HOST || 'localhost',
  'mysqlPort' : process.env.OPENSHIFT_MYSQL_SERVICE_PORT || 3306,
  'user' : process.env.OPENSHIFT_MYSQL_USER || 'root' ,
  'database' : process.env.OPENSHIFT_MYSQL_DATABASE || 'smartfit',
  'password' : process.env.MYSQL_PASSWORD || 'control123!',
  'connectionUrl' : '',
  'saltRounds' : 10
};
