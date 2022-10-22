require("dotenv").config();
const express = require("express");
const { getConnection } = require("./db/db-connection-mongo");

const app = express();

app.use('/cliente', require('./router/cliente'));
app.use('/tipoproyecto', require('./router/tipoProyecto'));
app.use('/etapa', require('./router/etapa'));
app.use('/universidad', require('./router/universidad'));
app.use('/proyecto', require('./router/proyecto'));

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});

getConnection();
