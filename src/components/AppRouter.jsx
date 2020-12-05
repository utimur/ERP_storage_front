import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import {privateRoutes, publicRoutes} from "../routes";
import user from "../store/user";
import {routes} from "../utils/consts";
import {Container} from "@material-ui/core";

const AppRouter = () => {
    return (
        <Container style={{height:'100%'}} maxWidth="lg">
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
        </Container>
    );
};

export default AppRouter;
