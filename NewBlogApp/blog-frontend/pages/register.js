import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import UserInside from "@/components/UserInside";
import UserOutside from "@/components/UserOutside";

function Register() {
  const { data: session } = useSession();
  console.log(session);

  if (session) {
    return <UserInside />;
  } else {
    return <UserOutside />;
  }
}

export default Register;
