import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 80px);
  position: relative;
`;

export const StyledContent = styled.div`
  padding: 80px 0 94px 0;
  width: 607px;
  background: var(--neutral-1);
  box-shadow: 0px 23px 30px -9px var(--shadow);
  border-radius: 8px;
  border: 1px solid var(--neutral-3);
  svg {
    width: 233px;
    height: 91px;
    margin: auto;
    display: flex;
  }
`;

export const StyledFormError = styled.div`
  margin-top: 50px;
  color: var(--red);
  text-align: center;
  height: 16px;
  padding: 0 80px;
`;

export const StyledLogo = styled.div`
  svg {
    fill: var(--neutral-6);
  }
`;

export const StyledForm = styled.div`
  margin-top: 30px;
  padding: 0 80px;
  button {
    width: 100%;
  }
  button:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const StyledInputs = styled.div`
  > div:not(:last-child) {
    margin-bottom: 40px;
  }
`;

export const StyledButtons = styled.div`
  margin-top: 40px;
`;

export const StyledFooterContent = styled.div`
  text-align: center;
  span {
    margin-right: 4px;
    color: var(--neutral-4);
  }
  button {
    all: unset;
    cursor: pointer;
    text-decoration: underline;
  }
`;
