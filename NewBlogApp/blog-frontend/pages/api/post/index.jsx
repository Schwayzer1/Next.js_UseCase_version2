import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req = NextApiRequest,
  res = NextApiResponse
) {
  const prisma = new PrismaClient();

  const { id } = req.query;
}