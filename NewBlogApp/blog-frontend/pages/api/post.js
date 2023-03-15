import { PrismaClient } from "@prisma/client";

export default async function Post(
  req = NextApiRequest,
  res = NextApiResponse
) {
  const prisma = new PrismaClient();
  try {
    if (req.method === "GET") {
      const post = await prisma.post.findMany();
      return res.send(post);
    } else if (req.method === "POST") {
      const { body: data } = req;
      const newPost = await prisma.post.create({ data });
      return res.status(201).send(newPost);
    }
  } catch (e) {
    return res.status(400).send(e.message);
  }
}
