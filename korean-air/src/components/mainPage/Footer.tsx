import styled from "styled-components";
import { IcYoutube, IcInstagram, IcFacebook, IcTwitter } from "../../assets";
import ImgAppmarket from "../../assets/image/img_appmarket.png";
export const Footer = () => {
  return (
    <FooterBox>
      <DetailBox>
        <Details>
          <p>회사소개</p>
          <p>고객지원</p>
          <p>약관 및 규정</p>
          <p>기타 안내</p>
        </Details>
        <SocialMedia>
          <IcYoutube />
          <IcInstagram />
          <IcFacebook />
          <IcTwitter />
        </SocialMedia>
        <AppStore>
          <Image src={ImgAppmarket} alt="어플 다운로드" />
        </AppStore>
      </DetailBox>
      <CompanyBox>
        <Info>
          <p>(주) 대한항공</p>
          <p>대표 : 우기홍 외 1명</p>
        </Info>
        <Period>ⓒ 1997-2023 KOREAN AIR</Period>
      </CompanyBox>
    </FooterBox>
  );
};

const FooterBox = styled.footer``;
const DetailBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.6rem 1rem 4.2rem 1rem;
  background-color: ${({ theme }) => theme.colors.grey_5};
`;
const Details = styled.div`
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.colors.grey_1};
  ${({ theme }) => theme.fonts.body_regular_14};
  & p {
    padding: 0 1.6rem;
  }
  & p:nth-child(n + 1):nth-child(-n + 3) {
    border-right: 0.1rem solid ${({ theme }) => theme.colors.grey_4};
  }
`;
const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
  padding: 3.6rem 0;
  gap: 2rem;
`;
const AppStore = styled.div`
  display: flex;
  justify-content: center;
`;
const Image = styled.img``;
const CompanyBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  padding: 2rem 1.6rem 3.3rem 1.6rem;
`;
const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;
  & p:nth-child(1) {
    color: ${({ theme }) => theme.colors.navy};
    ${({ theme }) => theme.fonts.body_bold_14};
  }
  & p:nth-last-child(1) {
    color: ${({ theme }) => theme.colors.grey_3};
    ${({ theme }) => theme.fonts.body_regular_14};
  }
`;
const Period = styled.p`
  color: ${({ theme }) => theme.colors.grey_1};
  ${({ theme }) => theme.fonts.body_regular_14};
`;
