import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const UserInside = () => {
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
