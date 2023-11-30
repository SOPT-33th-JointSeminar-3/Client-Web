import { useEffect } from "react";
import axiosInstance from "./axiosInstance";
import { SearchItem } from "../components/searchPage/Result";

const getSearchAirport = (
  searchInput: string,
  setSearchResponse: React.Dispatch<React.SetStateAction<SearchItem[]>>,
) => {
  const fetchData = async () => {
    try {
      const res = await axiosInstance.get(
        `api/nation/search?words=${searchInput}`,
      );
      setSearchResponse(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [searchInput]);
};
export default getSearchAirport;
