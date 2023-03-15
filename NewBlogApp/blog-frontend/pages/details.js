import CommentForm from "@/components/CommentForm";
import Comments from "@/components/Comments";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

//! bu sayfayı komple [blogid].jsx sayfasına taşımak gerekiyor

const Details = () => {
  const router = useRouter();
  const { id, title, subTitle, content, image } = router.query;
  console.log(id, "details");
  const { data: session } = useSession();

  return (
    <div className="height">
      <section className="text-gray-700 body-font overflow-hidden bg-white">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap justify-center">
            <img
              alt="ecommerce"
              className="lg:w-96 w-full object-cover  rounded border-2 border-gray-400 mb-5"
              src={
                image
                  ? image
                  : "https://static.vecteezy.com/system/resources/previews/004/853/486/non_2x/picture-gallery-image-line-icon-illustration-logo-template-suitable-for-many-purposes-free-vector.jpg"
              }
            />
            <div className="lg:w-full w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 text-center">
              <h1 className="text-gray-900 text-6xl title-font font-medium mb-5">
                {title}
              </h1>
              <h4 className="text-gray-900 text-2xl title-font font-medium mb-5">
                {subTitle}
              </h4>

              <p className="leading-relaxed text-lg">{content}</p>

              <div className="flex justify-center items-end mt-24">
                <Link
                  href="/"
                  className=" text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
                >
                  Back
                </Link>
              </div>
              {session ? null : (
                <div className="flex justify-center items-center my-6">
                  <Link
                    href="/register"
                    className=" text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded"
                  >
                    Add Comment
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
        {session ? <CommentForm /> : null}
        <section className="bg-white dark:bg-gray-900 py-5 lg:py-5">
          <div className="max-w-2xl mx-auto px-4">
            <Comments />
          </div>
        </section>
      </section>
    </div>
  );
};

export default Details;
