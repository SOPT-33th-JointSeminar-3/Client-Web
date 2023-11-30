import styled from "styled-components";
import { IcPin } from "../../assets";
import { SearchBarProps } from "./SearchBar";
import getSearchAirport from "../../api/getSearchAirport";
import { useState } from "react";

export interface SearchItem {
  id: number;
  nationName: string;
  itatCode: string;
  city: string;
}

const Result: React.FC<SearchBarProps> = (props) => {
  const [searchResponse, setSearchResponse] = useState<SearchItem[]>([]);
  getSearchAirport(props.searchInput, setSearchResponse);
  console.log(searchResponse);
  const handleClick = () => {
    props.setSearchInput("");
  };
  return (
    <ResultBox>
      {searchResponse.map((item: SearchItem) => (
        <ResultContent key={item.nationName} onClick={handleClick}>
          <Airport>
            <IcPin />
            <p>{item.itatCode}</p>
          </Airport>
          <Text>
            <p>{item.city}</p>,<p>{item.nationName}</p>
          </Text>
        </ResultContent>
      ))}
    </ResultBox>
  );
};

export default Result;

const ResultBox = styled.ul`
  position: absolute;
  top: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0.3rem 1.18rem 0.3rem rgba(187, 187, 187, 0.25);
`;
const ResultContent = styled.li`
  display: flex;
  align-items: center;
  padding: 1.5rem 0 1.5rem 1.2rem;
  gap: 2.9rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.grey_4};
  &:last-child {
    border: none;
  }
`;
const Airport = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  ${({ theme }) => theme.fonts.body_semibold_16}
  & p {
    padding-top: 0.2rem;
  }
`;
const Text = styled.span`
  display: flex;
  & p:last-child {
    margin-left: 0.5rem;
  }
  ${({ theme }) => theme.fonts.body_regular_14}
`;
