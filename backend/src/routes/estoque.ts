import { Router } from "express";
import * as controller from "../controllers/estoque.controller";

const router = Router();

router.get("/", controller.getAll);
router.get("/:id", controller.getById);
// router.post("/", controller.create);
// router.patch("/:id", controller.update);
// router.delete("/:id", controller.delete);

export default router;
