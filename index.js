// const express = "express"
import express from "express"
import cors from "cors"
// Step 1
import path from"path"
import dotenv from "dotenv"
dotenv.config()


const app = express()
app.use(cors())
const port = process.env.PORT || 5000;
// Step 2
const __dirname = path.resolve()


// Step 3
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname,"/frontend/build")));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname,"frontend","build","index.html"));
    })
}

var count = 0
app.get('/', (req, res) => { 
    count += 1
    console.log("Here::",count)
    res.send("Backend is connected with frontend!! Congratulations...Testaainag 1")
})

app.listen(port,()=> console.log(`Server is running on PORT: ${port}`))