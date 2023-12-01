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
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
