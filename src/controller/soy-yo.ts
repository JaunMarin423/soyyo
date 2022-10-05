import { Request, Response } from "express";
import { soyYoEntity } from '../services/soy-yo/soy-yo';

export const post = async (_req: Request, res: Response) => {
  try {
    const startId = _req.body.startId;
    const endId = _req.body.endId

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

    const response = await soyYoEntity(startId, endId);
    return res
      .status(200)
      .json(response);
  } catch (err) {
    return res
      .status(404)
      .json({ message: "Error en la validación datos de entrada" });
  }
};
