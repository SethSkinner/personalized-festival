module.exports = function(sequelize, DataTypes) {
  const Attendee = sequelize.define("Attendee", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });

  Attendee.associate = function(models) {
    Attendee.belongsTo(models.User);
    Attendee.hasMany(models.Song, {
      onDelete: "cascade"
    });
  };

  // Attendee.associate = function(models) {
  //   Attendee.hasMany(models.Post, {
  //     onDelete: "cascade"
  //   });
  // };

  return Attendee;
};
