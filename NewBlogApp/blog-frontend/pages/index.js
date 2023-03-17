import Head from "next/head";
import { Inter } from "next/font/google";
import PostList from "@/components/PostList";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import AddPostForm from "@/components/AddPostForm";
import axios from "axios";
import { useDispatch } from "react-redux";
import { user } from "@/features/userSlice";
import Loading from "@/components/Loading";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [modal, setmodal] = useState(false);
  const { data: session } = useSession();
  const url2 = "http://localhost:3000/api/user";
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(url2).then((res) => {
      console.log(res, "responsive");
      const dbUser = res.data.filter((item) => {
        return item.email === session?.user.email;
      });
      dispatch(user(dbUser));
      console.log(dbUser, "database user");
    });
  });

  const url = "http://localhost:3000/api/post/";

  const [data, setData] = useState([]);

  const getData = async () => {
    setLoading(true);
    await axios.get(url, data).then((res) => {
      setData(res.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleClick = () => {
    if (modal) {
      setmodal(false);
    } else if (modal === false) {
      setmodal(true);
    }
  };

  return (
    <>
      {loading ? <Loading /> : null}
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {session?.user.email === "furkann.onay@gmail.com" ? (
        <div className="flex justify-end text-center ">
          <button
            onClick={handleClick}
            href="#"
            className=" bg-gray-800 text-gray-100 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium mx-5 focus:ring-gray-300 "
          >
            Add New Post
          </button>
        </div>
      ) : null}
      <div className="height flex justify-center">
        <div
          className={
            modal
              ? "w-screen mx-16 mt-5 justify-center items-center"
              : "flex justify-center items-center text-center"
          }
        >
          {modal ? <AddPostForm /> : <PostList data={data} setData={setData} />}
        </div>
      </div>
    </>
  );
}
