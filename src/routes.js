import { routes } from './utils/consts'
import Main from './components/main/Main'
import LoginFormContainer from './components/LoginForm/container'
import RegistrationFormContainer from './components/RegistrationForm/container'

export const publicRoutes = [
  {
    path: routes.REGISTRATION_ROUTE,
    Component: RegistrationFormContainer
  },
  {
    path: routes.LOGIN_ROUTE,
    Component: LoginFormContainer
  }
]

export const privateRoutes = [
  {
    path: routes.MAIN_ROUTE,
    Component: Main
  }
]
