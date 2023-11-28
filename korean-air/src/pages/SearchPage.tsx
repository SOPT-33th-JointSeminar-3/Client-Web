import { useLocation } from "react-router-dom";
import styled from "styled-components";
import SearchHeader from "../components/searchPage/SearchHeader";
const SearchPage = () => {
  const { state } = useLocation();

  return (
    <SearchBox>
      <SearchHeader state={state}></SearchHeader>
    </SearchBox>
  );
};

export default SearchPage;

const SearchBox = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 1.6rem;
`;
