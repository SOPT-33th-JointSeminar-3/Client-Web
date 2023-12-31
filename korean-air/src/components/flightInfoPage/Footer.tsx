import styled, { css } from "styled-components";
import theme from "../../styles/theme";
import { useNavigate } from "react-router-dom";
import { FlightBtnFilter } from "../../assets";

export interface FooterProp {
  selectedPrice: number;
}

const Footer: React.FC<FooterProp> = ({ selectedPrice }) => {
  const isSelected = selectedPrice > 0;
  const navigate = useNavigate();

  function handleBtnClick() {
    isSelected && navigate("/payment");
  }
  return (
    <Wrapper>
      <FinalPayment>
        총액
        <PaymentDetail>{selectedPrice.toLocaleString()}원</PaymentDetail>
      </FinalPayment>

      <FinalPayBtn
        type="button"
        onClick={handleBtnClick}
        disabled={!isSelected}
      >
        <Reservation>다음 여정</Reservation>
      </FinalPayBtn>
      <FilterIcon>
        <FlightBtnFilter />
      </FilterIcon>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 43rem;
  height: 11.4rem;

  padding: 2rem;
  position: fixed;
  z-index: 1;
  bottom: 0;
  justify-content: space-between;
  flex-shrink: 0;
  box-shadow: 0rem -2rem 2rem 0.3rem rgba(107, 117, 136, 0.1);
  background-color: ${theme.colors.white};
`;

const FinalPayment = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${theme.colors.black};
  ${theme.fonts.body_bold_12}
`;

const PaymentDetail = styled.p`
  color: ${theme.colors.navy};
  text-align: right;
  ${theme.fonts.body_extrabold_14}
`;

const FinalPayBtn = styled.button`
  display: flex;
  padding: 1.4rem 13.9rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 1rem;
  border: 0.1rem solid ${theme.colors.navy};
  background: ${theme.colors.navy};
  cursor: pointer;

  ${(props) =>
    props.disabled &&
    css`
      background-color: ${theme.colors.gray};
      border: none;
    `};
`;

const Reservation = styled.p`
  color: ${theme.colors.white};
  ${theme.fonts.body_bold_14}
`;

const FilterIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  bottom: 13rem;
  right: 1.6rem;

  width: 4.6rem;
  height: 4.6rem;
  z-index: 3;
  border-radius: 2.3rem;
  background: ${theme.colors.skyBlue};
  box-shadow: 0rem 0rem 1rem 0rem rgba(107, 117, 136, 0.2);
`;
