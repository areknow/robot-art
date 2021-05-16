import { firebaseAuth } from '../../constants';

export const MAIN_NAVIGATION = [
  {
    label: 'Robots',
    path: '/',
  },
  {
    label: 'Results',
    path: '/results',
  },
];

export const SECONDARY_NAVIGATION = [
  {
    label: 'Admin',
    path: '/admin',
  },
  {
    label: 'Log out',
    action: async () => {
      await firebaseAuth().signOut();
    },
  },
];
