import { styled } from "styled-components";
import { FAQSection } from "../components/FAQ";

export default function FAQPage() {
  return (
    <Container>
      {/* FAQ 섹션 컴포넌트 */}
      <FAQSection />

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
