import React from "react";
import { useSession } from "next-auth/react";
import UserInside from "@/components/UserInside";
import UserOutside from "@/components/UserOutside";

function Register() {
  const { data: session } = useSession();

  if (session) {
    return <UserInside />;
  } else {
    return <UserOutside />;
  }
}

export default Register;
