const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  orders = [
    {
      id: 1,
      order: "Plastic Beach LP",
      amount: 1,
    },
    {
      id: 2,
      order: "Nightt Dress",
      amount: 3,
    },
  ];
  res.json(orders);
});

router.get("/:orderid", (req, res) => {
  console.log(req.params);
  const data = orders.find((order) => {
    return order.id == req.params.orderid;
  });

  if (data) {
    res.json(data);
  } else {
    res.status(404).json({ message: "order not found" });
  }
});

module.exports = router;
