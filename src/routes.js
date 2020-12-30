import { routes } from './utils/consts'
import Main from './components/main/Main'
import RegistrationForm from './components/RegistrationForm'
import LoginForm from './components/LoginForm'

export const publicRoutes = [
  {
    path: routes.REGISTRATION_ROUTE,
    Component: RegistrationForm
  },
  {
    path: routes.LOGIN_ROUTE,
    Component: LoginForm
  }
]

export const privateRoutes = [
  {
    path: routes.MAIN_ROUTE,
    Component: Main
  }
]
