import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req = NextApiRequest,
  res = NextApiResponse
) {
  const prisma = new PrismaClient();
  if (req.method === "GET") {
    const post = await prisma.post.findMany();
    return res.send(post);
  } else if (req.method === "POST") {
    const { body: data } = req;
    const newPost = await prisma.post.create({ data });
    return res.status(201).send(newPost);
  }
}
