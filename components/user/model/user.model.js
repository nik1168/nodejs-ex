'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new Schema({
  name: String,
  password: String,
  admin: Boolean
});
mongoose.model('UserModel',UserSchema);