import { useState, useRef, useEffect, Dispatch, SetStateAction } from "react";
import { styled } from "styled-components";
import { Category, Faq } from "../../types/api";
import { useQuery } from "@tanstack/react-query";
import queryOptionsLayer from "../../queryOptions";
import { TabType } from "../../types/api/category";
import FAQSearch from "./FAQSearch";
import FAQCategories from "./FAQCategories";

interface Props {
  categories: Category.Response;
  setSelectedCategory: Dispatch<
    SetStateAction<Category.Response[number] | null>
  >;
  isUsage: boolean;
  activeTab: TabType;
  selectedCategory: Category.Response[number] | null;
}

interface FAQItemProps {
  isUsage: boolean;
  category: Faq.Item["categoryName"];
  subCategoryName: Faq.Item["subCategoryName"];
  question: string;
  answer: string;
}

export default function FAQList({
  categories,
  setSelectedCategory,
  isUsage,
  activeTab,
  selectedCategory,
}: Props) {
  const [question, setQuestion] = useState("");
  const [isSearch, setIsSearch] = useState(false);
  const { data: faqData, refetch } = useQuery(
    queryOptionsLayer.faq({
      tab: activeTab,
      limit: 10,
      offset: 0,
      faqCategoryID: selectedCategory?.categoryID,
      question,
    })
  );

  useEffect(() => {
    if (activeTab) setQuestion("");
  }, [activeTab]);

  const handleChange = (query: string) => {
    setQuestion(query);
  };

  const handleSearch = () => {
    refetch();
    setIsSearch(true);
  };

  return (
    <>
      {/* FAQ 검색 컴포넌트 */}
      <FAQSearch
        question={question}
        onChange={handleChange}
        onSearch={handleSearch}
      />

      {isSearch && (
        <strong>검색결과 총 {faqData?.pageInfo.totalRecord}건</strong>
      )}

      {/* FAQ 카테고리 필터 컴포넌트 */}
      <FAQCategories
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <FAQListSection>
        {faqData?.items.map((item, index) => (
          <FAQItemComponent
            key={index}
            isUsage={isUsage}
            category={item.categoryName}
            subCategoryName={item.subCategoryName}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </FAQListSection>
    </>
  );
}

// 개별 FAQ 아이템 컴포넌트
export function FAQItemComponent({
  isUsage,
  category,
  subCategoryName,
  question,
  answer,
}: FAQItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, []);

  return (
    <FAQItem>
      <FAQItemHeader onClick={() => setIsExpanded(!isExpanded)}>
        <FAQCategory>{category}</FAQCategory>
        {isUsage && <FAQCategory>{subCategoryName}</FAQCategory>}
        <FAQQuestion>{question}</FAQQuestion>
        <ExpandIcon>{isExpanded ? "▲" : "▼"}</ExpandIcon>
      </FAQItemHeader>
      <FAQContentWrapper
        isExpanded={isExpanded}
        style={{ maxHeight: isExpanded ? `${contentHeight}px` : "0" }}
      >
        <FAQContent
          ref={contentRef}
          dangerouslySetInnerHTML={{ __html: answer }}
        />
      </FAQContentWrapper>
    </FAQItem>
  );
}

const FAQListSection = styled.div`
  margin-bottom: 48px;
`;

const FAQItem = styled.div`
  border-bottom: 1px solid #e0e0e0;
`;

const FAQItemHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 0;
  cursor: pointer;
`;

const FAQCategory = styled.span`
  font-size: 14px;
  color: #666;
  width: 120px;
`;

const FAQQuestion = styled.span`
  flex: 1;
  font-size: 16px;
`;

const ExpandIcon = styled.span`
  font-size: 12px;
  color: #666;
`;

const FAQContentWrapper = styled.div<{ isExpanded: boolean }>`
  max-height: ${(props) => (props.isExpanded ? "1000px" : "0")};
  overflow: hidden;
  transition: max-height 0.4s cubic-bezier(0.25, 1, 0.5, 1);
  will-change: max-height;
  padding-top: ${(props) => (props.isExpanded ? "0" : "0")};
  padding-bottom: ${(props) => (props.isExpanded ? "0" : "0")};
`;

const FAQContent = styled.div`
  padding: 16px;
  background: #f9f9f9;
  font-size: 14px;
  line-height: 1.6;
`;
