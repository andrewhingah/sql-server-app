const sql = require("mssql");
const connect = function() {
  const conn = new sql.ConnectionPool({
    user: "sa",
    password: "<>",
    server: "localhost",
    database: "TestDB"
  });
  return conn;
};

module.exports = connect;
