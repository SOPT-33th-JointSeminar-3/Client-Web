import styled from "styled-components";

const CalContainer = () => {
  const START = 5; // 금요일부터 1일이 시작되는 달
  const LENGTH = 31; // 총 31일인 달
  const LIST = new Array(42).fill("");
  LIST[5 + START - 1] = "5.8만";
  LIST[7 + START - 1] = "8만";
  LIST[11 + START - 1] = "7.7만";
  LIST[15 + START - 1] = "6.4만";

  return (
    <Wrapper>
      <Calendar>
        <Header>
          <Year>2023</Year>
          <Month>12월</Month>
        </Header>
        <Grid>
          {LIST.map((val, idx) => (
            <Item key={idx}>
              <span>
                {idx - START < 0 || idx - START + 1 > LENGTH
                  ? ""
                  : idx - START + 1}
              </span>
              <span>{val}</span>
            </Item>
          ))}
        </Grid>
      </Calendar>
    </Wrapper>
  );
};

export default CalContainer;

const Wrapper = styled.section`
  margin: 2.6rem 3.2rem;
`;
const Calendar = styled.article`
  width: 100%;
`;
const Header = styled.header`
  display: flex;
  gap: 1.5rem;
  align-items: baseline;
`;
const Year = styled.span`
  ${({ theme }) => theme.fonts.body_regular_16};
`;
const Month = styled.span`
  ${({ theme }) => theme.fonts.title_bold_30};
`;
const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);

  row-gap: 0.6rem;

  margin-top: 2.3rem;

  /* 일요일 column 빨간 색상으로 */
  & > li:nth-child(7n + 1) {
    color: ${({ theme }) => theme.colors.red};
  }
`;
const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;

  & > span:first-child {
    ${({ theme }) => theme.fonts.body_regular_16};
  }

  & > span:nth-child(2) {
    ${({ theme }) => theme.fonts.body_regular_12};
    color: ${({ theme }) => theme.colors.blue};
  }
`;
