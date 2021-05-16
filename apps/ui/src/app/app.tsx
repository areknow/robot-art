import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../styles/global.scss';
import { ProtectedRoute } from './common/components';
import { firebaseAuth } from './common/constants';
import { routes } from './routes';

export const App = () => {
  const [authenticated, setAuthenticated] = useState(false);

  //TODO: make this a hook...
  firebaseAuth().onAuthStateChanged((user) => {
    if (user) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  });

  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route, key) =>
          route.protected ? (
            <ProtectedRoute
              key={key}
              path={route.path}
              component={route.component}
              authenticated={authenticated}
            />
          ) : (
            <Route key={key} path={route.path}>
              {route.component}
            </Route>
          )
        )}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
