import { styled } from "styled-components";
import { Category } from "../../types/api";

interface FAQCategoriesProps {
  categories: Category.Response;
  selectedCategory: Category.Response[number] | null;
  onSelectCategory: (category: Category.Response[number] | null) => void;
}

export default function FAQCategories({
  categories,
  selectedCategory,
  onSelectCategory,
}: FAQCategoriesProps) {
  return (
    <CategorySection>
      <CategoryButton
        active={selectedCategory === null}
        onClick={() => onSelectCategory(null)}
      >
        전체
      </CategoryButton>
      {categories.map((category) => (
        <CategoryButton
          key={category.name}
          active={selectedCategory?.categoryID === category.categoryID}
          onClick={() =>
            onSelectCategory({
              categoryID: category.categoryID,
              name: category.name,
            })
          }
        >
          {category.name}
        </CategoryButton>
      ))}
    </CategorySection>
  );
}

const CategorySection = styled.div`
  display: flex;
  margin-bottom: 32px;
  gap: 8px;
  flex-wrap: wrap;
`;

const CategoryButton = styled.button<{ active: boolean }>`
  padding: 8px 16px;
  background: ${(props) => (props.active ? "#333" : "#f5f5f5")};
  color: ${(props) => (props.active ? "#fff" : "#333")};
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 14px;
`;
