import { ReactNode } from 'react';
import styled, { css } from 'styled-components';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  onClick: () => void;
}

const StyledButton = styled.button<Pick<ButtonProps, 'variant' | 'disabled'>>`
  all: unset;
  background: #414242;
  border-radius: 8px;
  padding: 14px;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  color: #ffffff;
  border: 2px solid #414242;
  box-sizing: border-box;
  cursor: pointer;
  &:hover {
    background: #2e2e2e;
  }
  ${({ variant }) =>
    variant === 'secondary' &&
    css`
      color: #414242;
      background: #ffffff;
      &:hover {
        background: #fafafa;
        color: #2e2e2e;
      }
    `}
  ${({ disabled }) =>
    disabled &&
    css`
      background: #d8dadb;
      border-color: #d8dadb;
      color: #9c9d9e;
      pointer-events: none;
    `}
`;

export const Button = ({
  children,
  variant = 'primary',
  disabled,
  onClick,
}: ButtonProps) => {
  return (
    <StyledButton variant={variant} disabled={disabled} onClick={onClick}>
      {children}
    </StyledButton>
  );
};
