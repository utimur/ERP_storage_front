import React, { useContext } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { privateRoutes, publicRoutes } from '../routes'
import { routes } from '../utils/consts'
import { observer } from 'mobx-react-lite'
import DependenciesContext from './DependenciesContext'

const AppRouter = observer(() => {
  const { userStore } = useContext(DependenciesContext)

  return !userStore.IsAuthorized ? (
    <Switch>
      {publicRoutes.map(({ path, Component }) =>
        <Route exact key={path} path={path}>
          <Component />
        </Route>
      )}
      <Redirect to={routes.LOGIN_ROUTE} />
    </Switch>
  ) : (
    <Switch>
      {privateRoutes.map(({ path, Component }) =>
        <Route exact key={path} path={path}>
          <Component />
        </Route>
      )}
      <Redirect to={routes.MAIN_ROUTE} />
    </Switch>
  )
})

export default AppRouter
