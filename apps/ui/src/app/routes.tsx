import { Admin, Gallery, Login, Results } from './pages';

export const routes = [
  {
    path: '/login',
    component: <Login />,
  },
  {
    path: '/results',
    component: <Results />,
  },
  {
    path: '/admin',
    component: <Admin />,
  },
  {
    path: '/',
    component: <Gallery />,
  },
];
