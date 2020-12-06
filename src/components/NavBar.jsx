import React from 'react';
import Container from "@material-ui/core/Container";
import {AppBar, makeStyles} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import user from "../store/user"
import {observer} from "mobx-react-lite";
import Grid from "@material-ui/core/Grid";
import {NavLink} from "react-router-dom";
import {routes} from "../utils/consts";

const useStyles = makeStyles((theme) => ({
    root: {
        flexDirection: "row",
    },
    flexEnd: {
        justifyContent: "flex-end"
    },
    navlinkStyle: {
        textDecoration: "none",
        color: "white",
    }

}))


const NavBar = observer(() => {
    const classes = useStyles()
    return (
        <AppBar className={classes.root}>
            <Container maxWidth={'lg'} fixed={true}>
                {!user.isAuth?
                    <Grid container={true} className={`${classes.flexEnd} ${classes.root}`}>
                        <NavLink to={routes.LOGIN_ROUTE} style = {{textDecoration: 'none'}}>
                            <Button className={classes.navlinkStyle} color={'inherit'}>Авторизация</Button>
                        </NavLink>
                        <NavLink to={routes.REGISTRATION_ROUTE} style = {{textDecoration: 'none'}}>
                            <Button className={classes.navlinkStyle} color={'inherit'}>Регистрация</Button>
                        </NavLink>
                    </Grid>
                    :
                    <Grid container={true} className={`${classes.flexEnd} ${classes.root}`}>
                        <Button onClick={() => user.logout()} color={'inherit'}>Выйти</Button>
                    </Grid>
                }
            </Container>
        </AppBar>)
    });

export default NavBar;
