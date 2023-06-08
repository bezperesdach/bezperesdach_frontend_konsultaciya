import { NextApiRequest, NextApiResponse } from "next";
import { increaseArticleViewCount } from "@/api/api";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  if (method === "GET") {
    try {
      const url = req.query.url as string;
      const token = req.query.token as string;
      const increaseViews = await increaseArticleViewCount(url, token);

      if (increaseViews.success) {
        return res.status(200).send({ success: true, message: "" });
      } else {
        return res.status(422).send({ success: false, message: "" });
      }
    } catch (error) {
      return res.status(422).send({ success: false, message: error });
    }
  }

  return res.status(404).send("Not found");
}
