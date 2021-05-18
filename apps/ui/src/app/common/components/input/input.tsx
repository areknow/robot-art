import { useState } from 'react';
import styled, { css } from 'styled-components';

interface InputProps {
  /** The value string of the text input. Controlled by parent. */
  value: string;
  /** The floating placeholder label. */
  label: string;
  /** JSX.IntrinsicElements.input `type`. */
  type?: string;
  /** Whether or not the input should show a red outline for validation. */
  invalid?: boolean;
  /** The event fired when the input is interacted with. */
  onChange: (value: string) => void;
}

const StyledInputContainer = styled.div`
  position: relative;
`;

const StyledLabel = styled.label<{ focused: boolean }>`
  position: absolute;
  top: 18px;
  left: 25px;
  font-size: 18px;
  line-height: 21px;
  color: var(--neutral-4);
  background: var(--neutral-1);
  padding: 4px;
  pointer-events: none;
  transition: all 0.2s ease;
  ${({ focused }) =>
    focused &&
    css`
      top: -18px;
    `}
`;

const StyledInput = styled.input<{ invalid: boolean }>`
  all: unset;
  background: var(--neutral-1);
  border: 1px solid var(--neutral-3);
  box-sizing: border-box;
  border-radius: 8px;
  padding: 20px 27px;
  width: 100%;
  font-size: 22px;
  line-height: 25px;
  ${({ invalid }) =>
    invalid &&
    css`
      border-color: var(--red);
    `}
`;

export const Input = ({
  value,
  label,
  type,
  invalid = false,
  onChange,
}: InputProps) => {
  const [focused, setFocused] = useState(false);
  return (
    <StyledInputContainer
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    >
      <StyledLabel focused={focused || value.length > 0}>{label}</StyledLabel>
      <StyledInput
        type={type}
        value={value}
        invalid={invalid}
        onChange={(event) => onChange(event.target.value)}
      />
    </StyledInputContainer>
  );
};
