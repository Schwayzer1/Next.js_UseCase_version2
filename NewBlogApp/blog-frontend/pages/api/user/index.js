import { PrismaClient } from "@prisma/client";

export default async function handler(
  req = NextApiRequest,
  res = NextApiResponse
) {
  try {
    const prisma = new PrismaClient();
    if (req.method === "GET") {
      const user = await prisma.user.findMany();
      return res.send(user);
    } else if (req.method === "POST") {
      const { body: data } = req;
      const newUser = await prisma.user.create({ data });
      return res.status(201).send(newUser);
    } else if (req.method === "DELETE") {
      console.log(req.body, "testtesttest");
      const { id } = req.body;

      await prisma.comment.deleteMany({
        where: {
          authorId: parseInt(id),
        },
      });

      const deletedUser = await prisma.user.delete({
        where: {
          id: Number(id),
        },
      });
      if (!deletedUser) {
        return res.status(404).send({ message: "Post not found" });
      }
      return res.status(200).send(deletedUser);
    } else {
      return res.status(404).send({ message: "Not Found" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: error.message });
  } finally {
    await prisma.$disconnect();
  }
}
