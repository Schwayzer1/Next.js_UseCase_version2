import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

const Card = ({ data, setData }) => {
  console.log(data, "CARD");
  const { data: session } = useSession();

  return (
    <>
      {data?.map((item) => {
        return (
          <article
            key=""
            id={item.id}
            className="shadow-md max-w-sm transform hover:-translate-y-1 duration-300 hover:shadow-xl cursor-pointer m-5 border-4"
          >
            <div className="overflow-hidden" bis_skin_checked={1}>
              <img className="max-h-60 p-5 max-w-sm " src={item.image} alt="" />
            </div>
            <div className="p-7 my-auto pb-12 " bis_skin_checked={1}>
              <h1 className="text-4xl font-semibold text-gray-700">
                {item.title}
              </h1>
              <h6 className="text-xl font-semibold text-gray-700">
                {item.subTitle}
              </h6>
              <p className="text-xl font-light leading-relaxed text-gray-400 mt-5">
                {item.content}
              </p>
            </div>
            <div className="flex justify-center items-end m-4">
              <Link
                href={{
                  pathname: "/details",
                  query: item, // the data
                }}
              >
                <button
                  type="button"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full my-auto m-3"
                >
                  Read More
                </button>
              </Link>
              {session ? (
                <Link
                  href={{
                    pathname: "/details",
                    query: item, // the data
                  }}
                >
                  <button
                    type="button"
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full my-auto m-3"
                  >
                    Add Comment
                  </button>
                </Link>
              ) : null}
            </div>
          </article>
        );
      })}
    </>
  );
};

export default Card;
