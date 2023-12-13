import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import db from "./models/index.js"
import articleRouter from "./Routes/article.js"
dotenv.config()

const app=express();
app.use(cors());
app.use(express.json())
app.use("/article", articleRouter)
app.use(express.urlencoded({extended:true}))

const PORT=process.env.PORT 

try {
    app.listen(PORT, ()=>{
        console.log(`server running on port ${PORT}`)
    });
    await db.sequelize.authenticate()
    console.log("Connection has been established successfully")
} catch (error ) {
    console.error(error)
}