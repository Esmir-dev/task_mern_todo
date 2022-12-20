import express from "express";
import authCtrl from "../controllers/auth.controller";

const router = express.Router();

router.route("/auth/signup").post(authCtrl.signup);

router.route("/auth/signout").post(authCtrl.signout);

export default router;
