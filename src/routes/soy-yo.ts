import { Router } from "express";

import {
  post,
} from "../controller/soy-yo";

const router = Router();

router.post("/", post);

export default router;
