import { ReactNode } from 'react';
import styled from 'styled-components';

interface CardProps {
  children: ReactNode;
}

const StyledCard = styled.div`
  background: #ffffff;
  border: 1px solid #d8dadb;
  box-sizing: border-box;
  box-shadow: 0px 9px 15px -9px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  padding: 40px 24px 24px 24px;
  text-align: center;
`;

export const Card = ({ children }: CardProps) => {
  return <StyledCard>{children}</StyledCard>;
};
