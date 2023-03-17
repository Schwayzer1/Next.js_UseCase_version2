import axios from "axios";
import React, { useEffect, useState } from "react";

const DashboardPost = () => {
  const [data, setData] = useState();
  const [load, setLoad] = useState(false);

  useEffect(() => {
    axios.get("/api/comment").then((response) => {
      setData(response.data);
    });
  }, [load]);

  const handleDelete = async (_id) => {
    await axios
      .delete(url, {
        data: {
          id: _id,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setLoad(true);
        }
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="relative overflow-x-auto py-8">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Create Date
            </th>
            <th scope="col" className="px-6 py-3">
              ID
            </th>
            <th scope="col" className="px-6 py-3">
              Text
            </th>
            <th scope="col" className="px-6 py-3">
              Author ID
            </th>
            <th scope="col" className="px-6 py-3">
              Post ID
            </th>
            <th scope="col" className="px-6 py-3">
              Process
            </th>
          </tr>
        </thead>
        {data?.map((item) => {
          return (
            <tbody key="">
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.createDate}
                </th>
                <td className="px-6 py-4">{item.id}</td>
                <td className="px-6 py-4">{item.text}</td>
                <td className="px-6 py-4">{item.authorId}</td>
                <td className="px-6 py-4">{item.postId}</td>
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
  );
};

export default DashboardPost;
