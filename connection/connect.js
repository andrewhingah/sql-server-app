const sql = require("mssql");
const config = {
  user: "sa",
  password: "awhkv07069292dw",
  server: "localhost",
  database: "TestDB"
};

const connect = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log("Connected to database");
    return pool;
  })
  .catch(err => console.log("Database connection failed: ", err));

module.exports = { sql, connect };
