import styled from "styled-components";
import { IcCloseSmallRecent } from "../../assets";
import { useSetRecoilState } from "recoil";
import {
  arriveState,
  departureState,
  fromState,
  toState,
} from "../../recoil/atom";
import { useNavigate } from "react-router-dom";

const History = () => {
  const navigate = useNavigate();
  const setArrive = useSetRecoilState<string>(arriveState);
  const setDeparture = useSetRecoilState<string>(departureState);

  const setFrom = useSetRecoilState<string>(fromState);
  const setTo = useSetRecoilState<string>(toState);

  const handleClick = () => {
    setArrive("ICN");
    setDeparture("CJU");
    setFrom("서울/인천");
    setTo("제주");
    navigate("/");
  };
  return (
    <HistoryCard onClick={handleClick}>
      <Text>
        <p>ICN</p>
        서울/인천 - <p>CJU</p>
        제주
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
  cursor: pointer;
`;
const Text = styled.div`
  display: flex;
  text-align: center;
  ${({ theme }) => theme.fonts.body_regular_14};
  & p {
    margin: 0 0.5rem;
    color: ${({ theme }) => theme.colors.navy};
    ${({ theme }) => theme.fonts.body_bold_14};
  }
`;
