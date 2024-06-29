

const mongoose = require('mongoose');

// URI = 'mongodb://127.0.0.1:27017/mern_admin'

MONGODB_URII = process.env.MONGODB_URI;
const  connectDB = async ()=>{
    try {
        await mongoose.connect(MONGODB_URII);
        console.log('DB Connected...');
    } catch (error) {
        console.log('Error connecting..')
        process.exit(1);
        
    }
   
}

module.exports = connectDB;