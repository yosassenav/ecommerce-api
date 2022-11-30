const { Router } = require("express");
//const routes = express.Router();
const router = Router();
router.get("/", (req, res) => {
  users = [
    {
      id: 1,
      username: "admin",
      firstName: "Admin",
      lastName: "System",
    },
    {
      id: 2,
      username: "staff",
      firstName: "Staff",
      lastName: "",
    },
    {
      id: 3,
      username: "customer",
      firstName: "John",
      lastName: "Doe",
    },
  ];
  res.json(users);
});

//GET User                special note: req (request), res(response)
router.get("/:userid", (req, res) => {
  console.log(req.params);
  const data = users.find((user) => {
    return user.id == req.params.userid;
  });

  if (data) {
    res.json(data);
  } else {
    res.status(404).json({ message: "user not found" });
  }
});

//POST User
router.post("/", (req, res) => {
  const data = req.body;
  //destructuring: extracting username and email from data object
  const { username, email } = data;
  const newUser = { username, email, id: 54 };

  //validating if data exists
});

//PUT/PATCH User
//router.put();

//DELETE User
//router.delete();

module.exports = router;
