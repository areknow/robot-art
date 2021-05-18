import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
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
  @media (max-width: 900px) {
    border-radius: 0;
    height: 100vh;
    padding: 74px 0 0 0;
    border: 0;
  }
`;

export const StyledFormError = styled.div`
  margin-top: 50px;
  color: var(--red);
  text-align: center;
  height: 16px;
  padding: 0 80px;
  @media (max-width: 900px) {
    margin-top: 46px;
  }
`;

export const StyledLogo = styled.div`
  svg {
    fill: var(--neutral-6);
  }
  @media (max-width: 900px) {
    text-align: center;
    svg {
      height: 65px;
      width: 165px;
    }
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
  @media (max-width: 900px) {
    padding: 0 24px;
    margin-top: 30px;
  }
`;

export const StyledInputs = styled.div`
  > div:not(:last-child) {
    margin-bottom: 40px;
  }
`;

export const StyledGoogleLogo = styled.div`
  svg {
    width: 20px;
    height: 20px;
    margin: 0;
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
