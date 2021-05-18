import { Admin, Results, Robots, Signin } from '../../pages';

/**
 * The routing structure for the applications.
 * Includes conditional support for protected routes.
 */
export const routes = [
  {
    path: '/signin',
    component: <Signin />,
    protected: false,
  },
  {
    path: '/results',
    component: <Results />,
    protected: true,
  },
  {
    path: '/admin',
    component: <Admin />,
    protected: true,
  },
  {
    path: '/',
    component: <Robots />,
    protected: true,
  },
];
