import { memo, ReactNode } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { SIGN_IN_PATH } from './constants';

interface ProtectedRouteProps {
  /** The path of the protected route. */
  path: string;
  /** The component to render when authentication clears. */
  component: ReactNode;
  /** The authentication condition to switch on. */
  authenticated: boolean;
}

/**
 * The protected route component conditionally displays a ReactNode (in this case a page),
 * or it will redirect the user to the requested path (in this case the sign in page).
 */
export const ProtectedRoute = memo(
  ({ path, component, authenticated }: ProtectedRouteProps) => (
    <Route
      path={path}
      render={() =>
        authenticated ? component : <Redirect to={SIGN_IN_PATH} />
      }
    />
  )
);
