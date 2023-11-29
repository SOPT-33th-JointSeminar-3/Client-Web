import styled from "styled-components";
import { PromotionCard } from "./PromotionCard";
import { IcPagingLeft, IcPagingRight } from "../../assets";
import React, { useState } from "react";

export const Promotion = () => {
  const [scrollLeft, setScrollLeft] = useState(true);

  return (
    <PromotionBox>
      <IcPagingLeft onClick={() => setScrollLeft(true)} />
      <PromotionCardBox $scroll={scrollLeft}>
        <PromotionCard />
      </PromotionCardBox>
      <IcPagingRight onClick={() => setScrollLeft(false)} />
    </PromotionBox>
  );
};

const PromotionBox = styled.section`
  position: relative;
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

const PromotionCardBox = styled.div<{ $scroll: boolean }>`
  display: flex;
  gap: 2.2rem;
  ${({ $scroll }) =>
    $scroll ? "transform: translateX(0);" : "transform: translateX(-29.7rem);"};
`;
