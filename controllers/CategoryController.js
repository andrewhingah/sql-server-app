const express = require("express");
const router = express.Router();
const sql = require("mssql");
const conn = require("../connection/connect");

router.route("/").get(function(req, res) {
  conn
    .connect()
    .then(function() {
      const sqlQuery = "SELECT * FROM categories";
      const req = new sql.Request(conn);
      req.query(sqlQuery).then(function(recordset) {
        res.json(recordset.recordset);
        conn.close();
      });
    })
    .catch(function(err) {
      conn.close();
      res.status(400).send("Error while inserting data");
    });
});

router.route("/api/categories").post(function(req, res) {
  conn
    .connect()
    .then(function() {
      const transaction = new sql.Transaction(conn);
      transaction
        .begin()
        .then(function() {
          const request = new sql.Request(transaction);
          request.input("Name", sql.VarChar(255), req.body.Name);
          request.input("CategoryId", sql.Int, req.body.CategoryId);
          request
            .execute("Usp_InsertCategory")
            .then(function() {
              transaction
                .commit()
                .then(function(recordset) {
                  conn.close();
                  res.status(200).send(req.body);
                })
                .catch(function(err) {
                  conn.close();
                  res.status(400).send("Error while inserting data");
                });
            })
            .catch(function(err) {
              conn.close();
              res.status(400).send("Error while inserting data");
            });
        })
        .catch(function(err) {
          conn.close();
          res.status(400).send("Error while inserting data");
        });
    })
    .catch(function(err) {
      conn.close();
      res.status(400).send("Error while inserting data");
    });
});
