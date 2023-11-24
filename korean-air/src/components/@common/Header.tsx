import styled from "styled-components";

const Header = () => {
  return (
    <Wrapper>
      <img src="/src/assets/image/img_logo.png" alt="대한항공 로고" />
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.section`
  width: 100%;
  padding: 1.5rem 1rem 1.5rem 2rem;

  border: 2px solid red;
`;
