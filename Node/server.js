//Configurtion
const dotenv = require("dotenv").config();
const port = process.env.PORT;

// Server or APIs creation
const express = require("express");
const errorHandler = require("./middleware/errorHandler");

//connect mongoose db 
const connectDb = require('./config/dbConfigurations');
connectDb();

const app = express();
//APi Creating
app.use(express.json()); // we use becz we can we can get the request from the client in json formate
app.use("/api/contacts", require("./Routes/ContactRoutes"));
app.use("/api/users", require("./Routes/UserRoutes"));
app.use(errorHandler);

// setting prot for server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


