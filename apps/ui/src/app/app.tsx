import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../styles/global.scss';
import { ProtectedRoute } from './common/components';
import { useFirebaseAuthenticated } from './common/hooks';
import { routes } from './routes';

export const App = () => {
  const { authenticated } = useFirebaseAuthenticated();

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
