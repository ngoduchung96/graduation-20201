const {
  findAllUsers,
  addNewUser,
  login,
  deleteUser,
  updateUser,
} = require("../apis.js");

const userRouter = (router) => {

  // router.post("/login", login);

  router.post("/addNewUser", addNewUser);

  router.post("/deleteUser", deleteUser);

  router.post("/getWastebasketInfo", findAllUsers);

  router.post("/updateUser", updateUser);
};

module.exports = userRouter;
