import {
  FirebaseAuthConsumer,
  FirebaseAuthProvider,
  IfFirebaseAuthed,
  IfFirebaseAuthedAnd,
} from '@react-firebase/auth';
import firebase from 'firebase/app';
import 'firebase/auth';
import { useState } from 'react';
import { environment } from '../../../environments/environment';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  const getToken = async () => {
    return await firebase.auth().currentUser.getIdToken(true);
  };

  return (
    <FirebaseAuthProvider {...environment.firebaseConfig} firebase={firebase}>
      <div>
        token: {JSON.stringify(token)}
        <br></br>
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="email"
        />
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="password"
        />
        <button
          onClick={async () => {
            const user = email === 'Admin' ? 'admin@robotart.com' : email;
            await firebase.auth().signInWithEmailAndPassword(user, password);
            setToken(await getToken());
          }}
        >
          login
        </button>
        <button
          onClick={async () => {
            await firebase
              .auth()
              .createUserWithEmailAndPassword(email, password);
            setToken(await getToken());
          }}
        >
          register
        </button>
        <button
          onClick={async () => {
            const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
            await firebase.auth().signInWithPopup(googleAuthProvider);
            setToken(await getToken());
          }}
        >
          Sign In with Google
        </button>
        <button
          onClick={async () => {
            await firebase.auth().signOut();
            setToken('');
          }}
        >
          Sign Out
        </button>
        <FirebaseAuthConsumer>
          {({ isSignedIn, user, providerId }) => {
            return (
              <pre style={{ height: 300, overflow: 'auto' }}>
                {JSON.stringify({ isSignedIn, user, providerId }, null, 2)}
              </pre>
            );
          }}
        </FirebaseAuthConsumer>
        <div>
          <IfFirebaseAuthed>
            {() => {
              return <div>You are authenticated</div>;
            }}
          </IfFirebaseAuthed>
          <IfFirebaseAuthedAnd
            filter={({ providerId }) => providerId !== 'anonymous'}
          >
            {({ providerId }) => {
              return <div>You are authenticated with {providerId}</div>;
            }}
          </IfFirebaseAuthedAnd>
        </div>
      </div>
    </FirebaseAuthProvider>
  );
};
