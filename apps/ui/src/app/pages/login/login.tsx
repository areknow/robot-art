import { FirebaseAuthProvider } from '@react-firebase/auth';
import firebase from 'firebase/app';
import 'firebase/auth';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ReactComponent as Logo } from '../../../assets/logo.svg';
import { environment } from '../../../environments/environment';
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
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const history = useHistory();
  const { authenticated } = useFirebaseAuthenticated();
  const [componentDidMount, setComponentDidMount] = useState(false);

  useEffect(() => {
    if (authenticated) {
      history.push('/');
    }
    setComponentDidMount(true);
    return () => setComponentDidMount(false);
  }, [authenticated, history]);

  if (!componentDidMount) {
    return null;
  }

  const getToken = async () => {
    return await firebase.auth().currentUser.getIdToken(true);
  };

  return (
    <FirebaseAuthProvider {...environment.firebaseConfig} firebase={firebase}>
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
              <Input
                label="Email"
                value={email}
                onChange={(value) => setEmail(value)}
              />
              <Input
                label="Password"
                value={password}
                onChange={(value) => setPassword(value)}
              />
            </StyledInputs>
            <StyledButtons>
              {!isRegistering && (
                <Button
                  onClick={async () => {
                    const user =
                      email === ADMIN_USER_NAME ? ADMIN_EMAIL : email;
                    await firebase
                      .auth()
                      .signInWithEmailAndPassword(user, password);
                    setToken(await getToken());
                    history.push('/');
                  }}
                >
                  Log in
                </Button>
              )}
              {isRegistering && (
                <Button
                  onClick={async () => {
                    await firebase
                      .auth()
                      .createUserWithEmailAndPassword(email, password);
                    setToken(await getToken());
                    history.push('/');
                  }}
                >
                  Sign up
                </Button>
              )}
              <Button
                variant="secondary"
                onClick={async () => {
                  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
                  await firebase.auth().signInWithPopup(googleAuthProvider);
                  setToken(await getToken());
                  history.push('/');
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
      <pre style={{ whiteSpace: 'pre-wrap' }}>{token}</pre>
    </FirebaseAuthProvider>
  );
};
