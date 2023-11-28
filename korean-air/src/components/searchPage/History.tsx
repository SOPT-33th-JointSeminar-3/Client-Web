import styled from "styled-components";
import { IcCloseSmallRecent } from "../../assets";

const History = () => {
  return (
    <HistoryCard>
      <Text>
        ICN
        <p>서울/인천</p> - CJU
        <p>제주</p>
      </Text>
      <IcCloseSmallRecent />
    </HistoryCard>
  );
};

export default History;

const HistoryCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.8rem;
  padding: 0.3rem 0 0.3rem 1.2rem;
  border-radius: 1rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.grey_5};
`;
const Text = styled.div`
  display: flex;
  text-align: center;
  color: ${({ theme }) => theme.colors.navy};
  ${({ theme }) => theme.fonts.body_bold_14};
  & p {
    margin: 0 0.5rem;
    ${({ theme }) => theme.fonts.body_regular_14};
  }
`;
