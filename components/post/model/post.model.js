'use strict';
var DataTypes = require('sequelize');
var sequelize = require('../../../config/sequelize').db;
var Category = require('../../category/model/category.model').category;

var Post = sequelize.define('post', {
  id : {
    type:DataTypes.INTEGER,
    primaryKey: true
  },
  title : DataTypes.STRING,
  content : DataTypes.TEXT,
  image : DataTypes.STRING,
  category_id : {
    type : DataTypes.INTEGER,
    references: {
      model: Category,
      key: 'id'
    }
  },
  createdAt: DataTypes.DATE,
  modifiedAt : DataTypes.DATE,
  video : DataTypes.STRING
},{
  freezeTableName: true,
  tableName: 'posts',
  instanceMethods: {
    retrieveAll: function(onSuccess, onError) {
      Post.findAll({raw: false})
        .then(onSuccess).catch(onError);
    },
    retrieveById: function(post_id, onSuccess, onError) {
      Post.find({where: {id: post_id}}, {raw: true})
        .then(onSuccess).catch(onError);
    },
    add: function(onSuccess, onError) {
      Post.build(buildPost(this))
        .save().then(onSuccess).catch(onError);
    },
    updateById: function(post_id, onSuccess, onError) {
      Post.update({},{where: {id: post_id} })
        .then(onSuccess).catch(onError);
    },
    removeById: function(post_id, onSuccess, onError) {
      Post.destroy({where: {id: post_id}}).then(onSuccess).catch(onError);
    }
  }
});

/**
 * Builds a Post
 * @param self
 * @returns {{title, content, image: *|SVGImageElement, category_id: Post.category_id|{type, references}|*, createdAt, modifiedAt, video: *|boolean|MediaTrackConstraints}}
 */
function buildPost(self) {
  return {
    title : self.title,
    content : self.content,
    image : self.image,
    category_id : self.category_id,
    createdAt : self.createdAt,
    modifiedAt : self.modifiedAt,
    video : self.video
  }
}
Post.belongsTo(Category,{foreignKey:'category_id'});
module.exports.post = Post;