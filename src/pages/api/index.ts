import { type NextApiRequest, type NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const date = new Date();
  const date2 = new Date();

  date2.setHours(0, 0, 0, 0);

  res.json([date.toISOString(), date2]);
};

export default handler;
