import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../../../assets/logo.svg';
import { MAIN_NAVIGATION, SECONDARY_NAVIGATION } from './links';
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
            {MAIN_NAVIGATION.map((item, key) => (
              <li key={key}>
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </StyledMainNav>
        <StyledSecondaryNav>
          <ul>
            {SECONDARY_NAVIGATION.map((item, key) => (
              <li key={key}>
                {item.path ? (
                  <Link to={item.path}>{item.label}</Link>
                ) : (
                  <button onClick={item.action}>{item.label}</button>
                )}
              </li>
            ))}
          </ul>
        </StyledSecondaryNav>
      </div>
    </StyledNavContainer>
  );
};
