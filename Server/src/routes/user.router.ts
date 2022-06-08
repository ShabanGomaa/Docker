import { UserController } from "../controllers/Users.controller";
import {
  UserDto,
} from "../services/Dtos";

var express = require("express");
export const router = express.Router();

router.get("/get", async function (req: any, res: any, next: any) {
  let userController = new UserController();
  let result = await userController.getOne(req);
  res.status(200).send(result);
});


