import styled from "styled-components";
import { IcMenuHeader, IcSearchHeader } from "../../assets";
import headerImage from "../../assets/image/img_logo.png";
const Header = () => {
  return (
    <Wrapper>
      <img src={headerImage} alt="대한항공 로고" />
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

  & svg {
    cursor: pointer;
  }
`;
