'use strict';
var DataTypes = require("sequelize");
var sequelize = require('../../../config/sequelize').db;
var Exercise = require('../../exercise/model/exercise.model').exercise;
var Muscle = require('../../muscle/model/muscle.model').muscle;
var ExerciseHasMuscle = sequelize.define('exerciseHasMuscle', {
  id : {
    type:DataTypes.INTEGER,
    primaryKey: true
  },
  exercise_id : {
    type : DataTypes.INTEGER,
    references: {
      model: Exercise,
      key: 'id'
    }
  },
  muscle_id : {
    type : DataTypes.INTEGER,
    references: {
      model: Muscle,
      key: 'id'
    }
  }
},{
  freezeTableName: true,
  tableName: 'exercise_has_muscle',
  timestamps: false,
  instanceMethods: {
    retrieveAll: function(onSuccess, onError) {
      ExerciseHasMuscle.findAll({raw: true})
        .then(onSuccess).catch(onError);
    },
    retrieveById: function(exercise_has_muscle_id, onSuccess, onError) {
      ExerciseHasMuscle.find({where: {id: exercise_has_muscle_id}}, {raw: true})
        .then(onSuccess).catch(onError);
    },
    add: function(onSuccess, onError) {
      ExerciseHasMuscle.build(buildExerciseHasMuscle(this))
        .save().then(onSuccess).catch(onError);
    },
    updateById: function(exercise_has_muscle_id, onSuccess, onError) {
      ExerciseHasMuscle.update(buildExerciseHasMuscle(this),{where: {id: exercise_has_muscle_id} })
        .then(onSuccess).catch(onError);
    },
    removeById: function(exercise_id,muscle_id, onSuccess, onError) {
      ExerciseHasMuscle.destroy({where: {exercise_id: exercise_id, muscle_id : muscle_id}}).then(onSuccess).catch(onError);
    }
  }
});

/**
 * Build a exerciseHasMuscle
 * @param self
 * @returns {{name, createdAt: *|String|Boolean, modifiedAt: *}}
 */
function buildExerciseHasMuscle(self) {
  return {
    exercise_id : self.exercise_id,
    muscle_id : self.muscle_id
  }
}

ExerciseHasMuscle.belongsTo(Exercise,{foreignKey:'exercise_id'});
ExerciseHasMuscle.belongsTo(Muscle,{foreignKey:'muscle_id'});

module.exports.exerciseHasMuscle = ExerciseHasMuscle;