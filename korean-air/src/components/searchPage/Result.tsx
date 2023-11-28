import styled from "styled-components";
import { IcPin } from "../../assets";

const Result = () => {
  return (
    <ResultBox>
      <ResultContent>
        <Airport>
          <IcPin />
          <p>ICN</p>
        </Airport>
        <Text>서울/인천, 대한민국</Text>
      </ResultContent>
      <ResultContent>
        <Airport>
          <IcPin />
          <p>ICN</p>
        </Airport>
        <Text>서울/인천, 대한민국</Text>
      </ResultContent>
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
  ${({ theme }) => theme.fonts.body_regular_14}
`;
