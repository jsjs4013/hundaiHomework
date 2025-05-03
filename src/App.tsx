import { useState } from "react";
import styled from "styled-components";
import { useSuspenseQuery } from "@tanstack/react-query";
import { categoryOptions } from "./queryOptions";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

const AppContainer = styled.div`
  /* 필요하다면 App 컴포넌트 루트 요소에 대한 스타일 */
`;

const LogoContainer = styled.div`
  a {
    display: inline-block;
    padding: 0 1rem;
  }
`;

const Logo = styled.img`
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;

  &:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
`;

const ReactLogo = styled(Logo)`
  &:hover {
    filter: drop-shadow(0 0 2em #61dafbaa);
  }
`;

const Card = styled.div`
  padding: 2em;
  margin-bottom: 1em;
`;

const ReadTheDocs = styled.p`
  color: #888;
`;

const TabButtonContainer = styled.div`
  margin-bottom: 1rem;
  button {
    margin: 0 0.5rem;
  }
`;

const CategoryList = styled.ul`
  list-style: none;
  padding: 0;
  text-align: left;
`;

const CategoryItem = styled.li`
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  border-radius: 4px;
`;

function App() {
  const [selectedTab, setSelectedTab] = useState<"USAGE" | "CONSULT">("USAGE");

  const {
    data: categories,
    isLoading,
    isError,
    error,
  } = useSuspenseQuery(categoryOptions(selectedTab));

  return (
    <AppContainer>
      <LogoContainer>
        <a href="https://vite.dev" target="_blank">
          <Logo src={viteLogo} alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <ReactLogo src={reactLogo} alt="React logo" />
        </a>
      </LogoContainer>
      <h1>Vite + React + Tanstack Query</h1>

      <Card>
        <h2>Categories (Tab: {selectedTab})</h2>
        <TabButtonContainer>
          <button
            onClick={() => setSelectedTab("USAGE")}
            disabled={selectedTab === "USAGE"}
          >
            Usage Tab
          </button>
          <button
            onClick={() => setSelectedTab("CONSULT")}
            disabled={selectedTab === "CONSULT"}
          >
            Consult Tab
          </button>
        </TabButtonContainer>

        {isLoading && <p>Loading categories...</p>}
        {isError && <p>Error loading categories: {error?.message}</p>}
        {categories && categories.length > 0 && (
          <CategoryList>
            {categories.map((category) => (
              <CategoryItem key={category.categoryID}>
                {category.name}
              </CategoryItem>
            ))}
          </CategoryList>
        )}
        {categories && categories.length === 0 && (
          <p>No categories found for this tab.</p>
        )}
      </Card>

      <ReadTheDocs>Click on the Vite and React logos to learn more</ReadTheDocs>
    </AppContainer>
  );
}

export default App;
