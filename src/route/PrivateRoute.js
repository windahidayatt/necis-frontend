import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// import { isLogin } from './../utils/index';
// import PrivateLayout from '../layout/layoutadmin';

const PrivateRoute = ({component: Component, ...rest}) => {
    return (
    //   <Route {...rest} render={matchProps => (
    //     isLogin() ?
    //     <PrivateLayout>
    //         <Component {...matchProps} />
    //     </PrivateLayout>
    //     : <Redirect to="/" />
    //   )} />
    <div>
        
    </div>
    )
  };

export default PrivateRoute;