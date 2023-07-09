const express =require('express')
const cors = require('cors');
const bodyparser = require('body-parser')
const app = express();
const cookieParser = require("cookie-parser");

//middlewares
require('dotenv').config()
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.use(cookieParser());

//mongoose connection code
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_LOCALHOST, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (error) => console.error("db error ::: ",error))
db.once('open', () => console.log("database connected..."))

//API routes
const authRouter = require('../src/routes/auth');
const userRouter = require('../src/routes/user');
const postRouter = require('../src/routes/post');

app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);
app.use('/api/post', postRouter);


//server
app.listen(process.env.PORT, () => console.log(`server started @ http://localhost:${process.env.PORT}`)) 