import styled from "styled-components";
import { IcDownSearch } from "../../assets";
const Category = () => {
  return (
    <CategotyBox>
      <CategoryCard>
        <p>즐겨 찾는 노선</p>
        <IcDownSearch />
      </CategoryCard>
      <CategoryCard>
        <p>국내선</p>
        <IcDownSearch />
      </CategoryCard>
      <CategoryCard>
        <p>국제선</p>
        <IcDownSearch />
      </CategoryCard>
    </CategotyBox>
  );
};

export default Category;

const CategotyBox = styled.section`
  display: flex;
  flex-direction: column;
`;
const CategoryCard = styled.div`
  display: flex;
  padding: 2rem 0;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.grey_4};
  & p {
    ${({ theme }) => theme.fonts.body_semibold_16};
  }
`;
