import firebase from 'firebase/app';
import 'firebase/auth';
import { useState } from 'react';
import { Redirect } from 'react-router-dom';
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
  StyledFormError,
  StyledInputs,
} from './styles';

export const Login = () => {
  document.title = 'Robot Art';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [formDirty, setFormDirty] = useState(false);
  const [formError, setFormError] = useState('');

  const { authenticated } = useFirebaseAuthenticated();

  const loginWithGoogle = async () => {
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    await firebase.auth().signInWithPopup(googleAuthProvider);
  };

  const registerWithEmailPass = async () => {
    setFormDirty(true);
    if (!email.length || !password.length) {
      setFormError('Please ensure the form is not empty.');
    } else {
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
      } catch (error) {
        setFormError(error.message);
      }
    }
  };

  const loginWithEmailPass = async () => {
    setFormDirty(true);
    if (!email.length || !password.length) {
      setFormError('Please ensure the form is not empty.');
    } else {
      const user = email === ADMIN_USER_NAME ? ADMIN_EMAIL : email;
      try {
        await firebase.auth().signInWithEmailAndPassword(user, password);
      } catch (error) {
        setFormError(error.message);
      }
    }
  };

  const handleInputKeyPress = async (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (email && password && event.key === 'Enter') {
      loginWithEmailPass();
      setFormDirty(true);
    }
  };

  const resetForm = () => {
    setFormDirty(false);
    setFormError('');
  };

  if (authenticated) {
    return <Redirect to="/" />;
  } else {
    return (
      <StyledContainer>
        <StyledContent>
          <Logo />
          <StyledFormError>{formError ? formError : ''}</StyledFormError>
          <StyledForm>
            <StyledInputs>
              {isRegistering && (
                <Input
                  label="Name"
                  value={name}
                  onChange={(value) => {
                    setName(value);
                  }}
                />
              )}
              <div onKeyPress={handleInputKeyPress}>
                <Input
                  label="Email"
                  value={email}
                  invalid={formDirty && email.length === 0}
                  onChange={(value) => {
                    resetForm();
                    setEmail(value);
                  }}
                />
              </div>
              <div onKeyPress={handleInputKeyPress}>
                <Input
                  label="Password"
                  type="password"
                  value={password}
                  invalid={formDirty && password.length === 0}
                  onChange={(value) => {
                    resetForm();
                    setPassword(value);
                  }}
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
                    <button
                      onClick={() => {
                        resetForm();
                        setIsRegistering(true);
                      }}
                    >
                      Sign up
                    </button>
                  </div>
                )}
                {isRegistering && (
                  <div>
                    <span>Already a member?</span>
                    <button
                      onClick={() => {
                        resetForm();
                        setIsRegistering(false);
                      }}
                    >
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
