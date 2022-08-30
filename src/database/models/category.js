module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define("Category", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: DataTypes.STRING,
  }, {
    timestamps: false,
  });

/*   User.associate = (models) => {
    Job.hasOne(models.BlogPosts, {
      foreignKey: "userId",
      as: "Users"
    });
  };
 */
  return Category;
};