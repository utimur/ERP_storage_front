import {routes} from "./utils/consts";
import Main from "./components/main/Main";
import Registration from "./components/auth/Registration";
import Login from "./components/auth/Login";

// ЗДЕСЬ ТУПО ПАРУ МАССИВОВ С РОУТАМИ

export const publicRoutes = [
    {
        path: routes.REGISTRATION_ROUTE,
        Component: Registration,
    },
    {
        path: routes.LOGIN_ROUTE,
        Component: Login,
    }
]

export const privateRoutes = [
    {
        path: routes.MAIN_ROUTE,
        Component: Main,
    }
]
