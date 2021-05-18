import { Admin, Results, Robots, Signin } from './pages';

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
