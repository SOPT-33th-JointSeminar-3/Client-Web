import axiosInstance from "./axiosInstance";

export const getFlightInfo = async (startNation: string, endNation: string) => {
  try {
    const response = await axiosInstance.get(
      `api/flights?startNation=서울&endNation=제주`,
    );
    console.log("api 폴더 내 :", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
