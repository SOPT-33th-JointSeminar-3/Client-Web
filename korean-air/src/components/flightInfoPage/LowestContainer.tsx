import React, { useState } from "react";
import styled from "styled-components";
import theme from "../../styles/theme";
import {
  ChevronRight,
  IcChangeFlight,
  IcConditionArrow,
  IcRefundFlight,
  IcShortInfoFlight,
  LogoJinair,
} from "../../assets";
import { FlightCardProp } from "./FlightCard";

const LowestContainer: React.FC<FlightCardProp> = ({
  click,
  setClick,
  handleBtnClick,
}) => {
  return (
    <>
      <Wrapper>
        <Lowest>
          <span>최저가</span>
        </Lowest>
        <article>
          <div>
            <TimeLayout>
              <FlightTime>06:05</FlightTime>
              <Area>SEL</Area>
            </TimeLayout>
            <ExpectedTimeLayout>
              <Time>1시간 10분</Time>
              <IcConditionArrow />
            </ExpectedTimeLayout>
            <TimeLayout>
              <FlightTime>07:15</FlightTime>
              <Area>CJU</Area>
            </TimeLayout>
            <ChevronRight />
          </div>
          <section>
            <JinairInfo>
              KE5153 <LogoJinair /> 진에어 운항
            </JinairInfo>
          </section>
          <div>
            <BtnGroup>
              <BtnLayout onClick={handleBtnClick}>
                <CommonTitle>특가운임</CommonTitle>
                <CommonPrice>48,300원</CommonPrice>
                <CommonSeat>7석</CommonSeat>
              </BtnLayout>

              <BtnLayout>
                <CommonTitle>할인운임</CommonTitle>
                <CommonPrice>58,300원</CommonPrice>
                <CommonSeat>7석</CommonSeat>
              </BtnLayout>

              <BtnLayout>
                <CommonTitle>정상운임</CommonTitle>
                <CommonPrice>78,300원</CommonPrice>
                <CommonSeat>7석</CommonSeat>
              </BtnLayout>

              <NotSelectBtnLayout>
                <NotSelectedTitle>프레스티지</NotSelectedTitle>
                <NotSelectedSub>미운영</NotSelectedSub>
              </NotSelectBtnLayout>
            </BtnGroup>
          </div>
          <div>
            <ClickSection>
              <div>
                <section>
                  <IcChangeFlight />
                  <CommonSeat>변경 불가</CommonSeat>
                </section>
                <section>
                  <IcRefundFlight />
                  <CommonSeat>환불 7,000원</CommonSeat>
                </section>
              </div>
              <div>
                <section>
                  <IcShortInfoFlight />
                  <CommonSeat>
                    좌석 승급 불가/ (결제 페이지에서 확인 가능)
                  </CommonSeat>
                </section>
              </div>
            </ClickSection>
          </div>
        </article>
      </Wrapper>

      {/* <ClickSection className="hidden">
        <div>
          <section>
            <IcChangeFlight />
            <CommonSeat>변경 불가</CommonSeat>
          </section>
          <section>
            <IcRefundFlight />
            <CommonSeat>환불 7,000원</CommonSeat>
          </section>
        </div>
        <div>
          <section>
            <IcShortInfoFlight />
            <CommonSeat>좌석 승급 불가/ (결제 페이지에서 확인 가능)</CommonSeat>
          </section>
        </div>
      </ClickSection> */}
    </>
  );
};

export default LowestContainer;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 20.1rem;
  margin-top: 2rem;
  border-radius: 10px;
  background: ${theme.colors.white};
  box-shadow: 0rem 0rem 2rem 0rem rgba(107, 117, 136, 0.2);
  border-radius: 1rem;
  position: relative;

  & > article {
    display: flex;
    flex-direction: column;
    width: 100%;
    flex-shrink: 0;
    justify-content: space-between;
    /* background-color: pink; */
    border-radius: 1rem;
  }

  & > article > section {
    margin-left: 2rem;
  }

  & > article > div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 7.4rem;
    flex-shrink: 0;
  }
`;

const FlightTime = styled.p`
  color: ${theme.colors.black};
  ${theme.fonts.title_bold_18};
`;

const Area = styled.p`
  color: ${theme.colors.grey_2};
  ${theme.fonts.body_medium_12};
`;

const ExpectedTimeLayout = styled.article`
  display: inline-block;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
`;

const Time = styled.p`
  color: ${theme.colors.navy};
  ${theme.fonts.body_medium_12};
  margin-left: 2rem;
`;

const JinairInfo = styled.p`
  color: ${theme.colors.grey_2};
  ${theme.fonts.body_medium_12};
`;

const JinairLayout = styled.section`
  width: 100%;
  height: 2.5rem;
`;

const BtnLayout = styled.section`
  display: flex;
  width: 8.3rem;
  height: 8.3rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  flex-shrink: 0;
  cursor: pointer;
  border-radius: 10px;
  border: 0.1rem solid ${theme.colors.grey_4};
  background: ${theme.colors.white};
`;

const NotSelectBtnLayout = styled.section`
  display: flex;
  width: 8.3rem;
  height: 8.3rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  flex-shrink: 0;
  border-radius: 10px;
  border: 0.1rem solid ${theme.colors.grey_4};
  background: ${theme.colors.blue_5};
`;

const TimeLayout = styled.div`
  display: flex;
  width: 5.6rem;
  height: 4.4rem;
  margin-top: 1rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  flex-shrink: 0;
`;

const CommonTitle = styled.p`
  color: ${theme.colors.black};
  ${theme.fonts.body_medium_12};
`;

const CommonPrice = styled.p`
  color: ${theme.colors.black};
  ${theme.fonts.body_extrabold_12};
`;

const CommonSeat = styled.p`
  color: ${theme.colors.black};
  ${theme.fonts.body_medium_10};
`;

const BtnGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
  z-index: 1;
`;

const NotSelectedTitle = styled.p`
  color: ${theme.colors.grey_2};
  ${theme.fonts.body_medium_12};
`;

const NotSelectedSub = styled.p`
  color: ${theme.colors.grey_2};
  ${theme.fonts.body_bold_12}
`;

const ClickSection = styled.div`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 13.9rem;
  margin-top: 4rem;
  flex-shrink: 0;
  border-radius: 1rem;
  background: ${theme.colors.skyBlue};

  & > div {
    display: flex;
    justify-content: space-between;
    width: 21.9rem;
    height: 3rem;
    margin-right: 8rem;
    flex-shrink: 0;
    gap: 0.4rem;
  }

  & > div > section {
    display: flex;
    justify-content: space-around;
  }
`;

const Lowest = styled.aside`
  display: flex;
  width: 6.2rem;
  height: 2.6rem;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;
  border-radius: 10rem;
  background: ${theme.colors.blue_1};
  margin-left: 1rem;
  margin-top: -1.5rem;
  position: absolute;

  & > span {
    color: ${theme.colors.white};
    ${theme.fonts.body_extrabold_12};
  }
`;
