const { Router } = require("express");

const router = new Router();

const userRouter = require("./userRoutes");

userRouter(router);

module.exports = router;