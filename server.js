const express = require ("express")
const app = express()
const mongoose = require("mongoose")
const PORT = 5000
const router =require("./routes/routes")

const MONGO_URI = "mongodb://localhost:27017/sample"

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use("/api", router)

mongoose.connect(MONGO_URI, {
    useNewUrlParser:true,
    useFindAndModify:false,
    useUnifiedTopology:true
})

mongoose.connection.once("open", function(){
    console.log("connected to db")
})

mongoose.connection.on("error", function(){
    console.log("connection error is " + error)
})


app.listen(PORT, function(){
    console.log(`Server is running on port ${PORT}`)
})


