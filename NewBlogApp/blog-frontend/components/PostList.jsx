import React from "react";
import Card from "./Card";

const PostList = ({ data, setData }) => {
  return (
    <section className="container mx-auto p-5 md:p-10 grid lg:grid-cols-2 2xl:grid-cols-3 grid-cols-1 gap-y-10 transform duration-500 mb-5 text-center justify-center ">
      <Card data={data} setData={setData} />
    </section>
  );
};

export default PostList;
