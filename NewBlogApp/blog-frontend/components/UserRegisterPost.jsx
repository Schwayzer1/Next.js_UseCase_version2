import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import axios from "axios";

const UserRegisterPost = () => {
  const [error, setError] = useState();

  useEffect(() => {
    axios
      .post("/api/user/", {
        userName: session?.user.name,
        image: session?.user.image,
        email: session?.user.email,
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  const { data: session } = useSession();

  if (!error) {
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
  } else {
    return (
      <div className="height flex justify-center items-center text-center flex-col">
        <p>
          {" "}
          This e-mail address has already been registered. We have provided your
          login with your registered email address 😊
        </p>
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
  }
};

export default UserRegisterPost;
