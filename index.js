const express = require("express");
const app = express();
const apiRouter = require("./src/routes");

apiRouter(app);

app.get("/", (req, res) => {
  console.log("Query Params", req.query);
  console.log("Nombre", req.query.name);
  console.log("Nombre de usuario", req.query.uername);
  console.log("Password", req.query.password);

  data = {
    name: req.query.name,
    username: req.query.username,
  };

  res.json(data);
});

app.listen(8000, () => {
  console.log("Escuchando peticiones HTTP en el puerto 8000");
});
