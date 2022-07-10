import dotenv from 'dotenv'
dotenv.config();
import express from 'express'
import connectdb from './db/connecctdb.js'
const app = express()
const port = process.env.PORT || 5000
 
//database connection
connectdb();

app.listen(port,()=>{
    console.log(`server listening on http://localhost:${port}`)
})
