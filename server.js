require('dotenv').config();
const express = require('express');
const app = express();
const router = require('./router/auth-route');
const connectDB = require('./utils/db');
app.use(express.json());

app.use("/api/", router)

PORT = 5000;

connectDB().then(()=>{
app.listen(PORT, ()=>{console.log(`Sever is Running on : ${PORT}`)});
});