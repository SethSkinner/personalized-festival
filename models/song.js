const { sequelize } = require(".");

module.exports = function(sequelize, DataTypes) {
  const Song = sequelize.define("Song", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    videoId: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      }
    }
  });

  // Song.associate = function(models) {
  //   Song.belongsTo(models.Attendee, {
  //     onDelete: "cascade"
  //   });
  // };

  return Song;
};
