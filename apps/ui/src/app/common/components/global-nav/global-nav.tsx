import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../../../assets/logo.svg';
import { firebaseAuth } from '../../constants';
import { useFirebaseAdmin, useFirebaseAuthenticated } from '../../hooks';
import { MAIN_NAVIGATION } from './links';
import {
  StyledAvatar,
  StyledMainNav,
  StyledNavContainer,
  StyledSecondaryNav,
} from './styles';

const logOut = async () => {
  await firebaseAuth().signOut();
};

const formatAvatar = (email: string) => {
  return email.slice(0, 1).toUpperCase();
};

export const GlobalNav = () => {
  const { isAdmin } = useFirebaseAdmin();
  const { user } = useFirebaseAuthenticated();

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
          <div>
            <ul>
              {isAdmin && (
                <li>
                  <Link to="/admin">Admin</Link>
                </li>
              )}
              <li>
                <button onClick={logOut}>Log out</button>
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
};
