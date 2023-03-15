import { PrismaClient } from "@prisma/client";

export default async function Comment(
  req = NextApiRequest,
  res = NextApiResponse
) {
  try {
    const prisma = new PrismaClient();
    if (req.method === "GET") {
      const comment = await prisma.comment.findMany();
      return res.send(comment);
    } else if (req.method === "POST") {
      const { body: data } = req;
      const newComment = await prisma.comment.create({ data });
      return res.status(201).send(newComment);
    }
  } catch (e) {
    return res.status(400).send(e.message);
  }
}
