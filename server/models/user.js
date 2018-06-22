module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {

    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [0, 255]
      }
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [0, 255],
      },
    }

  });

  return User
}
