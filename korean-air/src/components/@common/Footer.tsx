import styled from "styled-components";
import theme from "../../styles/theme";
import { CardPersonalProps } from "../paymentPage/CardPersonal";
import { getReserve } from "../../api/getReserve";
import { useNavigate } from "react-router-dom";

interface FooterProps extends CardPersonalProps {
  confirm: boolean;
}

const Footer: React.FC<FooterProps> = ({ userData, confirm }) => {
  const navigate = useNavigate();
  const handleReservation = async () => {
    try {
      const postData = await getReserve(
        userData.firstName,
        userData.lastName,
        userData.gender,
        userData.birth,
      );
      console.log(postData);
    } catch (error) {
      console.log(error);
    }
    navigate("/finish");
  };

  return (
    <Wrapper>
      <FinalPayment>
        최종 결제 금액
        <PaymentDetail>58,300원</PaymentDetail>
      </FinalPayment>

      <FinalPayBtn
        onClick={handleReservation}
        type="button"
        $confirm={confirm}
        disabled={!confirm}
      >
        <Reservation>예약하기</Reservation>
      </FinalPayBtn>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  height: 11.4rem;
  padding: 2rem;
  position: fixed;
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

const FinalPayBtn = styled.button<{ $confirm: boolean }>`
  display: flex;
  padding: 1.4rem 13.9rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 1rem;
  border: none;
  background: ${({ $confirm, theme }) => $confirm && theme.colors.navy};
`;

const Reservation = styled.p`
  color: ${theme.colors.white};
  ${theme.fonts.body_bold_14}
`;
