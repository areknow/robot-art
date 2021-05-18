import { ReactNode } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { SIGN_IN_PATH } from './constants';

interface ProtectedRouteProps {
  path: string;
  component: ReactNode;
  authenticated: boolean;
}
export const ProtectedRoute = ({
  path,
  component,
  authenticated,
}: ProtectedRouteProps) => (
  <Route
    path={path}
    render={() => (authenticated ? component : <Redirect to={SIGN_IN_PATH} />)}
  />
);
