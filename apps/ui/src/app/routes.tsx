import { Admin, Gallery, Login } from './pages';

export const routes = [
  {
    path: '/login',
    component: <Login />,
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
