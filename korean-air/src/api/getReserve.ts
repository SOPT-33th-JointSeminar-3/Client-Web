import axiosInstance from "./axiosInstance";

export const getReserve = async (
  firstName: string,
  lastName: string,
  gender: string,
  birth: string,
) => {
  try {
    const response = await axiosInstance.post(`api/passenger`, {
      firstName,
      lastName,
      gender,
      birth,
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
