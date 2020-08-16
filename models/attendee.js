const { sequelize } = require(".");

module.exports = function(sequelize, DataTypes)
 {
  const Attendee = sequelize.define("Attendee", {
    name: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [1]
    }
  });

  Attendee.associate = function(models) {
    Attendee.belongsTo(models.User);
    Attendee.hasMany(models.Artist, {
      onDelete: "cascade"
    });
  };

//   Attendee.associate = function(models) {
//     Attendee.hasMany(models.Post, {
//       onDelete: "cascade"
//     });
//   };

  return Attendee;
};
