import { styled } from "styled-components";

const AppDownloadSection = () => {
  return (
    <Container>
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
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  margin-bottom: 60px;
  text-align: center;
`;

const AppDownloadTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 24px;
`;

const AppStoreButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const AppStoreButton = styled.button`
  padding: 12px 24px;
  background-color: #f5f5f5;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
`;

export default AppDownloadSection;
