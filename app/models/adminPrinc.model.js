module.exports = (sequelize, Sequelize) => {
    return sequelize.define(
      "admin_principale",
      {
        nom: {
          type: Sequelize.STRING,
        },
        prenom: {
          type: Sequelize.STRING,
        },
        email: {
          type: Sequelize.STRING,
        },
        password: {
          type: Sequelize.STRING,
        },
        numTel: {
            type: Sequelize.STRING,
          }
      },
      {
        freezeTableName: true,
        defaultScope: {
          attributes: { exclude: ["createdAt", "updatedAt"] },
        },
        //hathé bch tokked archivé f blast deleted
        paranoid: true,
      }
    );
  };
  