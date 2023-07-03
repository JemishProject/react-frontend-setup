import React, { lazy } from 'react';
const Index = lazy(() => import('./pages/User'));
const ProfileIndex = lazy(() => import('./pages/User/profile'));
const Login = lazy(() => import('./pages/User/login'));

interface Routes {
  path: string,
  Component: React.FC,
  exact: boolean,
  isAuth: boolean
}

const routes: Routes[] = [
  {
    path: '/',
    Component: Index,
    exact: true,
    isAuth: false
  },
  {
    path: '/profile',
    Component: ProfileIndex,
    exact: true,
    isAuth: true
  },
  {
    path: '/login',
    Component: Login,
    exact: true,
    isAuth: false
  }
];

export default routes;