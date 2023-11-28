import React from "react";
import styled from "styled-components";
import theme from "../../styles/theme";
import { Ellipse, IcRightNameInfo } from "../../assets";
import CardPersonal from "./CardPersonal";

const UserInfo = () => {
  return (
    <Wrapper>
      <div>
        <UserInfoTitle>승객 정보</UserInfoTitle>
        <Require>
          [<Ellipse /> 는 필수 입력 사항입니다 ]
        </Require>
      </div>
      <section>
        <Description>
          예약 후 변경은 <span>불가</span> 하오니 탑승 시 제시할{" "}
          <span>신분증에 기재된 성명과 언어</span>가 정확히 일치하는지
          확인하시기 바랍니다. 발음상 변화가 없는 단순 영문 성명 철자변경의 경우
          로그인한 본인에 한해 <span> 변경하기</span>를 이용하시기 바랍니다
        </Description>
      </section>
      <NameInput>
        <Description>성명 입력 안내</Description>
        <IcRightNameInfo />
      </NameInput>
      {/* <CustomerLayout>
          <BgBlue></BgBlue>
        </CustomerLayout> */}
    </Wrapper>
  );
};

export default UserInfo;

const Wrapper = styled.section`
  width: 100%;
  height: 21.3rem;
  padding: 2rem;

  & > div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  & > section {
    display: flex;
    width: 100%;
    padding: 2rem;
    height: 12.8rem;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 1.581rem;
    background: ${theme.colors.blue_5};
  }
`;

const UserInfoTitle = styled.p`
  color: ${theme.colors.navy};
  ${theme.fonts.body_extrabold_20};
`;

const Require = styled.p`
  color: ${theme.colors.grey_3};
  ${theme.fonts.body_medium_12}
`;

const Description = styled.p`
  color: ${theme.colors.grey_2};
  ${theme.fonts.body_medium_12};

  & > span {
    color: ${theme.colors.blue};
  }
`;

const NameInput = styled.div`
  display: flex;
  padding: 1rem 0rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.6rem;
  border: 0.1rem solid var(--grey_2, #6b7588);
`;

const CustomerLayout = styled.section`
  height: 120.4rem;
  border-radius: 10px;
  border: 0.1rem solid ${theme.colors.grey_4};
`;

const BgBlue = styled.div`
  width: 100%;
  height: 5.8rem;
  background-color: ${theme.colors.navy};
`;
