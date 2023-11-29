import { useEffect } from "react";
import axiosInstance from "./axiosInstance";

const getHomePosts = (setResponse) => {
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
