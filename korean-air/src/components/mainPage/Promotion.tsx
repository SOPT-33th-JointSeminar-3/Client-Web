import styled from "styled-components";
import { PromotionCard } from "./PromotionCard";
import { IcPagingLeft, IcPagingRight } from "../../assets";
import React, { useState } from "react";

export const Promotion = () => {
  const [scrollLeft, setScrollLeft] = useState(true);

  return (
    <PromotionBox>
      <LeftBtn onClick={() => setScrollLeft(true)}>
        <IcPagingLeft />
      </LeftBtn>
      <PromotionCardBox $scroll={scrollLeft}>
        <PromotionCard />
      </PromotionCardBox>
      <RightBtn onClick={() => setScrollLeft(false)}>
        <IcPagingRight />
      </RightBtn>
    </PromotionBox>
  );
};

const PromotionBox = styled.section`
  position: relative;
  overflow-x: hidden;
  padding: 4rem 0 3.9rem 1rem;
`;

const PromotionCardBox = styled.div<{ $scroll: boolean }>`
  display: flex;
  gap: 2.2rem;
  ${({ $scroll }) =>
    $scroll ? "transform: translateX(0);" : "transform: translateX(-29.7rem);"};
`;

const PagingBtn = styled.div`
  position: absolute;
  top: 35%;
  width: 2.4rem;
  height: 4.9rem;
`;

const LeftBtn = styled(PagingBtn)`
  left: 0;
  z-index: 1;
  display: flex;
  justify-content: flex-start;
`;

const RightBtn = styled(PagingBtn)`
  right: 0;
  z-index: 1;
  display: flex;
  justify-content: flex-end;
`;
