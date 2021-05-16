import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../../../assets/logo.svg';
import {
  StyledMainNav,
  StyledNavContainer,
  StyledSecondaryNav,
} from './styles';

export const GlobalNav = () => {
  return (
    <StyledNavContainer>
      <div>
        <StyledMainNav>
          <Logo />
          <ul>
            <li>
              <Link to="/">Gallery</Link>
            </li>
            <li>
              <Link to="/results">Results</Link>
            </li>
          </ul>
        </StyledMainNav>
        <StyledSecondaryNav>
          <ul>
            <li>
              <Link to="/admin">Admin</Link>
            </li>
            <li>Log Out</li>
          </ul>
        </StyledSecondaryNav>
      </div>
    </StyledNavContainer>
  );
};
