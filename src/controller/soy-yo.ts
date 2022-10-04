import { Request, Response } from "express";
import { sendMessage } from '../services/soy-yo/soy-yo';

export const post = async (_req: Request, res: Response) => {
  try {
    const startId = _req.body.startId;
    const endId = _req.body.endId;
    const response = await sendMessage(startId, endId);
    return res
      .status(200)
      .json(response);
  } catch (err) {
    console.log('error getting message', { err: String(err) });
    return res
      .status(400)
      .json({ message: "Error en la validación datos de entrada" });
  }
};
