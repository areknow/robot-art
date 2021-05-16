import { Admin, Login, Results, Robots } from './pages';

export const routes = [
  {
    path: '/login',
    component: <Login />,
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
