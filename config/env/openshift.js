
module.exports = {
  'secret': 'smartfit',
  'databaseMongoDb': 'mongodb://localhost:27017/test',
  'mongoUrl' : process.env.OPENSHIFT_MONGODB_DB_URL || process.env.MONGO_URL,
  'mongoServiceName' : process.env.DATABASE_SERVICE_NAME,
  'driver': 'mysql',
  'hostName' :  process.env.HOST_NAME_MAIN || '0.0.0.0:8080',
  'host' : process.env.MYSQL_SERVICE_HOST || 'localhost',
  'mysqlPort' : process.env.MYSQL_SERVICE_PORT || 3306,
  'user' : process.env.MYSQL_USER || 'root' ,
  'database' : process.env.MYSQL_DATABASE || 'smartfit',
  'password' : process.env.MYSQL_PASSWORD || 'control123!',
  'connectionUrl' : '',
  'oauthFacebookInfo' : 'https://graph.facebook.com/me',
  'saltRounds' : 10
};
