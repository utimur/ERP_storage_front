import React from 'react'
import Container from '@material-ui/core/Container'
import { AppBar, makeStyles } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import user from '../store/user'
import { observer } from 'mobx-react-lite'
import Grid from '@material-ui/core/Grid'
import { NavLink } from 'react-router-dom'
import { routes } from '../utils/consts'
import app from "../store/app";
import LinearProgress from "@material-ui/core/LinearProgress";

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
  const classes = useStyles()
  return (
    <AppBar className={classes.root}>
      <Container maxWidth='lg' fixed>
        {!user.isAuth
          ? <Grid container className={`${classes.flexEnd} ${classes.root}`}>
            <NavLink to={routes.LOGIN_ROUTE} style={{ textDecoration: 'none' }}>
              <Button className={classes.navlinkStyle} color='inherit'>Авторизация</Button>
            </NavLink>
            <NavLink to={routes.REGISTRATION_ROUTE} style={{ textDecoration: 'none' }}>
              <Button className={classes.navlinkStyle} color='inherit'>Регистрация</Button>
            </NavLink>
          </Grid>
          : <Grid container direction="row" justify="space-between">
              <Button style={{color:"white"}}  variant='text' onClick={() => app.showGoodDialog()}>
                Добавить товар
              </Button>
                <Button onClick={() => user.logout()} color='inherit'>Выйти</Button>
            </Grid>}
        {app.loader && <LinearProgress color="secondary" />}
      </Container>
    </AppBar>
  )
})

export default NavBar
