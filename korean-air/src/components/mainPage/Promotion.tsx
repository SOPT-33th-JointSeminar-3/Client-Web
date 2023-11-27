import styled from "styled-components";
import { PromotionCard } from "./PromotionCard";
import { IcPagingLeft, IcPagingRight } from "../../assets";

export const Promotion = () => {
  return (
    <PromotionBox>
      <IcPagingLeft />
      <PromotionCard />
      <IcPagingRight />
    </PromotionBox>
  );
};

const PromotionBox = styled.section`
  display: flex;
  position: relative;
  gap: 2.2rem;
  overflow-x: hidden;
  padding: 4rem 0 3.9rem 1rem;

  & svg:nth-child(1) {
    position: absolute;
    top: 35%;
    left: 0;
    z-index: 1;
  }
  & svg:nth-last-child(1) {
    position: absolute;
    top: 35%;
    right: 0;
    z-index: 1;
  }
`;
