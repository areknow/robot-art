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
`;
