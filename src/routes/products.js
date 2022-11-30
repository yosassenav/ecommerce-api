const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  products = [
    {
      id: 1,
      product: "Plastic Beach LP",
      price: 460,
    },
    {
      id: 2,
      product: "Ocelot Mechanic Keyboard",
      price: 340,
    },
    {
      id: 3,
      product: "Sephora blush",
      price: 200,
    },
    {
      id: 4,
      product: "Night Dress",
      price: 320,
    },
  ];
  res.json(products);
});

//GET Product
router.get("/:productid", (req, res) => {
  console.log(req.params);
  const data = products.find((product) => {
    return product.id == req.params.productid;
  });

  if (data) {
    res.json(data);
  } else {
    res.status(404).json({ message: "product not found" });
  }
});

//POST Product
router.post("/", (req, res) => {
  console.log(req.body);
  res.status(201).json({
    message: "Product created successfully!",
  });
});

//PUT/PATCH Product
//router.put();

//DELETE Product
//router.delete();

module.exports = router;
