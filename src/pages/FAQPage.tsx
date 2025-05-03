import { styled } from "styled-components";

export default function FAQPage() {
  return (
    <Container>
      {/* FAQ 헤더 섹션 */}
      <FAQHeaderSection>
        <Title>자주 묻는 질문</Title>
        <Description>궁금하신 내용을 빠르게 찾아보세요.</Description>
      </FAQHeaderSection>

      {/* FAQ 탭 섹션 */}
      <TabsSection>
        <TabButton active>서비스 도입</TabButton>
        <TabButton>서비스 이용</TabButton>
      </TabsSection>

      {/* FAQ 검색 섹션 */}
      <SearchSection>
        <SearchInput placeholder="찾으시는 내용을 입력해 주세요" />
        <SearchButton>
          <SearchIcon>🔍</SearchIcon>
        </SearchButton>
      </SearchSection>

      {/* FAQ 카테고리 필터 */}
      <CategorySection>
        <CategoryButton active>전체</CategoryButton>
        <CategoryButton>서비스 상품</CategoryButton>
        <CategoryButton>도입 상담</CategoryButton>
        <CategoryButton>계약</CategoryButton>
      </CategorySection>

      {/* FAQ 아코디언 리스트 */}
      <FAQListSection>
        <FAQItem>
          <FAQItemHeader>
            <FAQCategory>서비스 상품</FAQCategory>
            <FAQQuestion>
              기아 비즈에서는 어떤 상품을 이용할 수 있나요?
            </FAQQuestion>
            <ExpandIcon>▼</ExpandIcon>
          </FAQItemHeader>
          <FAQContent>{/* FAQ 내용이 들어갈 자리 */}</FAQContent>
        </FAQItem>

        {/* 추가 FAQ 아이템들... */}
      </FAQListSection>

      {/* 서비스 문의 섹션 */}
      <ServiceInquirySection>
        <SectionTitle>서비스 문의</SectionTitle>
        <InquiryCardsContainer>
          <InquiryCard>
            <CardIcon>📄</CardIcon>
            <CardTitle>서비스 제안서 다운로드</CardTitle>
          </InquiryCard>
          <InquiryCard>
            <CardIcon>✏️</CardIcon>
            <CardTitle>상담문의 등록하기</CardTitle>
          </InquiryCard>
          <InquiryCard>
            <CardIcon>💬</CardIcon>
            <CardTitle>카톡으로 문의하기</CardTitle>
            <CardSubtitle>ID: 기아 비즈</CardSubtitle>
          </InquiryCard>
        </InquiryCardsContainer>
      </ServiceInquirySection>

      {/* 이용 프로세스 안내 섹션 */}
      <ProcessSection>
        <SectionTitle>이용 프로세스 안내</SectionTitle>
        <ProcessStepsContainer>
          <ProcessStep>
            <StepIcon>👤</StepIcon>
            <StepNumber>1. 문의 등록</StepNumber>
            <StepDescription>
              상담 문의를 등록해 주시면, 담당자가 빠르게 상담을 제공합니다.
            </StepDescription>
          </ProcessStep>
          {/* 추가 프로세스 단계들... */}
        </ProcessStepsContainer>
      </ProcessSection>

      {/* 앱 다운로드 섹션 */}
      <AppDownloadSection>
        <AppDownloadTitle>기아 비즈 App 지금 만나보세요!</AppDownloadTitle>
        <AppStoreButtons>
          <AppStoreButton>
            <AppStoreIcon>🤖</AppStoreIcon>
            Google Play
          </AppStoreButton>
          <AppStoreButton>
            <AppStoreIcon>🍎</AppStoreIcon>
            App Store
          </AppStoreButton>
        </AppStoreButtons>
      </AppDownloadSection>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  padding: 40px 20px;
  flex: 1;
`;

const FAQHeaderSection = styled.div`
  text-align: left;
  font-weight: bold;
  margin-bottom: 40px;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const Description = styled.p`
  font-size: 16px;
  color: #666;
`;

const TabsSection = styled.div`
  display: flex;
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 24px;
`;

const TabButton = styled.button<{ active?: boolean }>`
  padding: 16px 24px;
  font-size: 16px;
  background: ${(props) => (props.active ? "#0a1929" : "#fff")};
  color: ${(props) => (props.active ? "#fff" : "#333")};
  border: none;
  cursor: pointer;
  flex: 1;
`;

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

const CategorySection = styled.div`
  display: flex;
  margin-bottom: 32px;
  gap: 8px;
`;

const CategoryButton = styled.button<{ active?: boolean }>`
  padding: 8px 16px;
  background: ${(props) => (props.active ? "#333" : "#f5f5f5")};
  color: ${(props) => (props.active ? "#fff" : "#333")};
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 14px;
`;

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

const FAQContent = styled.div`
  padding: 16px;
  background: #f9f9f9;
  font-size: 14px;
  line-height: 1.6;
`;

const ServiceInquirySection = styled.div`
  margin-bottom: 48px;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 24px;
`;

const InquiryCardsContainer = styled.div`
  display: flex;
  gap: 24px;
`;

const InquiryCard = styled.div`
  flex: 1;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 24px;
  text-align: center;
  cursor: pointer;
`;

const CardIcon = styled.div`
  font-size: 24px;
  margin-bottom: 16px;
`;

const CardTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

const CardSubtitle = styled.div`
  font-size: 14px;
  color: #666;
  margin-top: 8px;
`;

const ProcessSection = styled.div`
  margin-bottom: 48px;
`;

const ProcessStepsContainer = styled.div`
  display: flex;
  gap: 24px;
`;

const ProcessStep = styled.div`
  flex: 1;
  text-align: center;
`;

const StepIcon = styled.div`
  font-size: 32px;
  margin-bottom: 16px;
`;

const StepNumber = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const StepDescription = styled.div`
  font-size: 14px;
  color: #666;
  line-height: 1.4;
`;

const AppDownloadSection = styled.div`
  background: #f5f5f5;
  padding: 48px;
  text-align: center;
  border-radius: 8px;
`;

const AppDownloadTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 24px;
`;

const AppStoreButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
`;

const AppStoreButton = styled.button`
  display: flex;
  align-items: center;
  padding: 12px 24px;
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
`;

const AppStoreIcon = styled.span`
  font-size: 20px;
  margin-right: 8px;
`;
