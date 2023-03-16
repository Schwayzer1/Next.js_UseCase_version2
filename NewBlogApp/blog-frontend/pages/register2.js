import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import UserRegisterPost from "@/components/UserRegisterPost";
import BeforeUserRegister from "@/components/BeforeUserRegister";

function Register2() {
  const { data: session } = useSession();

  if (!session) {
    return <BeforeUserRegister />;
  } else {
    return <UserRegisterPost />;
  }
}

export default Register2;
