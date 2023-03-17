// import { PrismaClient } from "@prisma/client";

// export default async function Post(
//   req = NextApiRequest,
//   res = NextApiResponse
// ) {
//   const prisma = new PrismaClient();
//   try {
//     if (req.method === "GET") {
//       const post = await prisma.post.findMany();
//       return res.send(post);
//     } else if (req.method === "POST") {
//       const { body: data } = req;
//       const newPost = await prisma.post.create({ data });
//       return res.status(201).send(newPost);
//     } else if (req.method === "DELETE") {
//       const postId = req.body.id; // veya req.body.id
//       const deletedPost = await prisma.post.delete({
//         where: {
//           id: parseInt(postId),
//         },
//       });
//       return res.status(200).send(deletedPost);
//     } else {
//       return res.status(404).send({ message: "Not Found" });
//     }
//   } catch (error) {
//     console.error(error);
//     return res.status(500).send({ message: "Internal Server Error" });
//   }
// }
import { PrismaClient } from "@prisma/client";

export default async function Post(
  req = NextApiRequest,
  res = NextApiResponse
) {
  const prisma = new PrismaClient();
  try {
    if (req.method === "GET") {
      const posts = await prisma.post.findMany();
      return res.send(posts);
    } else if (req.method === "POST") {
      const { body: data } = req;
      const newPost = await prisma.post.create({ data });
      return res.status(201).send(newPost);
    } else if (req.method === "DELETE") {
      const { postId } = req.body;

      await prisma.comment.deleteMany({
        where: {
          postId: parseInt(postId),
        },
      });

      const deletedPost = await prisma.post.delete({
        where: {
          id: parseInt(postId),
        },
      });
      if (!deletedPost) {
        return res.status(404).send({ message: "Post not found" });
      }
      return res.status(200).send(deletedPost);
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
