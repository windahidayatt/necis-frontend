import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PublicLayout from '../view/layout/LayoutGeneral';
import { isLogin } from './../utils/Utils';

const PublicRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={matchProps => (
            isLogin() ? <Redirect to="/dashboard" /> :
            <PublicLayout>
                <Component {...matchProps} />
            </PublicLayout>
        )} />
    )
};

export default PublicRoute;