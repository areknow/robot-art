import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as MondoLogo } from '../../../../assets/mondo-logo.svg';
import { firebaseAuth } from '../../constants';
import { useFirebaseAdmin, useFirebaseAuthenticated } from '../../hooks';
import { MAIN_NAVIGATION } from './links';
import {
  StyledAvatar,
  StyledLogo,
  StyledMainNav,
  StyledNavContainer,
  StyledSecondaryNav,
} from './styles';

const signOut = async () => {
  await firebaseAuth().signOut();
};

const formatAvatar = (email: string) => {
  return email.slice(0, 1).toUpperCase();
};

export const GlobalNav = memo(() => {
  const { isAdmin } = useFirebaseAdmin();
  const { user } = useFirebaseAuthenticated();

  return (
    <StyledNavContainer>
      <div>
        <StyledMainNav>
          <StyledLogo>
            <MondoLogo />
          </StyledLogo>
          <ul>
            {MAIN_NAVIGATION.map((item, key) => (
              <li key={key}>
                <NavLink to={item.path} exact activeClassName="active">
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </StyledMainNav>
        <StyledSecondaryNav>
          <div>
            <ul>
              {isAdmin && (
                <li>
                  <NavLink to="/admin">Admin</NavLink>
                </li>
              )}
              <li>
                <button onClick={signOut}>Sign out</button>
              </li>
            </ul>
            <StyledAvatar url={user.photoURL}>
              {!user.photoURL && formatAvatar(user.email)}
            </StyledAvatar>
          </div>
        </StyledSecondaryNav>
      </div>
    </StyledNavContainer>
  );
});
