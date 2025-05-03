import { styled } from "styled-components";
import { TabType } from "../../types/api/category";

interface FAQTabsProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export default function FAQTabs({ activeTab, onTabChange }: FAQTabsProps) {
  return (
    <TabsSection>
      <TabButton
        active={activeTab === TabType.CONSULT}
        onClick={() => onTabChange(TabType.CONSULT)}
      >
        서비스 도입
      </TabButton>
      <TabButton
        active={activeTab === TabType.USAGE}
        onClick={() => onTabChange(TabType.USAGE)}
      >
        서비스 이용
      </TabButton>
    </TabsSection>
  );
}

const TabsSection = styled.div`
  display: flex;
  margin-bottom: 24px;
`;

const TabButton = styled.button<{ active?: boolean }>`
  padding: 16px 24px;
  font-size: 16px;
  background: ${(props) => (props.active ? "#0a1929" : "#fff")};
  color: ${(props) => (props.active ? "#fff" : "#333")};
  border: none;
  border-bottom: ${(props) => (props.active ? "none" : "1px solid #e0e0e0")};
  cursor: pointer;
  flex: 1;
`;
