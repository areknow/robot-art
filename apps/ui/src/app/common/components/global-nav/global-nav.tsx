import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../../../assets/logo.svg';
import { firebaseAuth } from '../../constants';
import { useFirebaseAdmin } from '../../hooks';
import { MAIN_NAVIGATION } from './links';
import {
  StyledMainNav,
  StyledNavContainer,
  StyledSecondaryNav,
} from './styles';

export const GlobalNav = () => {
  const { isAdmin } = useFirebaseAdmin();

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
            {isAdmin && (
              <li>
                <Link to="/Admin">Admin</Link>
              </li>
            )}
            <li>
              <button
                onClick={async () => {
                  await firebaseAuth().signOut();
                }}
              >
                Log Out
              </button>
            </li>
          </ul>
        </StyledSecondaryNav>
      </div>
    </StyledNavContainer>
  );
};
