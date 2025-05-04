import { useState } from "react";
import { useSuspenseQueries } from "@tanstack/react-query";
import { styled } from "styled-components";
import { queryOptionsLayer } from "../../queryOptions";
import { Category } from "../../types/api";
import FAQTabs from "./FAQTabs";
import FAQHeader from "./FAQHeader";
import FAQList from "./FAQList";
import { TabType } from "../../types/api/category";

export default function FAQSection() {
  // 상태 관리
  const [activeTab, setActiveTab] = useState<TabType>(TabType.CONSULT);
  const [selectedCategory, setSelectedCategory] = useState<
    Category.Response[number] | null
  >(null);

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

  return (
    <Container>
      {/* FAQ 헤더 컴포넌트 */}
      <FAQHeader
        title="자주 묻는 질문"
        description="궁금하신 내용을 빠르게 찾아보세요."
      />

      {/* FAQ 탭 컴포넌트 */}
      <FAQTabs activeTab={activeTab} onTabChange={handleActiveTabChange} />

      <FAQList
        categories={categories}
        setSelectedCategory={setSelectedCategory}
        isUsage={activeTab === TabType.USAGE}
        activeTab={activeTab}
        selectedCategory={selectedCategory}
      />
    </Container>
  );
}

const Container = styled.section`
  width: 100%;
  margin-bottom: 48px;
`;
