import { Router } from "express";
import estoque from "./estoque";

const router = Router();

router.use("/api/v1/estoque", estoque);

export default router;
