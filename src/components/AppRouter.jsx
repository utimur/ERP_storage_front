import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import {privateRoutes, publicRoutes} from "../routes";
import user from "../store/user";
import {routes} from "../utils/consts";

const AppRouter = () => {
    return (
        <div>
            {!user.isAuth
                ?
                <Switch>
                    {publicRoutes.map(({path, Component}) =>
                        <Route exact key={path} path={path}>
                            <Component/>
                        </Route>
                    )}
                    <Redirect to={routes.LOGIN_ROUTE}/>
                </Switch>
                :
                <Switch>
                    {privateRoutes.map(({path, Component}) =>
                        <Route exact key={path} path={path}>
                            <Component/>
                        </Route>
                    )}
                    <Redirect to={routes.MAIN_ROUTE}/>
                </Switch>
            }
        </div>
    );
};

export default AppRouter;
