const express = require("express")
const cors = require("cors")
const { connectDB } = require("./db/config")
const dotenv = require("dotenv").config()
const PORT = process.env.PORT

connectDB()

const app = express()



// in order to post data in json
app.use(cors())
app.use(express.json()); 

// ROUTES
app.use("/api/categories", require("./routes/categories"));
app.use("/api/products", require("./routes/products"))


// error handling midddleware

app.use((err,req,res,next) => {
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong"
    return res.status(500).json({
        success:false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    })
})


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
});