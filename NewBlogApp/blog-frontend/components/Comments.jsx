import axios from "axios";
import React, { useEffect, useState } from "react";

const Comments = ({ specialId }) => {
  /*axios ile yorumlar burada çekilecek ve aşağıda axios ile map edilip yayınlanacak */
  const url = "http://localhost:3000/api/comment/";
  const [filteredComments, setFilteredComments] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => {
      console.log(res, "commentres");
      const comments = res.data.filter((item) => item.postId == specialId);
      setFilteredComments(comments);
    });
  }, [specialId]);

  return (
    <>
      {filteredComments.map((item) => {
        return (
          <React.Fragment key={item.id}>
            <article className="p-6 mb-6 text-base bg-white rounded-lg dark:bg-gray-900">
              <footer className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                    <img
                      className="mr-2 w-6 h-6 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                      alt="Michael Gough"
                    />
                    {item.authorId}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <time
                      pubdate
                      dateTime="2022-02-08"
                      title="February 8th, 2022"
                    >
                      {item.createDate}
                    </time>
                  </p>
                </div>
              </footer>
              <p className="text-gray-500 dark:text-gray-400">{item.text}</p>
            </article>
          </React.Fragment>
        );
      })}
    </>
  );
};

export default Comments;
