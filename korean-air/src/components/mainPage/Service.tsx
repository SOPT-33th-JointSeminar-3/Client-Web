import styled from "styled-components";
import { ServiceCard } from "./ServiceCard";
export const Service = () => {
  return (
    <ServiceBox>
      <ServiceTitle>여행의 완성을 위한 경험</ServiceTitle>
      <ServiceContents>
        <ServiceCard />
      </ServiceContents>
    </ServiceBox>
  );
};

const ServiceBox = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 4rem 0 4.6rem 1.6rem;
  background-color: ${({ theme }) => theme.colors.blue_5};
  overflow: hidden;
`;
const ServiceTitle = styled.p`
  ${({ theme }) => theme.fonts.title_bold_20}
`;
const ServiceContents = styled.div`
  display: flex;
  gap: 1.2rem;
`;
