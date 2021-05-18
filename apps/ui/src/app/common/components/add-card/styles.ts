import styled, { css } from 'styled-components';

export const StyledContent = styled.div`
  margin-top: 51px;
  input {
    text-align: left;
  }
  button {
    width: 48%;
  }
`;

export const StyledUpload = styled.div<{ dragActive: boolean }>`
  cursor: pointer;
  margin-top: 24px;
  background: var(--neutral-3);
  border: 2px dashed var(--neutral-4);
  box-sizing: border-box;
  border-radius: 8px;
  height: 210px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  svg path {
    fill: var(--neutral-5);
  }
  div {
    font-size: 20px;
    line-height: 23px;
    margin-top: 20px;
  }
  ${({ dragActive }) =>
    dragActive &&
    css`
      background: var(--neutral-2);
    `}
`;

export const StyledButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
`;

export const StyledAddButton = styled.div`
  flex-grow: 1;
  margin-left: 24px;
  button {
    width: 100%;
  }
`;

export const StyledClearButton = styled.div`
  all: unset;
  cursor: pointer;
  text-decoration: underline;
  padding: 8px 24px;
  font-size: 20px;
`;
