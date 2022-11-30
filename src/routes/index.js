const usersRouter = require("./users");
const productsRouter = require("./products");
const ordersRouter = require("./orders");
const categoriesRouter = require("./categories");

const apiRouter = (app) => {
  app.use("/users", usersRouter);
  app.use("/products", productsRouter);
  app.use("/orders", ordersRouter);
  app.use("/categories", categoriesRouter);
};

module.exports = apiRouter;
