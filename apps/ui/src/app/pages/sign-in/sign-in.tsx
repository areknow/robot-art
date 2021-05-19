import firebase from 'firebase/app';
import 'firebase/auth';
import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { ReactComponent as GoogleLogo } from '../../../assets/google-logo.svg';
import { ReactComponent as MondoLogo } from '../../../assets/mondo-logo.svg';
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
  StyledGoogleLogo,
  StyledInputs,
  StyledLogo,
} from './styles';

export const SignIn = () => {
  // Hard code the document title since this page does not use the page layout.
  document.title = 'Robot Art';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [formDirty, setFormDirty] = useState(false);
  const [formError, setFormError] = useState('');

  const { authenticated } = useFirebaseAuthenticated();

  /** Perform sign in with google. */
  const signInWithGoogle = async () => {
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    await firebase.auth().signInWithPopup(googleAuthProvider);
  };

  /** Perform registration with email/password. */
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

  /** Perform sign in with email/password. */
  const SignInWithEmailPass = async () => {
    setFormDirty(true);
    if (!email.length || !password.length) {
      setFormError('Please ensure the form is not empty.');
    } else {
      // If the 'Admin' user name is found, replace it with the full email address.
      const user = email === ADMIN_USER_NAME ? ADMIN_EMAIL : email;
      try {
        await firebase.auth().signInWithEmailAndPassword(user, password);
      } catch (error) {
        setFormError(error.message);
      }
    }
  };

  /** React to the input key strokes and trigger the sign in when enter key is recorded. */
  const handleInputKeyPress = async (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (email && password && event.key === 'Enter') {
      SignInWithEmailPass();
      setFormDirty(true);
    }
  };

  /** Reset the form. */
  const resetForm = () => {
    setFormDirty(false);
    setFormError('');
  };

  /**
   * While the firebase auth state is being decided, show nothing.
   * This prevents a flash of the login screen while already authenticated.
   */
  if (authenticated === undefined) {
    return null;
  }

  if (authenticated) {
    return <Redirect to="/" />;
  } else {
    return (
      <StyledContainer>
        <StyledContent>
          <StyledLogo>
            <MondoLogo />
          </StyledLogo>
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
                    SignInWithEmailPass();
                  }}
                >
                  Sign in
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
                icon={
                  <StyledGoogleLogo>
                    <GoogleLogo />
                  </StyledGoogleLogo>
                }
                variant="secondary"
                onClick={async () => {
                  signInWithGoogle();
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
                      Sign in
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
