const express =require('express')
const cors = require('cors');
const bodyparser = require('body-parser')
const app = express();

//middlewares
require('dotenv').config()
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())


//server
app.listen(process.env.PORT, () => console.log(`server started @ http://localhost:${process.env.PORT}`)) 