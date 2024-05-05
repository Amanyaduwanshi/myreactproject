import express from 'express'

const router=express.Router();
import * as ShipmentController from '../controller/shipment.controller.js'

router.post("/save",ShipmentController.save);
router.get("/fetch",ShipmentController.fetch);
/*router.patch("/update",userController.updateUser);
router.delete("/delete",userController.deleteUser);
*/





export default router;