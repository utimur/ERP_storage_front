import React, { useContext } from 'react'
import Container from '@material-ui/core/Container'
import { AppBar, makeStyles } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import { observer } from 'mobx-react-lite'
import Grid from '@material-ui/core/Grid'
import { NavLink } from 'react-router-dom'
import { roles, routes } from '../utils/consts'
import app from '../stores/app'
import LinearProgress from '@material-ui/core/LinearProgress'
import { GlobalDependenciesContext, GoodDialogContext } from '../contexts'

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
  const { dependencies: { userStore }, resetDependencies } = useContext(GlobalDependenciesContext)
  const { dependencies: { goodDialogStore } } = useContext(GoodDialogContext)
  const classes = useStyles()

  const handleLogout = () => {
    userStore.logout()
    resetDependencies()
  }

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
              <Button style={{ color: 'white' }} variant='text' onClick={() => goodDialogStore.toggleVisibility()}>
                Добавить складскую единицу
              </Button>
            ) : <span />}
            <Button onClick={handleLogout} color='inherit'>Выйти</Button>
          </Grid>
        )}
        {app.loader && <LinearProgress color='secondary' />}
      </Container>
    </AppBar>
  )
})

export default NavBar
