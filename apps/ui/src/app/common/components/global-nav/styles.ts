import styled from 'styled-components';

export const StyledNavContainer = styled.div`
  background: #fff;
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.17);
  padding: 24px 0;
  position: relative;
  z-index: 1;
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: auto;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    li {
      a {
        color: inherit;
        text-decoration: none;
      }
    }
  }
`;

export const StyledMainNav = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  color: #414242;
  svg {
    height: 32px;
    width: 81px;
    margin-right: 56px;
  }
  ul {
    li:not(:last-child) {
      margin-right: 40px;
    }
  }
`;
export const StyledSecondaryNav = styled.div`
  font-size: 16px;
  line-height: 18px;
  color: #737475;
  ul {
    li {
      &:not(:last-child) {
        margin-right: 24px;
      }
    }
  }
`;
