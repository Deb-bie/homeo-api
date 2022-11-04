const express = require("express")
const router = express.Router();

router.get("/", (rew, res)=>{
    res.status(200).json("This is the beds endpoint")
})

module.exports = router;