import styled from "styled-components";
import theme from "../../styles/theme";

const Navbar = () => {
  return (
    <Wrapper>
      <article>
        <AlreadyDoneTitle>01</AlreadyDoneTitle>
      </article>

      <article>
        <AlreadyDoneTitle>02</AlreadyDoneTitle>
      </article>

      <CurrentLookDiv>
        <AlreadyDoneTitle>03 결제</AlreadyDoneTitle>
      </CurrentLookDiv>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 5fr;
  gap: 0.6rem;

  width: 100%;
  height: 2rem;

  & > article {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: solid 0.2rem ${theme.colors.navy};
  }
`;

const AlreadyDoneTitle = styled.p`
  color: ${theme.colors.navy};
  ${theme.fonts.body_extrabold_12}
`;

const CurrentLookDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-bottom: solid 0.2rem ${theme.colors.navy};
`;
