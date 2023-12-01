import axiosInstance from "./axiosInstance";
export const getReserve = async (
  firstName: string,
  lastName: string,
  gender: string,
  birth: string,
) => {
  try {
    const response = await axiosInstance.post(`api/passenger`, {
      firstname: firstName,
      lastname: lastName,
      gender: gender,
      birth: birth,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
