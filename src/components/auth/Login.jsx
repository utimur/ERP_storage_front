import React from 'react';
import Card from "@material-ui/core/Card";
import {Button, CardContent, Grid, Typography} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";

const Login = () => {
    return (
        <Grid style={{height:"100%"}} container  alignItems="center" justify="center">
            <Card >
                <CardContent>
                    <Box  width={400} >
                        <Grid container justify="center">
                            <Typography variant="h5">Авторизация</Typography>
                        </Grid>
                        <Box mt={2}>
                            <TextField fullWidth label="Введите имя пользователя..." variant="outlined" />
                        </Box>
                        <Box mt={2}>
                            <TextField fullWidth label="Введите пароль..." variant="outlined" />
                        </Box>
                    </Box>
                    <Grid container justify="flex-end">
                        <Box mt={2}>
                            <Button  variant="outlined" color="primary">Войти</Button>
                        </Box>
                    </Grid>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default Login;
