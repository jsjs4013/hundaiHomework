import { styled } from "styled-components";

interface FAQHeaderProps {
  title: string;
  description: string;
}

export default function FAQHeader({ title, description }: FAQHeaderProps) {
  return (
    <FAQHeaderSection>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </FAQHeaderSection>
  );
}

const FAQHeaderSection = styled.div`
  text-align: left;
  font-weight: bold;
  margin-bottom: 40px;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const Description = styled.p`
  font-size: 16px;
  color: #666;
`;
