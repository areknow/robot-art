import { memo, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as MondoLogo } from '../../../../assets/mondo-logo.svg';
import { firebaseAuth } from '../../constants';
import { useFirebaseAdmin, useFirebaseAuthenticated } from '../../hooks';
import { MAIN_NAVIGATION } from './links';
import {
  StyledAvatar,
  StyledCloseButton,
  StyledHamburger,
  StyledLogo,
  StyledMainNav,
  StyledMobileMenu,
  StyledMobileNav,
  StyledNavContainer,
  StyledSecondaryNav,
} from './styles';

/** The action when the sign out link is clicked. */
const signOut = async () => {
  await firebaseAuth().signOut();
};

/** The avatar string formatting when no user picture is found. */
const formatAvatar = (email: string) => {
  return email?.slice(0, 1).toUpperCase();
};

export const GlobalNav = memo(() => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { isAdmin } = useFirebaseAdmin();
  const { user } = useFirebaseAuthenticated();

  /** Create reusable main nav links. */
  const MainNavLinks = () => (
    <>
      {MAIN_NAVIGATION.map((item, key) => (
        <li key={key} onClick={() => setMobileMenuOpen(false)}>
          <NavLink to={item.path} exact activeClassName="active">
            {item.label}
          </NavLink>
        </li>
      ))}
    </>
  );

  /** Create reusable secondary nav links/buttons. */
  const SecondaryNavLinks = () => (
    <>
      {isAdmin && (
        <li onClick={() => setMobileMenuOpen(false)}>
          <NavLink to="/admin">Admin</NavLink>
        </li>
      )}
      <li>
        <button onClick={signOut}>Sign out</button>
      </li>
    </>
  );

  return (
    <StyledNavContainer>
      <div>
        <StyledMainNav>
          <StyledLogo>
            <MondoLogo />
          </StyledLogo>
          <ul>
            <MainNavLinks />
          </ul>
        </StyledMainNav>

        <StyledSecondaryNav>
          <div>
            <ul>
              <SecondaryNavLinks />
            </ul>
            <StyledAvatar url={user?.photoURL}>
              {!user?.photoURL && formatAvatar(user?.email)}
            </StyledAvatar>
          </div>
        </StyledSecondaryNav>

        <StyledMobileNav>
          <StyledHamburger onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <div />
          </StyledHamburger>
          {mobileMenuOpen && (
            <StyledMobileMenu>
              <StyledCloseButton
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <div />
              </StyledCloseButton>
              <ul>
                <MainNavLinks />
                <SecondaryNavLinks />
              </ul>
            </StyledMobileMenu>
          )}
        </StyledMobileNav>
      </div>
    </StyledNavContainer>
  );
});
