const express = require('express');
const router = express.Router();

const polygonController = require('../controllers/polygonController');



//polygon routes

router.post("/polygonuser/polygonadd", polygonController.polygonadd);
router.get("/polygonuser/polygonget", polygonController.polygonget);
router.put("/polygonuser/polygonupdate/:id", polygonController.polygonupdate);
router.delete("/polygonuser/polygondelete/:id", polygonController.polygondelete);
router.get("/polygonuser/get/:id", polygonController.polygongetbyid);
router.get("/polygonuser/getbyuserID/:id", polygonController.getbyuserID);
module.exports = router;