import { styled } from "styled-components";

interface FAQSearchProps {
  question: string;
  onChange: (query: string) => void;
  onSearch: () => void;
}

export default function FAQSearch({
  question,
  onChange,
  onSearch,
}: FAQSearchProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const handleSearch = () => {
    onSearch();
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <SearchSection>
      <SearchInput
        placeholder="찾으시는 내용을 입력해 주세요"
        value={question}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <SearchButton onClick={handleSearch}>
        <SearchIcon>🔍</SearchIcon>
      </SearchButton>
    </SearchSection>
  );
}

const SearchSection = styled.div`
  display: flex;
  margin-bottom: 24px;
  padding: 20px;
  background-color: #f6f6f9;
  overflow: hidden;
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 12px 16px;
  font-size: 16px;
  border: 1px solid #e0e0e0;
  border-right: none;
  &:focus {
    outline: none;
  }
`;

const SearchButton = styled.button`
  background: #fff;
  border: 1px solid #e0e0e0;
  border-left: none;
  padding: 0 16px;
  cursor: pointer;
`;

const SearchIcon = styled.span`
  font-size: 20px;
`;
