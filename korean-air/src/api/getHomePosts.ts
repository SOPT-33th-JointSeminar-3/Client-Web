import { useEffect } from "react";
import axiosInstance from "./axiosInstance";
import { PostItem } from "../components/mainPage/Notice";

const getHomePosts = (
  setResponse: React.Dispatch<React.SetStateAction<PostItem[]>>,
) => {
  const fetchData = async () => {
    try {
      const res = await axiosInstance.get("api/posts");
      setResponse(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
};

export default getHomePosts;
