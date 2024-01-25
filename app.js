import express from 'express';
import dotenv from 'dotenv';
import router from './app.router.js';

const app = express()

dotenv.config()
app.use(express.urlencoded({extended: false}))
app.use(express.json())


app.use("/API", router)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log("Server is running Successfully!")
})