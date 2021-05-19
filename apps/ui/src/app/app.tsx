import { FirebaseAuthProvider } from '@react-firebase/auth';
import firebase from 'firebase/app';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { environment } from '../environments/environment';
import '../styles/global.scss';
import { GlobalNav, ProtectedRoute } from './common/components';
import { routes } from './common/config';
import { DarkModeProvider } from './common/context';
import { useFirebaseAuthenticated } from './common/hooks';

export const App = () => {
  const { authenticated } = useFirebaseAuthenticated();

  return (
    <FirebaseAuthProvider {...environment.firebaseConfig} firebase={firebase}>
      <DarkModeProvider>
        <BrowserRouter>
          {authenticated && <GlobalNav />}
          <Switch>
            {routes.map((route, key) =>
              route.protected ? (
                <ProtectedRoute
                  key={key}
                  path={route.path}
                  component={route.component}
                  authenticated={authenticated as boolean}
                />
              ) : (
                <Route key={key} path={route.path}>
                  {route.component}
                </Route>
              )
            )}
          </Switch>
        </BrowserRouter>
      </DarkModeProvider>
    </FirebaseAuthProvider>
  );
};

export default App;
