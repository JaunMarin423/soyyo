"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const soy_yo_1 = require("../controller/soy-yo");
const router = (0, express_1.Router)();
router.post("/", soy_yo_1.post);
exports.default = router;
