import React from 'react'

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import DashboardPage from './pages/DashboardPage';

const routes = [
    {
        path: '/',
        exact: true,
        role: 'guest',
        main: () => <HomePage />
    },
    {
        path: '/login',
        exact: false,
        role: 'guest',
        main: ({ history }) => <LoginPage history={history} />
    },
    {
        path: '/dashboard',
        exact: false,
        role: 'user',
        main: () => <DashboardPage />
    },
    {
        path: '',
        exact: false,
        role: 'guest',
        main: () => <NotFoundPage />
    }
]

export default routes;