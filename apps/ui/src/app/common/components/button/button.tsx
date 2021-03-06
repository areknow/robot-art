import { memo, ReactNode } from 'react';
import styled, { css } from 'styled-components';

interface ButtonProps {
  /** The content displayed in the button itself.  */
  children: ReactNode;
  /** The button variant theme. */
  variant?: 'primary' | 'secondary';
  /** The button disabled state control. */
  disabled?: boolean;
  /** An optional icon that will be displayed to the left of the content. */
  icon?: ReactNode;
  /** The event fired when the button is clicked. */
  onClick: () => void;
}

const StyledButton = styled.button<Pick<ButtonProps, 'variant' | 'disabled'>>`
  all: unset;
  background: var(--neutral-5);
  border-radius: 8px;
  padding: 14px;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  color: var(--neutral-1);
  border: 2px solid var(--neutral-5);
  box-sizing: border-box;
  cursor: pointer;
  &:hover {
    border-color: var(--neutral-4);
    background: var(--neutral-4);
  }
  &:active {
    border-color: var(--neutral-5);
    background: var(--neutral-5);
  }
  ${({ variant }) =>
    variant === 'secondary' &&
    css`
      color: var(--neutral-5);
      background: var(--neutral-1);
      &:hover {
        background: var(--neutral-2);
        color: var(--neutral-5);
      }
      &:active {
        border-color: var(--neutral-5);
        background: var(--neutral-5);
        color: var(--neutral-1);
      }
    `}
  ${({ disabled }) =>
    disabled &&
    css`
      background: var(--neutral-3);
      border-color: var(--neutral-3);
      color: var(--neutral-1);
      pointer-events: none;
    `}
`;

const StyledContentWithButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:after {
    content: '';
    width: 20px;
  }
`;

export const Button = memo(
  ({ children, variant = 'primary', disabled, icon, onClick }: ButtonProps) => {
    return (
      <StyledButton
        variant={variant}
        disabled={disabled}
        onClick={onClick}
        data-testid="button"
      >
        {icon ? (
          <StyledContentWithButton>
            {icon}
            {children}
          </StyledContentWithButton>
        ) : (
          children
        )}
      </StyledButton>
    );
  }
);
