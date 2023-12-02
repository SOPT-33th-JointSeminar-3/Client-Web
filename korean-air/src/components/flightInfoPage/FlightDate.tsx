import styled from "styled-components";
import { IcLeftFlight, IcRightFlight } from "../../assets";
import theme from "../../styles/theme";

const FlightDate = () => {
  return (
    <Wrapper>
      <div>
        <DirectionLayout>
          <IcLeftFlight />
        </DirectionLayout>
        <DateLayout>
          <NotSelectedDate>28(화)</NotSelectedDate>
          <NotSelectedPrice>43,300</NotSelectedPrice>
        </DateLayout>

        <DateLayout>
          <span>29(수)</span>
          <h1>43,300</h1>
        </DateLayout>

        <DateLayout>
          <NotSelectedDate>30(목)</NotSelectedDate>
          <NotSelectedPrice>43,300</NotSelectedPrice>
        </DateLayout>

        <DirectionLayout>
          <IcRightFlight />
        </DirectionLayout>
      </div>
      <FlightSeat>
        <SelectedSeat>
          <span>일반석</span>
        </SelectedSeat>
        <UnselectedSeat>
          <span>프레스티지석</span>
        </UnselectedSeat>
        <UnselectedSeat>
          <span>일반+승급석</span>
        </UnselectedSeat>
      </FlightSeat>
    </Wrapper>
  );
};

export default FlightDate;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 7.4rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  & > div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

const DirectionLayout = styled.article`
  display: flex;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const DateLayout = styled.article`
  display: flex;
  width: 9.6rem;
  height: 4.3rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > span {
    color: ${theme.colors.black};
    ${theme.fonts.body_extrabold_12};
  }

  & > h1 {
    color: ${theme.colors.blue};
    ${theme.fonts.body_extrabold_12};
  }
`;

const NotSelectedDate = styled.p`
  color: ${theme.colors.black};
  ${theme.fonts.body_medium_12};
`;

const NotSelectedPrice = styled.p`
  color: ${theme.colors.grey_3};
  ${theme.fonts.body_medium_12};
`;

const FlightSeat = styled.section`
  display: flex;
  width: 33.5rem;
  height: 3.8rem;
  justify-content: center;
  align-items: flex-start;
  gap: 0.6rem;
  flex-shrink: 0;
`;

const SelectedSeat = styled.div`
  display: flex;
  width: 10.8rem;
  height: 3.8rem;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;
  border-radius: 10rem;
  background: ${theme.colors.navy};

  & > span {
    color: ${theme.colors.white};
    ${theme.fonts.body_bold_12};
  }
`;

const UnselectedSeat = styled.div`
  display: flex;
  width: 10.8rem;
  height: 3.8rem;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;
  border-radius: 10rem;
  border: 0.1rem solid ${theme.colors.grey_5};
  background: ${theme.colors.white};

  & > span {
    color: ${theme.colors.grey_2};
    ${theme.fonts.body_medium_12};
  }
`;
