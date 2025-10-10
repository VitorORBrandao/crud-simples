import { Router } from "express";
import * as controller from "../controllers/estoque.controller";

const router = Router();

router.get("/", controller.getAll);
router.get("/", controller.getById);
// router.post("/", controller.create);
// router.patch("/", controller.update);
// router.delete("/", controller.delete);

export default router;
