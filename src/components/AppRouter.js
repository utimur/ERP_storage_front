import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { GlobalDependenciesContext } from '../contexts'
import { privateRoutes, publicRoutes } from '../routes'
import { routes } from '../utils/consts'

const AppRouter = observer(() => {
  const { dependencies: { userStore } } = useContext(GlobalDependenciesContext)

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
