import { NextApiRequest, NextApiResponse } from "next";
import { getAverageRating } from "@/api/api";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  if (method === "GET") {
    try {
      let averageRating: ReviewsAverageRating | null = null;

      const averageRatingResponse = await getAverageRating();

      if (!averageRatingResponse.errors) {
        averageRating = averageRatingResponse.data;
        return res.status(200).send({ errors: false, message: "", data: averageRating });
      }

      return res.status(422).send({ errors: true, message: averageRatingResponse.message, data: null });
    } catch (error) {
      return res.status(422).send({ errors: true, message: error, data: null });
    }
  }

  return res.status(404).send("Not found");
}
