const sql = require("mssql");
const config = {
  user: "sa",
  password: "",
  server: "localhost",
  database: "TestDB"
};

const conn = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log("Connected to database");
    return pool;
  })
  .catch(err => console.log("Database connection failed: ", err));

module.exports = { sql, conn };
