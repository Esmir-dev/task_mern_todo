import express from "express";
import userCtrl from "../controllers/user.controller";
import authCtrl from "../controllers/auth.controller";

const router = express.Router();

router.route("/api/users").get(userCtrl.list).post(userCtrl.create);

router
  .route("/api/users/:userId")
  .get(userCtrl.read)
  .put(userCtrl.update)
  .delete(userCtrl.remove);

router.param("userId", userCtrl.userByID);
router.route("/api/categories/create").post(userCtrl.create);
router.route("/api/categories/edit").put(userCtrl.update);
router.route("/api/categories/delete").delete(userCtrl.remove);
//router.param('userId', userCtrl.userByID);
router.route("/api/task/create").get(userCtrl.create);
router.route("/api/task/edit").put(userCtrl.update);
router.route("/api/task/delete").delete(userCtrl.remove); // ovdje sam ja pokusao napraviti rute za ovaj projakat, na frotendu nisam nista dirao

router
  .route("/api/users/:userId")
  .get(authCtrl.requireSignin, userCtrl.read)
  .put(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.update)
  .delete(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.remove);

export default router;
