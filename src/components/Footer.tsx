import { styled } from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <LogoContainer>
          <LogoText>KIA</LogoText>
        </LogoContainer>
        <FooterInfo>
          <FooterLinks>
            <FooterLink href="/privacy">개인정보 처리방침</FooterLink>
            <FooterLink href="/terms">이용약관</FooterLink>
          </FooterLinks>
          <FooterText>
            <FooterTextLine>
              서울특별시 서초구 헌릉로 12 기아(주) 대표: 송호성, 최준영
            </FooterTextLine>
            <FooterTextLine>
              사업자등록번호: 119-81-02316 통신판매번호: 2006-07935
            </FooterTextLine>
            <FooterTextLine>
              고객센터: 1833-4964 제휴문의:{" "}
              <FooterLink href="mailto:kiabiz@kia.com">
                kiabiz@kia.com
              </FooterLink>
            </FooterTextLine>
          </FooterText>
          <Copyright>© 2023 KIA CORP. All Rights Reserved.</Copyright>
        </FooterInfo>
      </FooterContent>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  width: 100%;
  background-color: #0b1117;
  color: white;
  padding: 30px 0;
`;

const FooterContent = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const LogoContainer = styled.div`
  margin-right: 40px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

const LogoText = styled.div`
  font-size: 32px;
  font-weight: bold;
  color: white;
`;

const FooterInfo = styled.div`
  flex: 1;
  text-align: right;
`;

const FooterLinks = styled.div`
  display: flex;
  margin-bottom: 15px;
  justify-content: flex-end;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const FooterLink = styled.a`
  color: white;
  text-decoration: none;
  margin-right: 20px;
  font-size: 14px;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }

  &:last-child {
    margin-right: 0;
  }
`;

const FooterText = styled.div`
  margin-bottom: 15px;
`;

const FooterTextLine = styled.p`
  margin: 5px 0;
  font-size: 14px;
  color: #aaa;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Copyright = styled.p`
  font-size: 14px;
  color: #aaa;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export default Footer;
