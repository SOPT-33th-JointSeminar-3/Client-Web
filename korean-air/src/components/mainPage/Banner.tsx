import styled from "styled-components";
import bannerImage from "../../assets/image/img_banner.png";

export const Banner = () => {
  return (
    <BannerBox>
      <Image src={bannerImage} alt="배너 이미지" />
      <BannerContent>
        <BannerTitle>대한항공 My 앱</BannerTitle>
        <BannerText>
          내 여행에 최적화된
          <br />
          맞춤 정보를 확인하세요.
        </BannerText>
      </BannerContent>
    </BannerBox>
  );
};

const BannerBox = styled.section`
  display: flex;
  position: relative;
  padding: 4rem 1.6rem;
`;
const Image = styled.img`
  flex-grow: 1;
`;
const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  position: absolute;
  padding: 3rem 2.1rem;
  color: ${({ theme }) => theme.colors.white};
`;
const BannerTitle = styled.p`
  ${({ theme }) => theme.fonts.body_semibold_16}
  text-shadow: 0 0 0.288rem rgba(0, 0, 0, 0.45);
`;
const BannerText = styled.p`
  ${({ theme }) => theme.fonts.body_regular_14}
  text-shadow: 0 0 0.192rem rgba(0, 0, 0, 0.50);
`;
