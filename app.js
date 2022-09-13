import dotenv from 'dotenv'
dotenv.config();
import express from 'express'
import bodyParser from 'body-parser'
import connectdb from './db/connecctdb.js'
import userroute from './routes/user.js'
import authroute from './routes/auth.js'
import productroute from './routes/product.js'
const app = express()
const port = process.env.PORT || 5000
const DATABASE_URL = process.env.DATABASE_URL

//database connection
connectdb(DATABASE_URL);

//pass the json data
app.use(express.urlencoded({
    extended: true
  }));
app.use(express.json());

//route
app.use("/api/users",userroute);
app.use("/api/auth",authroute);
app.use("/api/product",productroute);

app.listen(port,()=>{
    console.log(`server listening on http://localhost:${port}`)
})
