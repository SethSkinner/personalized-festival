/*const { sequelize } = require(".");

module.exports = function(sequelize, DataTypes) {
  const Artist = sequelize.define("Artist", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    song: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    videoID: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });

  Artist.associate = function(models) {
    Artist.belongsTo(models.Attendee, {
      onDelete: "cascade"
    });
  };

  return Artist;
};
*/