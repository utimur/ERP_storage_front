import React from 'react';
import Container from "@material-ui/core/Container";
import {AppBar, makeStyles} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import user from "../store/user"
import {observer} from "mobx-react-lite";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    root: {
        flexDirection: "row",
    },
    flexEnd: {
        justifyContent: "flex-end"
    }

}))


const NavBar = observer(() => {
    const classes = useStyles()
    return (
            <AppBar className={classes.root}>
                <Container maxWidth={'lg'} fixed={true}>
                    {!user.isAuth?
                        <Grid container={true} className={`${classes.flexEnd} ${classes.root}`}>
                            <Button color={'inherit'}>Авторизация</Button>
                            <Button color={'inherit'}>Регистрация</Button>
                        </Grid>
                        :
                        <Grid container={true} className={`${classes.flexEnd} ${classes.root}`}>
                            <Button color={'inherit'}>Выйти</Button>
                        </Grid>
                    }
                </Container>
            </AppBar>
    );
});

export default NavBar;
