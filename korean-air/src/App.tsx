import GlobalStyle from './styles/GlobalStyle';
import { styled, ThemeProvider } from 'styled-components';
import theme from './styles/theme';
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Test>과연 적용은 ?</Test>
      </ThemeProvider>
    </>
  );
}

export default App;

const Test = styled.p`
  color: ${({ theme }) => theme.colors.blue};
  ${({ theme }) => theme.fonts.title_bold_20};
`;
