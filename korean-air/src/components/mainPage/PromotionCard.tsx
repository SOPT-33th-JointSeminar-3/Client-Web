import styled from "styled-components";
import img1 from "../../assets/image/img_promotion1.png";
import img2 from "../../assets/image/img_promotion2.png";
export const PromotionCard = () => {
  return (
    <>
      <Card>
        <Image src={img1}></Image>
        <Content>신규 취항/운항 재개 노선 스케줄을 확인하세요.</Content>
      </Card>
      <Card>
        <Image src={img2}></Image>
        <Content>여행지별 입국 요건을 지도에서 확인하세요.</Content>
      </Card>
    </>
  );
};

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0.9rem;
  box-shadow: 0 0 1.34rem 0.19rem rgba(193, 193, 193, 0.25);
`;
const Image = styled.img`
  border-top-left-radius: 0.9rem;
  border-top-right-radius: 0.9rem;
  overflow: hidden;
`;
const Content = styled.p`
  margin: 1.7rem 15rem 1.7rem 2rem;
  ${({ theme }) => theme.fonts.body_bold_16}
`;
