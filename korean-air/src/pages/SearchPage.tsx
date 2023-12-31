import { useLocation } from "react-router-dom";
import styled from "styled-components";
import SearchHeader from "../components/searchPage/SearchHeader";
import SearchBar from "../components/searchPage/SearchBar";
import History from "../components/searchPage/History";
import Category from "../components/searchPage/Category";
import { useState } from "react";
import Result from "../components/searchPage/Result";

const SearchPage = () => {
  const { state } = useLocation();
  const [searchInput, setSearchInput] = useState<string>("");

  return (
    <SearchBox>
      <SearchHeader state={state}></SearchHeader>
      <SearchBar setSearchInput={setSearchInput} searchInput={searchInput} />
      <SearchBody>
        {/*임의로 검색창에 입력값이 있으면 결과창 뜨게 함 */}
        {searchInput !== "" && (
          <Result searchInput={searchInput} setSearchInput={setSearchInput} />
        )}
        <History />
        <Category />
      </SearchBody>
    </SearchBox>
  );
};

export default SearchPage;

const SearchBox = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 1.6rem;
`;
const SearchBody = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
