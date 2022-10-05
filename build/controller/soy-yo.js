"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.post = void 0;
const soy_yo_1 = require("../services/soy-yo/soy-yo");
const post = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const startId = _req.body.startId;
        const endId = _req.body.endId;
        if (_req.baseUrl != '/entities/filter') {
            return res
                .status(404)
                .json({ message: "Error en la validación datos de entrada" });
        }
        if (!startId) {
            return res
                .status(400)
                .json({ message: "Error en validación datos de entrada" });
        }
        const response = yield (0, soy_yo_1.soyYoEntity)(startId, endId);
        return res
            .status(200)
            .json(response);
    }
    catch (err) {
        return res
            .status(404)
            .json({ message: "Error en la validación datos de entrada" });
    }
});
exports.post = post;
