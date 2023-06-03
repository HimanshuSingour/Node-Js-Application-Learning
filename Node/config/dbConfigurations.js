const mongoose = require('mongoose');

const connectDb = async () => {

    try {

        const connect = await mongoose.connect(process.env.MANGO_STRING);
        console.log("Connection Establish Successfully...")
        console.log("HOST: " + connect.connection.host)
        console.log("NAME: " + connect.connection.name)
        
    } catch (error) {
        console.log(error)
        
    }
}

module.exports = connectDb;