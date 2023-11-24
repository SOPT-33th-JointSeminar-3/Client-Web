import styled from "styled-components";
import img1 from "../../assets/image/img_promotion1.png";
import img2 from "../../assets/image/img_promotion2.png";
export const PromotionCard = () => {
  return (
    <>
      <Card>
        <ImageBox>
          <Image src={img1} alt="프로모션 이미지" />
          <PageNumber>1/2</PageNumber>
        </ImageBox>
        <Content>
          신규 취항/운항 재개 노선 스케줄을
          <br />
          확인하세요.
        </Content>
      </Card>
      <Card>
        <ImageBox>
          <Image src={img2} alt="프로모션 이미지" />
          <PageNumber>2/2</PageNumber>
        </ImageBox>
        <Content>
          여행지별 입국 요건을
          <br /> 지도에서 확인하세요.
        </Content>
      </Card>
    </>
  );
};

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 31.5rem;
  border-radius: 0.9rem;
  box-shadow: 0 0 1.34rem 0.19rem rgba(193, 193, 193, 0.25);
`;
const ImageBox = styled.div`
  display: flex;
  position: relative;
`;
const Image = styled.img`
  border-radius: 0.9rem 0.9rem 0 0;
  overflow: hidden;
`;
const PageNumber = styled.p`
  position: absolute;
  top: 89.5%;
  right: 0;
  padding: 0.2rem 1rem;
  border-radius: 0.96rem 0 0 0;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.grey_2};
  ${({ theme }) => theme.fonts.body_semibold_12}
`;
const Content = styled.p`
  margin: 1.7rem 0 1.7rem 2rem;
  ${({ theme }) => theme.fonts.body_bold_16}
`;
