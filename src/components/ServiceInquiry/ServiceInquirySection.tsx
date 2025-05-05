import { styled } from "styled-components";

const ServiceInquirySection = () => {
  return (
    <Container>
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
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  margin-bottom: 60px;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const InquiryCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const InquiryCard = styled.div`
  flex: 1;
  min-width: 200px;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
`;

const CardTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const CardSubtitle = styled.div`
  font-size: 14px;
  color: #666;
`;

export default ServiceInquirySection;
