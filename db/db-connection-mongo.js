const mongoose = require("mongoose");

const getConnection = async () => {  
  try {
    await mongoose.connect(process.env.URL_DB);
    console.log("Conexion exitosa DB");    
  } catch (error) {
    console.log(error);
  }  
}

module.exports = {
  getConnection
}
