const mongoose = require('mongoose')

const connectDB= async()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_DB_URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('Database connected');
    }
    catch(error){
        console.log(`error:${error}`);
        process.exit();
    }
    
}

module.exports = connectDB;
