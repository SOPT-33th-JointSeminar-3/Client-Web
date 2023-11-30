import styled from "styled-components";
import { IcCloseSmallRecent } from "../../assets";
import { useSetRecoilState } from "recoil";
import { arriveState, departureState } from "../../recoil/atom";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const History = () => {
  const navigate = useNavigate();
  const setArrive = useSetRecoilState<string>(arriveState);
  const setDeparture = useSetRecoilState<string>(departureState);

  const departure = useRef<HTMLParagraphElement>(null);
  const arrive = useRef<HTMLParagraphElement>(null);
  const handleClick = () => {
    if (!arrive.current) return;
    setArrive(arrive.current.textContent);
    setDeparture(departure.current?.textContent);
    navigate("/");
  };
  return (
    <HistoryCard onClick={handleClick}>
      <Text>
        <p ref={departure}>ICN</p>
        서울/인천 - <p ref={arrive}>CJU</p>
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
