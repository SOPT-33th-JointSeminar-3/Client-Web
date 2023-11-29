import styled from "styled-components";
import { useState } from "react";
import getHomePosts from "../../api/getHomePosts";

interface PostItem {
  id: number;
  title: string;
  date: string;
}
export const Notice = () => {
  const [response, setResponse] = useState([]);
  getHomePosts(setResponse);
  console.log(response);
  return (
    <NoticeBox>
      <Header>
        <Title>알려드립니다</Title>
        <More>See More</More>
      </Header>
      {response.map((item: PostItem) => (
        <NoticeContent key={item.id}>
          <NoticeTitle>{item.title}</NoticeTitle>
          <NoticeDate>{item.date}</NoticeDate>
        </NoticeContent>
      ))}
    </NoticeBox>
  );
};

const NoticeBox = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 1.6rem;
`;
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding-bottom: 1.2rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.grey_5};
`;
const Title = styled.p`
  ${({ theme }) => theme.fonts.title_bold_20}
`;
const More = styled.p`
  color: ${({ theme }) => theme.colors.grey_3};
  ${({ theme }) => theme.fonts.body_regular_12};
`;
const NoticeContent = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.6rem 0;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.grey_5};
`;
const NoticeTitle = styled.p`
  ${({ theme }) => theme.fonts.body_bold_16};
`;
const NoticeDate = styled.p`
  color: ${({ theme }) => theme.colors.grey_2};
  ${({ theme }) => theme.fonts.body_regular_12};
`;
