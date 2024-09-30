import { Request, Response } from "express";
import { DetailUserSerivice } from "../../services/user/DetailUserService";

class DetailUserController {
  async handle (req: Request, res: Response) {

    const user_id = req.user_id;

    const detailUserService = new DetailUserSerivice();

    const user = await detailUserService.execute(user_id);

    return res.json(user);
  }
}

export { DetailUserController }