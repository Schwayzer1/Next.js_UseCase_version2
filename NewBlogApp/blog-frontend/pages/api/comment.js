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
    } else if (req.method === "DELETE") {
      console.log(req.body, "testtesttest");
      const { id } = req.body;

      const deletedComment = await prisma.comment.delete({
        where: {
          id: Number(id),
        },
      });
      if (!deletedComment) {
        return res.status(404).send({ message: "Post not found" });
      }
      return res.status(200).send(deletedComment);
    } else {
      return res.status(404).send({ message: "Not Found" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: error.message });
  }
}
