import firebase from 'firebase/app';
import 'firebase/auth';
import { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { ReactComponent as Logo } from '../../../assets/logo.svg';
import { Button, Input } from '../../common/components';
import { useFirebaseAuthenticated } from '../../common/hooks';
import { ADMIN_EMAIL, ADMIN_USER_NAME } from './constants';
import {
  StyledButtons,
  StyledContainer,
  StyledContent,
  StyledFooterContent,
  StyledForm,
  StyledInputs,
} from './styles';

export const Login = () => {
  document.title = 'Robot Art';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);

  const history = useHistory();
  const { authenticated } = useFirebaseAuthenticated();

  const loginWithEmailPass = async () => {
    const user = email === ADMIN_USER_NAME ? ADMIN_EMAIL : email;
    await firebase.auth().signInWithEmailAndPassword(user, password);
    history.push('/');
  };

  const loginWithGoogle = async () => {
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    await firebase.auth().signInWithPopup(googleAuthProvider);
    history.push('/');
  };

  const registerWithEmailPass = async () => {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    history.push('/');
  };

  const handleInputKeyPress = async (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (email && password && event.key === 'Enter') {
      loginWithEmailPass();
    }
  };

  if (authenticated) {
    return <Redirect to="/" />;
  } else {
    return (
      <StyledContainer>
        <StyledContent>
          <Logo />
          <StyledForm>
            <StyledInputs>
              {isRegistering && (
                <Input
                  label="Name"
                  value={name}
                  onChange={(value) => setName(value)}
                />
              )}
              <div onKeyPress={handleInputKeyPress}>
                <Input
                  label="Email"
                  value={email}
                  onChange={(value) => setEmail(value)}
                />
              </div>
              <div onKeyPress={handleInputKeyPress}>
                <Input
                  label="Password"
                  type="password"
                  value={password}
                  onChange={(value) => setPassword(value)}
                />
              </div>
            </StyledInputs>
            <StyledButtons>
              {!isRegistering && (
                <Button
                  onClick={async () => {
                    loginWithEmailPass();
                  }}
                >
                  Log in
                </Button>
              )}
              {isRegistering && (
                <Button
                  onClick={async () => {
                    registerWithEmailPass();
                  }}
                >
                  Sign up
                </Button>
              )}
              <Button
                variant="secondary"
                onClick={async () => {
                  loginWithGoogle();
                }}
              >
                Authenticate with Google
              </Button>
              <StyledFooterContent>
                {!isRegistering && (
                  <div>
                    <span>Not a member yet?</span>
                    <button onClick={() => setIsRegistering(true)}>
                      Sign up
                    </button>
                  </div>
                )}
                {isRegistering && (
                  <div>
                    <span>Already a member?</span>
                    <button onClick={() => setIsRegistering(false)}>
                      Log in
                    </button>
                  </div>
                )}
              </StyledFooterContent>
            </StyledButtons>
          </StyledForm>
        </StyledContent>
      </StyledContainer>
    );
  }
};
