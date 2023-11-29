import React from "react";
import styled from "styled-components";
import theme from "../../styles/theme";
import {
  ArrowUp,
  ChevronDown,
  Ellipse,
  IcCheckPayment,
  IcUpPayment,
  PaymentCheck,
} from "../../assets";

const CardPersonal = () => {
  return (
    <Layout>
      <InsideLayout>
        <div>
          <GrayDiv>
            <div>
              <GrayTitle>
                승객 선택
                <CommonBlack>정가윤</CommonBlack>
              </GrayTitle>
              <ChevronDown />
            </div>
          </GrayDiv>
          <GrayDiv>
            <div>
              <GrayTitle>
                국적
                <Ellipse />
                <CommonBlack>대한민국</CommonBlack>
              </GrayTitle>
              <ChevronDown />
            </div>
          </GrayDiv>
          <GrayDiv>
            <div>
              <GrayTitle>
                승객 성
                <Ellipse />
                <CommonBlack>정</CommonBlack>
              </GrayTitle>
              <ChevronDown />
            </div>
          </GrayDiv>
          <GrayDiv>
            <div>
              <GrayTitle>
                승객 이름
                <Ellipse />
                <CommonBlack>가윤</CommonBlack>
              </GrayTitle>
              <ChevronDown />
            </div>
          </GrayDiv>
          <CommonLayout>
            <GenderDiv>
              <GenderInsideLayout>
                <span>남자</span>
              </GenderInsideLayout>
              <GenderInsideLayoutBlue>
                <span>여자</span>
                <IcCheckPayment />
              </GenderInsideLayoutBlue>
            </GenderDiv>
          </CommonLayout>
          <GrayDiv>
            <div>
              <GrayTitle>
                생년월일(YYYY.MM.DD)
                <Ellipse />
                <CommonBlack>2002.09.14.</CommonBlack>
              </GrayTitle>
              <ChevronDown />
            </div>
          </GrayDiv>
          <GrayDiv>
            <div>
              <GrayTitle>
                적립 항공사
                <Ellipse />
                <CommonBlack>대한한공</CommonBlack>
              </GrayTitle>
              <ChevronDown />
            </div>
          </GrayDiv>
          <GrayDiv>
            <div>
              <GrayTitle>
                가는 여정의 개인 할인
                <Ellipse />
                <CommonBlack>선택</CommonBlack>
              </GrayTitle>
              <ChevronDown />
            </div>
          </GrayDiv>
          <GrayDiv>
            <div>
              <GrayTitle>
                오는 여정의 개인 할인
                <Ellipse />
                <CommonBlack>선택</CommonBlack>
              </GrayTitle>
              <ChevronDown />
            </div>
          </GrayDiv>
          <AgreeLayout>
            <PaymentCheck />
            <span>국적 정보를 회원정보에 업데이트 하는 것을 동의합니다.</span>
          </AgreeLayout>
          <ConfirmBtn type="button">
            <ConfirmLetter>확인</ConfirmLetter>
          </ConfirmBtn>
          <ArrowUpContainer>
            <ArrowUp />
          </ArrowUpContainer>
        </div>
        <PhoneLayout>
          <PhoneInfo>연락처 정보</PhoneInfo>
        </PhoneLayout>
      </InsideLayout>
    </Layout>
  );
};

export default CardPersonal;

const Layout = styled.section`
  display: flex;
  width: 100%;
  padding: 2rem;

  & > span {
    color: ${theme.colors.black};
    ${theme.fonts.body_medium_14};
  }
`;

const InsideLayout = styled.div`
  width: 100%;
  /* height: 120.4rem; */
  background-color: ${theme.colors.white};
  border-radius: 1rem;

  & > div {
    display: flex;
    flex-direction: column;
    border: 0.1rem solid ${theme.colors.grey_4};
    border-radius: 1rem;
  }
`;

const CommonBlack = styled.p`
  color: ${theme.colors.black};
  ${theme.fonts.body_extrabold_16};
  margin-top: 0.2rem;
  width: 13rem;
  justify-content: center;
  align-items: center;
`;

const GrayDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem;
  padding: 2rem;
  gap: 0.4rem;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 3.4rem;
    border-bottom: 0.1rem solid ${theme.colors.black};
  }
`;

const GenderInsideLayout = styled.div`
  display: flex;
  padding: 2rem;
  align-items: center;
  width: 45%;
  height: 100%;
  border: 0.1rem solid ${theme.colors.grey_2};
`;

const GenderInsideLayoutBlue = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  align-items: center;
  width: 45%;
  height: 100%;
  border: 0.1rem solid ${theme.colors.grey_2};
  color: ${theme.colors.blue};
`;

const GrayTitle = styled.p`
  color: ${theme.colors.grey_3};
  ${theme.fonts.body_medium_12};
  /* margin-bottom: 4rem; */
`;

const CommonLayout = styled.div`
  display: flex;
  justify-content: space-around;
  height: 7.5rem;
  flex-shrink: 0;
  margin: 1rem;
  padding: 2rem;
`;

const GenderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 4.4rem;
`;

const AgreeLayout = styled.section`
  display: inline-flex;
  width: 100%;
  height: 3rem;
  padding: 1.7rem;
  align-items: center;
  gap: 0.4rem;

  & > span {
    color: ${theme.colors.black};
    ${theme.fonts.body_medium_12};
  }
`;

const ConfirmBtn = styled.button`
  display: flex;
  width: 10.8rem;
  height: 3.8rem;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  margin-left: 20rem;
  margin-top: 2.5rem;
  gap: 1rem;
  flex-shrink: 0;
  border-radius: 0.9rem;
  border: 0.1rem solid ${theme.colors.navy};
  background: ${theme.colors.navy};
`;

const ConfirmLetter = styled.p`
  color: ${theme.colors.white};
  ${theme.fonts.body_medium_14};
`;

const ArrowUpContainer = styled.div`
  display: flex;
  width: 4.6rem;
  height: 4.6rem;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  background-color: pink;
  float: right;
  border-radius: 5.5rem;
  border: 0.1rem solid ${theme.colors.grey_5};
  background: ${theme.colors.white};
  box-shadow: 0rem 0rem 1rem 0rem rgba(107, 117, 136, 0.2);
`;

const PhoneLayout = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 5.8rem;
  padding: 2rem;
  /* margin-top: 3rem; */
  flex-shrink: 0;
  border-radius: 1rem;
  border: 0.1rem solid ${theme.colors.grey_4};
`;

const PhoneInfo = styled.p`
  color: ${theme.colors.black};
  ${theme.fonts.body_bold_14}
`;
