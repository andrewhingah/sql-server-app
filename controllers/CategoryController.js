const { sql, conn } = require("../connection/connect");
const fs = require('fs');
var rawdata = fs.readFileSync('./query/queries.json');
var queries = JSON.parse(rawdata);

class MainController {
  async getAllData(req, res) {
    try {
      const pool = await conn;
      const result = await pool.request().query(queries.getAllData);
      res.json(result.recordset);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  }

  async addNewData(req, res) {
    try {
      if (req.body.name != null) {
        const pool = await conn;
        console.log('pool: ', pool)
        const result = await pool
          .request()
          .input("name", sql.VarChar, req.body.name)
          .input("parentId", sql.Int, req.body.parentId)
          .query(queries.addNewData);
        res.json(result);
      } else {
        res.send("Please fill in the name");
      }
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  }
}

const controller = new MainController()
module.exports = controller;
