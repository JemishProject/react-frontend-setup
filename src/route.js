import { lazy } from 'react';
const Index = lazy(() => import('./components'));
const ProfileIndex = lazy(() => import('./components/profile'));
const Login = lazy(() => import('./components/login'));

const routes = [
  {
    path: '/',
    element: <Index />,
    exact: true,
    isAuth: false
  },
  {
    path: '/profile',
    element: <ProfileIndex />,
    exact: true,
    isAuth: true
  },
  {
    path: '/login',
    element: <Login />,
    exact: true,
    isAuth: false
  }
];

export default routes;