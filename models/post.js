module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define("Post", {
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  });

  Post.associate = function(models) {
    // We're saying that a Post should belong to an User
    // A Post can't be created without an User due to the foreign key constraint
    Post.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Post;
};
