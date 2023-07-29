const express =require('express')
const cors = require('cors');
const bodyparser = require('body-parser')
const app = express();
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");

//middlewares
require('dotenv').config()
app.use(cors({origin: true, credentials: true}));
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.use(cookieParser());
app.use(fileUpload({ createParentPath: true, }) );

//access static images
app.use(express.static('uploads'));

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
const messageRouter = require('../src/routes/chat')

app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);
app.use('/api/post', postRouter);
app.use('/api/chat', messageRouter)

//socket io connection
const http = require('http').createServer(app);
const io = require('socket.io')(http,{cors:{origin:['http://localhost:3000']}});
require('./socket.js')(io);


//server
// app.listen(process.env.PORT, () => console.log(`server started @ http://localhost:${process.env.PORT}`)) 
http.listen(process.env.PORT || 3000, function() {
  const host = http.address().address
  const port = http.address().port
  console.log('App listening at http://%s:%s', host, port)
});