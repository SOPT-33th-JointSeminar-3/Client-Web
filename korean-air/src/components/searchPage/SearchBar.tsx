import styled from "styled-components";
import { IcSearchSearcharea } from "../../assets";
import React from "react";
interface SearchBarProps {
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
    </SearchBarBox>
  );
};

export default SearchBar;

const SearchBarBox = styled.section`
  display: flex;
  align-items: center;
  padding: 0.4rem 0 1rem 0;
  gap: 1.2rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.navy};
`;
const Input = styled.input`
  ${({ theme }) => theme.fonts.body_regular_16};
  border: none;
  outline: none;
`;
