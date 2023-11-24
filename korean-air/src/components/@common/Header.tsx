import styled from "styled-components";
import { IcMenuHeader, IcSearchHeader } from "../../assets";

const Header = () => {
  return (
    <Wrapper>
      <img src="/src/assets/image/img_logo.png" alt="대한항공 로고" />
      <div>
        <IcSearchHeader />
        <IcMenuHeader />
      </div>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;

  width: 100%;
  padding: 0rem 1rem 0rem 2rem;

  & > img {
    width: 11.8rem;
    height: 1.4rem;
    margin: 1.5rem 0rem;
  }
`;
