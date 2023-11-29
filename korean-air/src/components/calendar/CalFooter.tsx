import styled from "styled-components";

const CalFooter = ({ selectedDate }: { selectedDate: string[] }) => {
  return (
    <Wrapper>
      <Range>
        <Departure $isSelected={selectedDate[0] !== "가는 날"}>
          {selectedDate[0]}
        </Departure>
        <span>~</span>
        <Arrival $isSelected={selectedDate[1] !== "오는 날"}>
          {selectedDate[1]}
        </Arrival>
      </Range>
      <Button>선택</Button>
    </Wrapper>
  );
};

export default CalFooter;

const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  position: fixed;
  bottom: 0;

  padding: 1.6rem;
  width: 100%;
  max-width: 43rem;
  height: 11.4rem;

  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 -2rem 2rem 0 rgba(107, 117, 136, 0.1);
`;
const Range = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;

  margin-top: 0.3rem;

  & > span:nth-child(2n + 1) {
    width: 13.5rem;
    text-align: center;
  }
  & > span:nth-child(2) {
    ${({ theme }) => theme.fonts.body_bold_16};
    color: ${({ theme }) => theme.colors.black};
  }
`;
const Departure = styled.span<{ $isSelected: boolean }>`
  ${({ theme, $isSelected }) =>
    $isSelected ? theme.fonts.body_bold_16 : theme.fonts.body_regular_16};
  color: ${({ theme, $isSelected }) =>
    $isSelected ? theme.colors.black : theme.colors.gray};
`;
const Arrival = styled.span<{ $isSelected: boolean }>`
  ${({ theme, $isSelected }) =>
    $isSelected ? theme.fonts.body_bold_16 : theme.fonts.body_regular_16};
  color: ${({ theme, $isSelected }) =>
    $isSelected ? theme.colors.black : theme.colors.gray};
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 1.4rem 0rem;
  width: 100%;

  border: none;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.gray};

  ${({ theme }) => theme.fonts.body_bold_14};
  color: ${({ theme }) => theme.colors.white};
`;
