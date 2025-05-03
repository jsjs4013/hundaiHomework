import { styled } from "styled-components";

export default function Header() {
  return (
    <Container>
      <h1>KIA Biz</h1>
      <Navigation>
        <NavList>
          <NavItem>서비스 소개</NavItem>
          <NavItem>자주 묻는 질문</NavItem>
          <NavItem>새소식</NavItem>
          <NavItem>상담문의</NavItem>
        </NavList>
      </Navigation>
    </Container>
  );
}

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 48px;
  width: 100%;
`;

const Navigation = styled.nav`
  display: flex;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin: 0 16px;
  font-weight: bold;
  cursor: pointer;
`;
