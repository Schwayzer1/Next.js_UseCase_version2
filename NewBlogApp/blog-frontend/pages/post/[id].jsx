// import { PrismaClient } from "@prisma/client";
// import { NextApiRequest, NextApiResponse } from "next";

// export default async function handler(
//   req = NextApiRequest,
//   res = NextApiResponse
// ) {
//   const prisma = new PrismaClient();

//   const { id } = req.query;
// }

import Details from "@/components/Details";
import React from "react";

export const PostPage = ({ params }) => {
  const { id } = req.params;
  console.log(id);

  return <Details />;
};
