const express = require("express");
const router = express.Router();
const jobcontroller = require("../controller/job.controller");

router.post("/create", jobcontroller.createJob);

router.get("/list", jobcontroller.listJob);

router.patch("/edit", jobcontroller.editJob);

router.delete("/delete",jobcontroller.deleteJob );

module.exports = router;