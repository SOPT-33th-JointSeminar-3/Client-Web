import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { IcCloseSmall } from "../../assets";
interface State {
  state: string;
}
const SearchHeader = (props: State) => {
  const navigate = useNavigate();
  const handleCloseBtnClick = () => {
    navigate("/");
  };
  const title = props.state === "departure" ? "출발지 검색" : "도착지 검색";
  return (
    <ShHeader>
      <p>{title}</p>
      <IconBox onClick={handleCloseBtnClick}>
        <IcCloseSmall />
      </IconBox>
    </ShHeader>
  );
};

export default SearchHeader;

const ShHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1.8rem 0 3.8rem 0;
  & p {
    ${({ theme }) => theme.fonts.title_bold_20};
  }
`;
const IconBox = styled.div`
  height: 4.4rem;
`;
