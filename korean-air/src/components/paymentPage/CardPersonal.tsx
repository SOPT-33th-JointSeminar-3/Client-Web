import styled from "styled-components";
import theme from "../../styles/theme";
import {
  ArrowUp,
  ChevronDown,
  Ellipse,
  IcCheckPayment,
  IcUpPayment,
  PaymentCheck,
  PaymentCheckboxGrey,
} from "../../assets";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
export interface CardPersonalProps {
  userData: {
    lastName: string;
    firstName: string;
    gender: string;
    birth: string;
  };
  setUserData: Dispatch<
    SetStateAction<{
      lastName: string;
      firstName: string;
      gender: string;
      birth: string;
    }>
  >;
}
interface FooterProps extends CardPersonalProps {
  setConfirm: React.Dispatch<React.SetStateAction<boolean>>;
  confirm: boolean;
}
const CardPersonal: React.FC<FooterProps> = ({
  userData,
  setUserData,
  setConfirm,
  confirm,
}) => {
  const handleUserData = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleGenderChange = (selectedGender: string) => {
    setUserData({ ...userData, gender: selectedGender });
  };

  const [agree, setAgree] = useState(false);

  const handleCheckClick = () => {
    setAgree(!agree);
    confirm && setConfirm(false);
  };
  return (
    <Layout>
      <InsideLayout>
        <Header>
          <span>성인1</span>
          <IcUpPayment />
        </Header>
        <div>
          <GrayDiv>
            <div>
              <GrayTitle>
                <div>
                  <p>국적</p>
                  <Ellipse />
                </div>
                <input />
              </GrayTitle>
              <ChevronDown />
            </div>
          </GrayDiv>
          <GrayDiv>
            <div>
              <GrayTitle>
                <div>
                  <p>승객 성</p>
                  <Ellipse />
                </div>
                <input name="lastName" onChange={handleUserData} />
              </GrayTitle>
              <ChevronDown />
            </div>
          </GrayDiv>
          <GrayDiv>
            <div>
              <GrayTitle>
                <div>
                  <p>승객 이름</p>
                  <Ellipse />
                </div>
                <input name="firstName" onChange={handleUserData} />
              </GrayTitle>
              <ChevronDown />
            </div>
          </GrayDiv>
          <CommonLayout>
            <GrayTitle>
              <div>
                <p>성별</p>
                <Ellipse />
              </div>
            </GrayTitle>
            <GenderDiv>
              <GenderInsideLayout
                type="radio"
                id="m"
                name="gender"
                checked={userData.gender === "남자"}
                onChange={() => handleGenderChange("남자")}
              />
              <GenderLabel
                htmlFor="m"
                $isSelected={userData.gender === "남자" ? true : false}
                onClick={() => handleGenderChange("남자")}
              >
                남자
                {userData.gender === "남자" && <IcCheckPayment />}
              </GenderLabel>
              <GenderInsideLayout
                type="radio"
                id="w"
                name="gender"
                checked={userData.gender === "여자"}
                onChange={() => handleGenderChange("여자")}
              />
              <GenderLabel
                htmlFor="w"
                $isSelected={userData.gender === "여자" ? true : false}
                onClick={() => handleGenderChange("여자")}
              >
                여자
                {userData.gender === "여자" && <IcCheckPayment />}
              </GenderLabel>
            </GenderDiv>
          </CommonLayout>
          <GrayDiv>
            <div>
              <GrayTitle>
                <div>
                  <p>생년월일(YYYY-MM-DD)</p>
                  <Ellipse />
                </div>
                <input name="birth" onChange={handleUserData} />
              </GrayTitle>
              <ChevronDown />
            </div>
          </GrayDiv>
          <GrayDiv>
            <div>
              <GrayTitle>
                <div>
                  <p>적립 항공사</p>
                  <Ellipse />
                </div>
                <CommonBlack>대한한공</CommonBlack>
              </GrayTitle>
              <ChevronDown />
            </div>
          </GrayDiv>
          <GrayDiv>
            <div>
              <GrayTitle>
                <div>
                  <p>가는 여정의 개인 할인</p>
                  <Ellipse />
                </div>
                <CommonBlack>선택</CommonBlack>
              </GrayTitle>
              <ChevronDown />
            </div>
          </GrayDiv>
          <GrayDiv>
            <div>
              <GrayTitle>
                <div>
                  <p>오는 여정의 개인 할인</p>
                  <Ellipse />
                </div>
                <CommonBlack>선택</CommonBlack>
              </GrayTitle>
              <ChevronDown />
            </div>
          </GrayDiv>
          <AgreeLayout>
            <div onClick={handleCheckClick}>
              {agree ? <PaymentCheck /> : <PaymentCheckboxGrey />}
            </div>
            <span>국적 정보를 회원정보에 업데이트 하는 것을 동의합니다.</span>
          </AgreeLayout>
          <BtnContainer>
            <ConfirmBtn
              type="button"
              $agree={agree}
              disabled={!agree}
              onClick={() => setConfirm(true)}
            >
              <ConfirmLetter>확인</ConfirmLetter>
            </ConfirmBtn>
          </BtnContainer>
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
  background-color: ${theme.colors.white};
  border-radius: 1rem;

  & > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    border: 0.1rem solid ${theme.colors.grey_4};
    border-radius: 0rem 0rem 1rem 1rem;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;

  padding: 1.9rem;
  background-color: ${({ theme }) => theme.colors.navy};
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.body_extrabold_14};

  border-radius: 1rem 1rem 0 0;
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
  padding: 2rem;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    padding-bottom: 0.5rem;
    border-bottom: 0.1rem solid ${theme.colors.black};
  }
`;

const GenderInsideLayout = styled.input`
  display: none;
`;
const GenderLabel = styled.label<{ $isSelected: boolean }>`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  align-items: center;
  width: 100%;
  height: 100%;
  color: ${({ $isSelected, theme }) =>
    $isSelected ? theme.colors.blue : theme.colors.grey_2};
  border: 0.1rem solid
    ${({ $isSelected, theme }) =>
      $isSelected ? theme.colors.blue : theme.colors.grey_2};
  cursor: pointer;
`;

const GrayTitle = styled.div`
  display: flex;
  flex-direction: column;
  color: ${theme.colors.grey_3};
  ${theme.fonts.body_medium_12};
  gap: 0.6rem;
  & input {
    border: none;
    outline: none;
    cursor: pointer;
    ${theme.fonts.body_extrabold_16};
  }
  & div {
    display: flex;
    gap: 0.4rem;
    align-items: center;
  }
`;

const CommonLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: start;
  padding: 2rem;
`;

const GenderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 2rem;
  gap: 1rem;
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

const BtnContainer = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
`;
const ConfirmBtn = styled.button<{ $agree: boolean }>`
  display: flex;
  width: 10.8rem;
  height: 3.8rem;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  margin: 2.5rem 2rem;
  margin-top: 2.5rem;
  gap: 1rem;
  flex-shrink: 0;
  border-radius: 0.9rem;
  border: none;
  background: ${({ $agree, theme }) =>
    $agree ? theme.colors.navy : theme.colors.grey_6};
`;

const ConfirmLetter = styled.p`
  color: ${theme.colors.white};
  ${theme.fonts.body_medium_14};
`;

const ArrowUpContainer = styled.div`
  display: flex;
  width: 4.6rem;
  height: 4.6rem;
  position: fixed;
  bottom: 14.3rem;
  right: 2rem;

  justify-content: center;
  align-items: center;
  flex-shrink: 0;
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
  margin-top: 1rem;
  padding: 2rem;
  flex-shrink: 0;
  border-radius: 1rem;
  border: 0.1rem solid ${theme.colors.grey_4};
`;

const PhoneInfo = styled.p`
  color: ${theme.colors.black};
  ${theme.fonts.body_bold_14}
`;
