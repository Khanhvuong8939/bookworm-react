import React from 'react'

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import DashboardPage from './pages/DashboardPage';
import SignUpPage from './pages/SignUpPage';
import ConfirmationPage from './pages/ConfirmationPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage.js';

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
        path: '/signup',
        exact: false,
        role: 'guest',
        main: ({ history }) => <SignUpPage history={history} />
    },
    {
        path: '/forgot_password',
        exact: false,
        role: 'guest',
        main: ({ history }) => <ForgotPasswordPage history={history} />
    },
    {
        path: '/dashboard',
        exact: false,
        role: 'user',
        main: ({ history }) => <DashboardPage history={history} />
    },
    {
        path: '/confirmation/:token',
        exact: false,
        role: 'guest',
        main: ({ match }) => <ConfirmationPage match={match} />
    },
    {
        path: '',
        exact: false,
        role: 'guest',
        main: () => <NotFoundPage />
    }
]

export default routes;