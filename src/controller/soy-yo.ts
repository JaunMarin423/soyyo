import { Request, Response } from "express";
import { sendMessage } from '../services/soy-yo/soy-yo';

export const post = async (_req: Request, res: Response) => {
  try {
    const response = await sendMessage();
    return res
      .status(200)
      .json(response);
  } catch (err) {
    console.log('error getting message', { err: String(err) });
    return res
      .status(500)
      .json({ message: "internal error, message" });
  }
};
