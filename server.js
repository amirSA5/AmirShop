require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const cookieParser = require('cookie-parser');


const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(fileUpload({
    useTempFiles : true
}))

// Routes
app.use('/user', require('./routers/userRouter'));
app.use('/api', require('./routers/categoryRouter'));
app.use('/api', require('./routers/upload'));
app.use('/api', require('./routers/productRouter'));
app.use('/api', require('./routers/paymentRouter'));



// Connect to mongodb
const URI = process.env.MONGODB_URI
mongoose.connect(URI, err=>{
    if(err) throw err;
    console.log('Connected To Mongodb')
});


const PORT = process.env.PORT || 5000 ;
app.listen(PORT, ()=>{
    console.log('Server is running on port',PORT)
});
