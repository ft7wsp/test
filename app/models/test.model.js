module.exports = (sequelize, Sequelize) => {
  return sequelize.define(
    "test",
    {
      title: {
        type: Sequelize.STRING,
      },
      descriptionhithere: {
        type: Sequelize.STRING,
      },
      color: {
        type: Sequelize.STRING,
      },
      ownerId: {
        type: Sequelize.STRING,
      },
      // orgId: {
      //   type: Sequelize.STRING,
      // },
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
