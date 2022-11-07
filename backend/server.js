const express = require("express")
const { connectDB } = require("./db/config")
const dotenv = require("dotenv").config()
const PORT = process.env.PORT

connectDB()

const app = express()



// ROUTES
app.use("/api/categories", require("./routes/categories"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/beds", require("./routes/beds"));
app.use("/api/couches", require("./routes/couches"));
app.use("/api/diningsets", require("./routes/dining-sets"));
app.use("/api/tables", require("./routes/tables"));
app.use("/api/users", require("./routes/users"));




app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
});