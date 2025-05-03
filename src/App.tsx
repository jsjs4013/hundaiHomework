import { styled } from "styled-components";
import Header from "./components/Header";
import FAQPage from "./pages/FAQPage";

function App() {
  return (
    <AppContainer>
      <Header />
      <MainContent>
        <FAQPage />
      </MainContent>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`;

const MainContent = styled.main`
  flex: 1;
  display: flex;
  width: 100%;
`;

export default App;
