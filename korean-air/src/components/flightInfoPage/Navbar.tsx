import styled from "styled-components";
import theme from "../../styles/theme";

const Navbar = () => {
  return (
    <Wrapper>
      <article>
        <AlreadyDoneTitle>01</AlreadyDoneTitle>
      </article>

      <CurrentLookDiv>
        <AlreadyDoneTitle>02 항공편</AlreadyDoneTitle>
      </CurrentLookDiv>

      <UnProgressNav>
        <NotDoTitle>03</NotDoTitle>
      </UnProgressNav>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
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

const NotDoTitle = styled.p`
  color: ${theme.colors.grey_4};
  ${theme.fonts.body_extrabold_12}
`;

const CurrentLookDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-bottom: solid 0.2rem ${theme.colors.navy};
`;

const UnProgressNav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: solid 0.2rem ${theme.colors.grey_4};
`;
