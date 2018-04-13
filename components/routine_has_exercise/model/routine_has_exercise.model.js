'use strict';
var DataTypes = require("sequelize");
var sequelize = require('../../../config/sequelize').db;
var Routine = require('../../routine/model/routine.model').routine;
var Exercise = require('../../exercise/model/exercise.model').exercise;
var Day = require('../../day/model/day.model').day;
var RoutineHasExercise = sequelize.define('routineHasExercise', {
  id : {
    type:DataTypes.INTEGER,
    primaryKey: true
  },
  routine_id : {
    type : DataTypes.INTEGER,
    references: {
      model: Routine,
      key: 'id'
    }
  },
  exercise_id : {
    type : DataTypes.INTEGER,
    references: {
      model: Exercise,
      key: 'id'
    }
  },
  day_id : {
    type : DataTypes.INTEGER,
    references: {
      model: Day,
      key: 'id'
    }
  },
  image : DataTypes.STRING,
  sets : DataTypes.INTEGER,
  reps : DataTypes.INTEGER
},{
  freezeTableName: true,
  tableName: 'routine_has_exercise',
  timestamps: false,
  instanceMethods: {
    retrieveAll: function(onSuccess, onError) {
      RoutineHasExercise.findAll({raw: true})
        .then(onSuccess).catch(onError);
    },
    retrieveById: function(routine_has_exercise_id, onSuccess, onError) {
      RoutineHasExercise.find({where: {id: routine_has_exercise_id}}, {raw: true})
        .then(onSuccess).catch(onError);
    },
    add: function(onSuccess, onError) {
      RoutineHasExercise.build(buildRoutineHasExercise(this))
        .save().then(onSuccess).catch(onError);
    },
    updateById: function(routine_has_exercise_id, onSuccess, onError) {
      RoutineHasExercise.update(buildRoutineHasExercise(this),{where: {id: routine_has_exercise_id} })
        .then(onSuccess).catch(onError);
    },
    removeById: function(routine_id,exercise_id,day_id, onSuccess, onError) {
      RoutineHasExercise.destroy({where: {routine_id: routine_id, exercise_id : exercise_id,day_id:day_id }}).then(onSuccess).catch(onError);
    },
    retrieveExercisesByRoutine: function (routine_id, onSuccess, onError) {
      var query = "SELECT a.*,d.name,e.name FROM exercise a, routine_has_exercise b, routine c, day d, muscular_group e, muscle f, exercise_has_muscle g\n" +
        "WHERE a.id = b.exercise_id\n" +
        "AND c.id = b.routine_id\n" +
        "AND d.id = b.day_id\n" +
        "AND a.id = g.exercise_id\n" +
        "AND f.id = g.muscle_id\n" +
        "AND f.muscular_group_id = e.id\n" +
        "AND c.id = :id";
      sequelize.query(query, {
        replacements: { id: routine_id },
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

/**
 * Build a exerciseHasMuscle
 * @param self
 * @returns {{name, createdAt: *|String|Boolean, modifiedAt: *}}
 */
function buildRoutineHasExercise(self) {
  return {
    routine_id : self.routine_id,
    exercise_id : self.exercise_id,
    day_id : self.day_id,
    image : self.image,
    sets : self.sets,
    reps : self.reps
  }
}

RoutineHasExercise.belongsTo(Routine,{foreignKey:'routine_id'});
RoutineHasExercise.belongsTo(Exercise,{foreignKey:'exercise_id'});
RoutineHasExercise.belongsTo(Day,{foreignKey:'day_id'});

module.exports.routineHasExercise = RoutineHasExercise;