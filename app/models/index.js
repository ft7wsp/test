const Sequelize = require("sequelize");
const dbConfig = require("../config/db.config");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  logging: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    idle: dbConfig.pool.idle,
  },
});

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

//tayetelha hna bch taamel creation
db.calendar = require("./test.model.js")(sequelize, Sequelize);
db.prof = require("./prof.model.js")(sequelize, Sequelize);
db.eleve = require("./eleve.model.js")(sequelize, Sequelize);
db.admin = require("./admin.model")(sequelize, Sequelize);
db.adminPrinc = require("./adminPrinc.model")(sequelize, Sequelize);




db.sequelize.sync({ force: false })
.then(() => {
    console.log('yes re-sync done!')
})

module.exports = db;
