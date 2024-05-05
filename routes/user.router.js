import express from 'express'

const router=express.Router();
import * as userController from '../controller/user.controller.js'

router.post("/save",userController.save);
router.post("/login",userController.login);
router.get("/fetch",userController.fetch);
router.patch("/update",userController.updateUser);
router.delete("/delete",userController.deleteUser);






export default router;