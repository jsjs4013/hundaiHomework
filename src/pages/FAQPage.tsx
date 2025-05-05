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
          <InquiryCard
            as="a"
            href="/assets/pdf/service_proposal.pdf"
            download="기아_비즈_서비스_제안서.pdf"
            rel="noopener noreferrer"
            style={{ cursor: "pointer" }}
          >
            <CardTitle>서비스 제안서 다운로드</CardTitle>
          </InquiryCard>
          <InquiryCard
            as="a"
            href="https://wiblebiz.kia.com/Counsel"
            target="_blank"
            rel="noopener noreferrer"
            style={{ cursor: "pointer" }}
          >
            <CardTitle>상담문의 등록하기</CardTitle>
          </InquiryCard>
          <InquiryCard
            as="a"
            href="https://pf.kakao.com/_xfLxjdb"
            target="_blank"
            rel="noopener noreferrer"
            style={{ cursor: "pointer" }}
          >
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
            <StepNumber>1. 문의 등록</StepNumber>
            <StepDescription>
              상담 문의를 등록해 주시면, 담당자가 만족할 상담을 제공합니다.
            </StepDescription>
          </ProcessStep>
          <ProcessStep>
            <StepNumber>2. 관리자 설정</StepNumber>
            <StepDescription>
              관리자 Web 접속 후 결제방식 및 회사정보를 설정합니다.
            </StepDescription>
          </ProcessStep>
          <ProcessStep>
            <StepNumber>3. 임직원 가입</StepNumber>
            <StepDescription>
              이용자 App에서 회원가입 후 소속 회사 인증을 진행합니다.
            </StepDescription>
          </ProcessStep>
          <ProcessStep>
            <StepNumber>4. 서비스 이용</StepNumber>
            <StepDescription>
              이용자 App에서 차량 예약을 하고 K존에서 바로 이용하세요!
            </StepDescription>
          </ProcessStep>
        </ProcessStepsContainer>
      </ProcessSection>

      {/* 앱 다운로드 섹션 */}
      <AppDownloadSection>
        <AppDownloadTitle>기아 비즈 App 지금 만나보세요!</AppDownloadTitle>
        <AppStoreButtons>
          <AppStoreButton
            as="a"
            href="https://play.google.com/store/apps/details?id=kor.mop.user.app"
            target="_blank"
            rel="noopener noreferrer"
            style={{ cursor: "pointer" }}
          >
            Google Play
          </AppStoreButton>
          <AppStoreButton
            as="a"
            href="https://apps.apple.com/kr/app/kia-biz-%EA%B8%B0%EC%95%84-%EB%B9%84%EC%A6%88/id1598065794"
            target="_blank"
            rel="noopener noreferrer"
            style={{ cursor: "pointer" }}
          >
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
