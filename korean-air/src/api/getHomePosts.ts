import axiosInstance from "./axiosInstance";

const getHomePosts = async () => {
  try {
    const res = await axiosInstance.get("api/posts");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export default getHomePosts;
