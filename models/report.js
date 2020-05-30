'use strict';
module.exports = (sequelize, DataTypes) => {

  const { Model } = sequelize.Sequelize;

  class Report extends Model {}

  Report.init({
    report: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Report case can\'t be empty'
        },
        isInt: {
          msg: 'Report case only accept integer value'
        },
        min: {
          args: [1],
          msg: 'Report case must be greater than 0'
        }
      }
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Users",
        key: "id"
      },
      onUpdate: 'cascade',
      onDelete: 'cascade',
      hooks: true,
      validate: {
        notEmpty: {
          msg: 'UserId can\'t be empty'
        }
      }
    },
    CountryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Countries",
        key: "id"
      },
      onUpdate: 'cascade',
      onDelete: 'cascade',
      hooks: true,
      validate: {
        notEmpty: {
          msg: 'Country Name can\'t be empty'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Report',
    hooks: {
      beforeCreate(report) {
        const { models } = sequelize;

        return models.Country
          .findByPk(report.CountryId)
          .then(country => {
            country.cases += +report.report;

            return models.Country
              .update({
                cases: country.cases
              }, {
                where: {
                  id: report.CountryId
                }
              })
          })
          .catch(err => {
            throw(err);
          })
      },
      beforeBulkDestroy(options) {
        options.individualHooks = true;
      },
      beforeDestroy(report) {
        const { models } = sequelize;

        return models.Country
          .findByPk(report.CountryId)
          .then(country => {
            country.cases -= +report.report;

            return models.Country
              .update({
                cases: country.cases
              }, {
                where: {
                  id: report.CountryId
                }
              })
          })
          .catch(err => {
            throw(err);
          })
      }
    }
  });
  Report.associate = function(models) {
    Report.belongsTo(models.User);
    Report.belongsTo(models.Country);
  };
  return Report;
};