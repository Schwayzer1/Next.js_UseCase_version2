import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  // callbacks: {
  //   session: async (session) => {
  //     if (!session) return;

  //     const client = await connectToDatabase();
  //     const usersCollection = client.db().collection("user");

  //     const userData = await usersCollection.findOne({
  //       email: session.user.email,
  //     });

  //     return {
  //       session: {
  //         user: {
  //           id: userData._id,
  //           firstname: userData.firstname,
  //           lastname: userData.lastname,
  //           username: userData.username,
  //           email: userData.email,
  //         },
  //       },
  //     };
  //   },
  // },
  secret: process.env.JWT_SECRET,
});
