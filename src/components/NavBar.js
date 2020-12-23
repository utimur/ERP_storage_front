import React, { useContext } from 'react'
import Container from '@material-ui/core/Container'
import { AppBar, makeStyles } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import { observer } from 'mobx-react-lite'
import Grid from '@material-ui/core/Grid'
import { NavLink } from 'react-router-dom'
import { routes, roles } from '../utils/consts'
import app from '../stores/app'
import LinearProgress from '@material-ui/core/LinearProgress'
import DependenciesContext from './DependenciesContext'

const useStyles = makeStyles((theme) => ({
  root: {
    flexDirection: 'row'
  },
  flexEnd: {
    justifyContent: 'flex-end'
  },
  navlinkStyle: {
    textDecoration: 'none',
    color: 'white'
  }
}))

const NavBar = observer(() => {
  const { userStore } = useContext(DependenciesContext)
  const classes = useStyles()

  return (
    <AppBar className={classes.root}>
      <Container maxWidth='lg' fixed>
        {!userStore.IsAuthorized ? (
          <Grid container className={`${classes.flexEnd} ${classes.root}`}>
            <NavLink to={routes.LOGIN_ROUTE} style={{ textDecoration: 'none' }}>
              <Button className={classes.navlinkStyle} color='inherit'>Авторизация</Button>
            </NavLink>
            <NavLink to={routes.REGISTRATION_ROUTE} style={{ textDecoration: 'none' }}>
              <Button className={classes.navlinkStyle} color='inherit'>Регистрация</Button>
            </NavLink>
          </Grid>
        ) : (
          <Grid container direction='row' justify='space-between'>
            {userStore.Role === roles.ADMIN ? (
              <Button style={{ color: 'white' }} variant='text' onClick={() => app.showGoodDialog()}>
                Добавить товар
              </Button>
            ) : <span />}
            <Button onClick={() => userStore.logout()} color='inherit'>Выйти</Button>
          </Grid>
        )}
        {app.loader && <LinearProgress color='secondary' />}
      </Container>
    </AppBar>
  )
})

export default NavBar
