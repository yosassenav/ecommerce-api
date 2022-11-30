const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  categories = [
    {
      id: 1,
      category: "Music",
    },
    {
      id: 2,
      category: "Electronics",
    },
    {
      id: 3,
      category: "Beauty",
    },
  ];
  res.json(categories);
});

router.get("/:categoryid", (req, res) => {
  console.log(req.params);
  const data = categories.find((category) => {
    return category.id == req.params.categoryid;
  });

  if (data) {
    res.json(data);
  } else {
    res.status(404).json({ message: "category not found" });
  }
});

module.exports = router;
