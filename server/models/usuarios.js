module.exports = function(sequelize, DataTypes) {
  var Usuarios = sequelize.define('Usuarios', {

    nome: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [0, 255]
      }
    },

    endereco: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [0, 255]
      }
    },

    bairro: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [0, 100]
      }
    },

    cep: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [0, 15]
      }
    },

    cidade: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [0, 100]
      }
    },

    uf: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [0, 2]
      }
    },

    cpf: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [0, 16]
      }
    },

    login: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [0, 105]
      }
    },

    senha: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [0, 255],
      },
    }

  });

  return Usuarios
}
