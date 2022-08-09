module.exports = (sequelize, Sequelize) => {
    return sequelize.define(
      "prof",
      {
        id_professeur: {
          type: Sequelize.STRING,
        },
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
          },
        totalSalaire: {
            type: Sequelize.STRING,
          },
        eleve: {
            type: Sequelize.STRING,
          },
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
  