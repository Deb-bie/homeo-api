const express = require("express")
const router = express.Router();

router.get("/", (rew, res)=>{
    res.status(200).json("This is the couches endpoint")
})

module.exports = router;