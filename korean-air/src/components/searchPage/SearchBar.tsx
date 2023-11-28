import styled from "styled-components";
import { IcCloseVerySmall, IcSearchSearcharea } from "../../assets";
import React from "react";
interface SearchBarProps {
  searchInput: string;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
}
const SearchBar: React.FC<SearchBarProps> = (props) => {
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setSearchInput(e.target.value);
  };
  return (
    <SearchBarBox>
      <IcSearchSearcharea />
      <Input
        placeholder="도시, 공항을 검색하세요."
        onChange={handleChangeInput}
      ></Input>
      {props.searchInput && <IcCloseVerySmall />}
    </SearchBarBox>
  );
};

export default SearchBar;

const SearchBarBox = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0.4rem 0 1rem 0;
  gap: 1.2rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.navy};

  & svg:last-child {
    position: absolute;
    right: 0;
  }
`;
const Input = styled.input`
  ${({ theme }) => theme.fonts.body_regular_16};
  border: none;
  outline: none;
`;
