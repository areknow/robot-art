import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { GlobalNav } from './common/global-nav/global-nav';
import { routes } from './routes';

export const App = () => {
  return (
    <BrowserRouter>
      <div>
        <GlobalNav />
        <Switch>
          {routes.map((route, key) => (
            <Route key={key} path={route.path}>
              {route.component}
            </Route>
          ))}
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
