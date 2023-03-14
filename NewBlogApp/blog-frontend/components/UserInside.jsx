import axios from "axios";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { useEffect } from "react";

const UserInside = () => {
  useEffect(() => {
    const URL = "http://localhost:3000/api/user/";
    const obj = {
      userName: session?.user.name,
      image: session?.user.image,
      email: session?.user.email,
    };
    axios
      .post(URL, obj)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  const { data: session } = useSession();
  return (
    <div className="height flex justify-center items-center text-center flex-col">
      <p>Welcome, {session.user.name},you can add new comment 😊</p>
      <div className=""></div>
      <Link
        href="/"
        type="button"
        className=" bg-gray-800 text-gray-100 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium mx-5 focus:ring-gray-300 mt-5"
      >
        {" "}
        Go Home{" "}
      </Link>
    </div>
  );
};

export default UserInside;
