import styled from 'styled-components';

export const StyledNavContainer = styled.div`
  background: var(--neutral-1);
  box-shadow: 0px 1px 0px var(--shadow);
  padding: 24px 0;
  position: sticky;
  top: 0;
  z-index: 1;
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1248px;
    padding: 0 24px;
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
        &.active {
          position: relative;
          &:after {
            background-color: var(--neutral-5);
            content: '';
            width: 100%;
            height: 2px;
            position: absolute;
            bottom: -6px;
            left: 0;
          }
        }
      }
    }
  }
`;

export const StyledLogo = styled.div`
  svg {
    fill: var(--neutral-6);
  }
`;

export const StyledMainNav = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  color: var(--neutral-5);
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
  @media (max-width: 900px) {
    svg {
      margin-right: 0;
    }
    ul {
      display: none;
    }
  }
`;

export const StyledSecondaryNav = styled.div`
  font-size: 16px;
  line-height: 18px;
  color: var(--neutral-4);
  > div {
    display: flex;
  }
  ul {
    li {
      &:not(:last-child) {
        margin-right: 24px;
      }
      a {
        &.active:after {
          background-color: var(--neutral-4);
        }
      }
      button {
        all: unset;
        cursor: pointer;
      }
    }
  }
  @media (max-width: 900px) {
    display: none;
  }
`;

export const StyledAvatar = styled.div<{ url: string }>`
  height: 32px;
  width: 32px;
  border-radius: 20px;
  background-color: var(--neutral-4);
  margin-left: 20px;
  background-image: url(${({ url }) => url});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  color: var(--neutral-1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  @media (max-width: 900px) {
    display: none;
  }
`;

export const StyledHamburger = styled.div`
  height: 32px;
  width: 32px;
  align-items: center;
  display: flex;
  div {
    height: 2px;
    width: 100%;
    background: var(--neutral-5);
    position: relative;
    &:before,
    &:after {
      background: var(--neutral-5);
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
    }
    &:before {
      top: -8px;
    }
    &:after {
      bottom: -8px;
    }
  }
`;

export const StyledMobileNav = styled.div`
  display: none;
  @media (max-width: 900px) {
    display: flex;
  }
`;

export const StyledMobileMenu = styled.div`
  width: 100%;
  height: calc(100vh - 84px);
  background: var(--overlay);
  position: absolute;
  top: 84px;
  left: 0;
  border-top: 1px solid var(--neutral-3);
  ul {
    display: block;
    li {
      button {
        all: unset;
        width: 100%;
        box-sizing: border-box;
      }
      a,
      button {
        padding: 20px;
        display: block;
        font-size: 20px;
        background: var(--neutral-1);
        border-bottom: 1px solid var(--neutral-3);
        &.active {
          font-weight: bold;
          &:after {
            display: none;
          }
        }
      }
    }
  }
`;
