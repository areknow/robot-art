import { useState } from 'react';
import styled, { css } from 'styled-components';

interface InputProps {
  value: string;
  label: string;
  type?: string;
  invalid?: boolean;
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
  color: #737475;
  background: #fff;
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
  background: #ffffff;
  border: 1px solid #d8dadb;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 20px 27px;
  width: 100%;
  font-size: 22px;
  line-height: 25px;
  ${({ invalid }) =>
    invalid &&
    css`
      border-color: #d83030;
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
