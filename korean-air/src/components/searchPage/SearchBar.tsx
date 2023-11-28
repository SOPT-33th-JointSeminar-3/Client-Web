import styled from "styled-components";
import { IcSearchSearcharea } from "../../assets";
const SearchBar = () => {
  return (
    <SearchBarBox>
      <IcSearchSearcharea />
      <p>도시, 공항을 검색하세요.</p>
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
  & p {
    color: ${({ theme }) => theme.colors.grey_3};
    ${({ theme }) => theme.fonts.body_regular_16};
  }
`;
