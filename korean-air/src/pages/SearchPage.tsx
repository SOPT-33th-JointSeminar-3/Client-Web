import { useLocation } from "react-router-dom";
import styled from "styled-components";
import SearchHeader from "../components/searchPage/SearchHeader";
import SearchBar from "../components/searchPage/SearchBar";
import History from "../components/searchPage/History";
const SearchPage = () => {
  const { state } = useLocation();

  return (
    <SearchBox>
      <SearchHeader state={state}></SearchHeader>
      <SearchBar />
      <History />
    </SearchBox>
  );
};

export default SearchPage;

const SearchBox = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 1.6rem;
`;
