const { sql, conn } = require("../connection/connect");
const fs = require("fs");
var rawdata = fs.readFileSync("./query/queries.json");
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
        const result = await pool
          .request()
          .input("name", sql.VarChar, req.body.name)
          .input("parentId", sql.VarChar, req.body.parentId)
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

  async updateData(req, res) {
    try {
      if (req.body.name !== null || req.body.parentId !== null) {
        const pool = await conn;
        const result = await pool
          .request()
          .input("id", sql.VarChar, req.body.id)
          .input("newName", sql.VarChar, req.body.newName)
          .input("newParentId", sql.VarChar, req.body.newParentId)
          .query(queries.updateData);
        res.json(result);
      } else {
        res.send("Either one or two fields required");
      }
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  }
}

const controller = new MainController();
module.exports = controller;
