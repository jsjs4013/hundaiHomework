import { styled } from "styled-components";

const ProcessSection = () => {
  return (
    <Container>
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
  margin-bottom: 24px;
`;

const ProcessStepsContainer = styled.div`
  display: flex;
  gap: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ProcessStep = styled.div`
  flex: 1;
  text-align: center;
`;

const StepNumber = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 12px;
`;

const StepDescription = styled.div`
  font-size: 14px;
  color: #666;
  line-height: 1.5;
`;

export default ProcessSection;
