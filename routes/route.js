const express = require("express");
const controller = require("../controllers/CategoryController");

const router = express.Router();

router.get("/api/getAllData", controller.getAllData);
router.post("/api/addNewData", controller.addNewData);
router.put('/api/updateData', controller.updateData)

module.exports = router;
