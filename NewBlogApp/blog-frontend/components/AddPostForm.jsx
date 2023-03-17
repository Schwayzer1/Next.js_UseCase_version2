import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const AddPostForm = () => {
  const [data, setData] = useState({
    title: "",
    subtitle: "",
    content: "",
    image: "",
    createDate: new Date(),
  });
  const router = useRouter();

  const url = "http://localhost:3000/api/post/";

  const handleSubmit = async () => {
    await axios
      .post(url, {
        title: data.title,
        subtitle: data.subtitle,
        content: data.content,
        image: data.image,
        createDate: new Date(),
      })
      .then((res) => {
        console.log(res);
        if (res.status === 201) {
          router.reload();
        }
      });
  };

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        await handleSubmit();
      }}
    >
      <div className="relative z-0 w-full mb-6 group">
        <input
          onChange={(e) =>
            setData({ ...data, [e.target.name]: e.target.value })
          }
          value={data.title}
          type="text"
          name="title"
          id="title"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="title"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Title
        </label>
      </div>
      <div className="relative z-0 w-full mb-6 group">
        <input
          onChange={(e) =>
            setData({ ...data, [e.target.name]: e.target.value })
          }
          value={data.subtitle}
          type="text"
          name="subtitle"
          id="subtitle"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="subtitle"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Subtitle
        </label>
      </div>
      <div className="relative z-0 w-full mb-6 group">
        <input
          onChange={(e) =>
            setData({ ...data, [e.target.name]: e.target.value })
          }
          value={data.content}
          type="textarea"
          name="content"
          id="content"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="content"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Content
        </label>
      </div>
      <div className="relative z-0 w-full mb-6 group">
        <input
          onChange={(e) =>
            setData({ ...data, [e.target.name]: e.target.value })
          }
          value={data.image}
          type="text"
          name="image"
          id="image"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="image"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Image Link
        </label>
      </div>
      <div className="text-center">
        <button
          type="submit"
          className=" focus:ring-4 focus:outline-none focus:ring-gray-300 w-full sm:w-auto  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800  bg-gray-800 text-gray-100 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-md font-medium"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddPostForm;
