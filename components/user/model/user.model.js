'use strict';
var DataTypes = require('sequelize');
var sequelize = require('../../../config/sequelize').db;
var Role = require('../../role/model/role.model').role;

var User = sequelize.define('user', {
  id : {
    type:DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name : DataTypes.STRING,
  lastName : DataTypes.STRING,
  birthDate : DataTypes.DATEONLY,
  token: DataTypes.STRING,
  username: DataTypes.STRING,
  password: DataTypes.STRING,
  email: DataTypes.STRING,
  gender : DataTypes.STRING,
  firstTime : DataTypes.BOOLEAN,
  role_id : {
    type : DataTypes.INTEGER,
    references: {
      model: Role,
      key: 'id'
    }
  },
  image : DataTypes.STRING,
  createdAt: DataTypes.DATE,
  modifiedAt : DataTypes.DATE
},{
  freezeTableName: true,
  tableName: 'user',
  instanceMethods: {
    retrieveAll: function(onSuccess, onError) {
      User.findAll({raw: false})
        .then(onSuccess).catch(onError);
    },
    retrieveById: function(user_id, onSuccess, onError) {
      User.find({where: {id: user_id}}, {raw: true})
        .then(onSuccess).catch(onError);
    },
    retrieveByUsername : function(username,onSuccess,onError){
      User.find({where : {username : username}}, {raw : true})
        .then(onSuccess).catch(onError);
    },
    retrieveByToken : function(token,onSuccess,onError){
      User.find({where : {token : token}}, {raw : true})
        .then(onSuccess).catch(onError);
    },
    add: function(onSuccess, onError) {
      User.build(buildUser(this))
        .save().then(onSuccess).catch(onError);
    },
    updateById: function(user_id, onSuccess, onError) {
      User.update(buildUser(this),{where: {id: user_id} })
        .then(onSuccess).catch(onError);
    },
    removeById: function(user_id, onSuccess, onError) {
      User.destroy({where: {id: user_id}}).then(onSuccess).catch(onError);
    },
    retrieveByUsernameAndPassword : function(username,password,onSuccess,onError){
      User.find({where : {username : username, password : password}}, {raw : true})
        .then(onSuccess).catch(onError);
    },
    retrieveRoutineByUserId : function (onSuccess, onError) {
      var query = "SELECT b.*,c.active FROM user a, routine b, user_has_routine c\n" +
        "WHERE a.id = c.user_id\n" +
        "AND b.id = c.routine_id\n" +
        "AND a.id = :id";
      sequelize.query(query, {
        replacements: { id: '1' },
        type: sequelize.QueryTypes.SELECT
      })
        .then(function (users) {
          onSuccess(users)
        })
        .catch(function (reason) {
          onError(reason);
        })
    }
  }
});

function initUser(payload) {
  return {
    name : payload.name || '',
    lastName : payload.lastName || '',
    birthDate : payload.birthDate || '',
    token : payload.token || '',
    username: payload.username || '',
    password: payload.password || '',
    email : payload.email || '',
    gender : payload.gender || '',
    firstTime : payload.firstTime || false,
    role_id : payload.role_id,
    image : payload.image || '',
    createdAt : Date.now(),
    modifiedAt : Date.now()
  }
}

/**
 * Builds a user
 * @param self
 * @returns {{name, lastName: *|{type: string, xml: {name: string}}|spec.definitions.User.properties.lastName|{type, xml}, birthDate: *, token: *|null|token, username: *|string|{type: string, xml: {name: string}}|spec.definitions.User.properties.username|{type, xml}|string, password, email: *|email|{type, required, index}|string|{type: string, xml: {name: string}}|spec.definitions.User.properties.email, gender, firstTime: *, role_id: User.role_id|{type, references}|*}}
 */
function buildUser(self) {
  return {
    name : self.name,
    lastName : self.lastName,
    birthDate : self.birthDate,
    token : self.token,
    username: self.username,
    password: self.password,
    email : self.email,
    gender : self.gender,
    firstTime : self.firstTime,
    role_id : self.role_id,
    image : self.image,
    createdAt : self.createdAt,
    modifiedAt : self.modifiedAt
  }
}
User.belongsTo(Role,{foreignKey:'role_id'});
module.exports.initUser = initUser;
module.exports.user = User;