import axiosInstance from "./axiosInstance";

export const getFlightInfo = async () => {
  try {
    const response = await axiosInstance.get(
      `api/flights?startNation=서울&endNation=제주`,
    );
    console.log("api 폴더 내 :", response.data.data);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};
