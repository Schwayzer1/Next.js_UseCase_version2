import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req = NextApiRequest,
  res = NextApiResponse
) {
  const prisma = new PrismaClient();
  if (req.method === "GET") {
    const comment = prisma.comment.findMany();
    return res.send(comment);
  } else if (req.method === "POST") {
    const { body: data } = req;
    const newComment = prisma.comment.create({ data });
    return res.status(201).send(newComment);
  }
}
