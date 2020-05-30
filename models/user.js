'use strict';
module.exports = (sequelize, DataTypes) => {

  const { Model } = sequelize.Sequelize;

  class User extends Model {}

  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'username already exists'
      },
      validate: {
        notEmpty: {
          msg: 'Usernma ecan\'t be left empty'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'password can\'t be left empty'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User'
  });
  User.associate = function(models) {
    User.hasMany(models.Report)
  };
  return User;
};