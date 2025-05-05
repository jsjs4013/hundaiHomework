import { styled } from "styled-components";
import { FAQSection } from "../components/FAQ";
import { ServiceInquirySection } from "../components/ServiceInquiry";
import { ProcessSection } from "../components/Process";
import { AppDownloadSection } from "../components/AppDownload";

export default function FAQPage() {
  return (
    <Container>
      {/* FAQ 섹션 컴포넌트 */}
      <FAQSection />

      {/* 서비스 문의 섹션 */}
      <ServiceInquirySection />

      {/* 이용 프로세스 안내 섹션 */}
      <ProcessSection />

      {/* 앱 다운로드 섹션 */}
      <AppDownloadSection />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  padding: 40px 20px;
  flex: 1;
`;
