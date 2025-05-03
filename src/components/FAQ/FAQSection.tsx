import { Suspense, useState } from "react";
import { useSuspenseQueries } from "@tanstack/react-query";
import { styled } from "styled-components";
import { queryOptionsLayer } from "../../queryOptions";
import { Category } from "../../types/api";
import FAQTabs from "./FAQTabs";
import FAQHeader from "./FAQHeader";
import FAQSearch from "./FAQSearch";
import FAQCategories from "./FAQCategories";
import FAQList from "./FAQList";
import { TabType } from "../../types/api/category";

export default function FAQSection() {
  // 상태 관리
  const [activeTab, setActiveTab] = useState<TabType>(TabType.USAGE);
  const [selectedCategory, setSelectedCategory] = useState<
    Category.Response[number] | null
  >(null);
  const [searchQuery, setSearchQuery] = useState("");

  // API 데이터 가져오기
  const [usage, consult] = useSuspenseQueries({
    queries: [
      queryOptionsLayer.category({ tab: TabType.USAGE }),
      queryOptionsLayer.category({ tab: TabType.CONSULT }),
    ],
  });

  // 현재 선택된 탭에 따라 카테고리 데이터 결정
  const categories = activeTab === TabType.USAGE ? usage.data : consult.data;

  const handleActiveTabChange = (tab: TabType) => {
    setActiveTab(tab);
    setSelectedCategory(null);
  };

  // 검색 처리 함수
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // 실제 검색 로직 구현 필요
    console.log("검색어:", query);
  };

  return (
    <Container>
      {/* FAQ 헤더 컴포넌트 */}
      <FAQHeader
        title="자주 묻는 질문"
        description="궁금하신 내용을 빠르게 찾아보세요."
      />

      {/* FAQ 탭 컴포넌트 */}
      <FAQTabs activeTab={activeTab} onTabChange={handleActiveTabChange} />

      {/* FAQ 검색 컴포넌트 */}
      <FAQSearch onSearch={handleSearch} />

      {/* FAQ 카테고리 필터 컴포넌트 */}
      <FAQCategories
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {/* FAQ 리스트 컴포넌트 */}
      <Suspense fallback={<></>}>
        <FAQList
          isUsage={activeTab === TabType.USAGE}
          activeTab={activeTab}
          selectedCategory={selectedCategory}
        />
      </Suspense>
    </Container>
  );
}

const Container = styled.section`
  width: 100%;
  margin-bottom: 48px;
`;
