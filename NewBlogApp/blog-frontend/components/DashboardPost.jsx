import axios from "axios";
import React, { useEffect, useState } from "react";

const DashboardPost = () => {
  const [data, setData] = useState();

  const url = "http://localhost:3000/api/post";
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  const handleDelete = async (id2) => {
    console.log(id2);
    const obj = {
      postId: id2,
    };
    await axios
      .delete(url, {
        data: obj,
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          window.location.reload(true);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="relative overflow-x-auto py-8">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Subtitle
              </th>
              <th scope="col" className="px-6 py-3">
                Content
              </th>
              <th scope="col" className="px-6 py-3">
                İmage Link
              </th>
              <th scope="col" className="px-6 py-3">
                Process
              </th>
            </tr>
          </thead>
          {data?.map((item) => {
            return (
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item.title}
                  </th>
                  <td className="px-6 py-4">{item.id}</td>
                  <td className="px-6 py-4">{item.subtitle}</td>
                  <td className="px-6 py-4">{item.content}</td>
                  <td className="px-6 py-4">{item.image}</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleDelete(item.id)}
                      type="button"
                      className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 "
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default DashboardPost;
