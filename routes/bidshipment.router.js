import express from 'express'

const router=express.Router();
import * as BidShipmentController from '../controller/bidshipment.controller.js'

router.post("/save",BidShipmentController.save);
router.get("/fetch",BidShipmentController.fetch);
/*router.patch("/update",userController.updateUser);
router.delete("/delete",userController.deleteUser);
*/





export default router;