import styled from "styled-components";
import { calInfo } from "../../pages/CalendarPage";

const CalContainer = ({ info }: { info: calInfo }) => {
  const LIST = new Array(42).fill(0);
  const { year, month, start, length, holiday, data } = info;

  data.map((el) => (LIST[el.date + start - 1] = el.price));
  data.sort((a, b) => a.price - b.price);

  return (
    <Wrapper>
      <Calendar>
        <Header>
          <Year>{year}</Year>
          <Month>{month}월</Month>
        </Header>
        <Grid>
          {LIST.map((val, idx) => (
            <Item key={idx}>
              <Date $isHoliday={holiday.includes(idx - start + 1)}>
                {idx - start < 0 || idx - start + 1 > length
                  ? ""
                  : idx - start + 1}
              </Date>
              {data.length >= 4 ? (
                <Price
                  $isColored={
                    val <= data[1].price
                      ? "min"
                      : val >= data[data.length - 2].price
                        ? "max"
                        : ""
                  }
                >
                  {val !== 0 && `${val}만`}
                </Price>
              ) : (
                <Price $isColored=""></Price>
              )}
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
`;
const Date = styled.span<{ $isHoliday: boolean }>`
  ${({ theme }) => theme.fonts.body_regular_16};
  color: ${({ theme, $isHoliday }) => $isHoliday && theme.colors.red};
`;
const Price = styled.span<{ $isColored: string }>`
  ${({ theme }) => theme.fonts.body_regular_12};
  color: ${({ theme, $isColored }) =>
    $isColored === "min"
      ? theme.colors.blue
      : $isColored === "max"
        ? theme.colors.red
        : theme.colors.grey_2};
  height: 1.8rem;
`;