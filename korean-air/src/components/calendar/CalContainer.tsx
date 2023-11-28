import styled from "styled-components";

const CalContainer = () => {
  const START = 5; // 금요일부터 1일이 시작되는 달
  const LENGTH = 31; // 총 31일인 달
  const LIST = new Array(42).fill();

  const DATA = [
    { date: 5, price: 5.8 },
    { date: 7, price: 8 },
    { date: 11, price: 7.7 },
    { date: 15, price: 6.4 },
    { date: 20, price: 6 },
    { date: 21, price: 7.3 },
    { date: 23, price: 10.2 },
    { date: 29, price: 9 },
  ];

  DATA.map((data) => (LIST[data.date + START - 1] = data.price));
  DATA.sort((a, b) => a.price - b.price);
  const SECOND_MIN = DATA[1].price; // 최저가 두개 중 큰 값
  const SECOND_MAX = DATA[DATA.length - 2].price; // 최고가 두개 중 작은 값

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
              <Price
                $isColored={
                  val <= SECOND_MIN ? "min" : val >= SECOND_MAX ? "max" : ""
                }
              >
                {val && `${val}만`}
              </Price>
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
`;
const Price = styled.span<{ $isColored: string }>`
  ${({ theme }) => theme.fonts.body_regular_12};
  color: ${({ theme, $isColored }) =>
    $isColored === "min"
      ? theme.colors.blue
      : $isColored === "max"
        ? theme.colors.red
        : theme.colors.grey_2};
`;
