import { FunctionComponent, MouseEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Card, FormControl, FormHelperText, Grid, IconButton, InputAdornment, InputLabel, Link, OutlinedInput, Typography } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { ICredentials } from '../../../models';
import { callToGoogleAppsScriptAPI } from '../../../services';
import { useAuthContext } from '../../../contexts';
import { CustomSnackbar } from '../../../components';

const Login: FunctionComponent<{}> = () => {
    const { login, loadingProgressBar, noLoadingProgressBar, onBackdrop, offBackdrop } = useAuthContext();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [user, setUser] = useState<ICredentials>({
        
        email: {
            value: "",
            error: false,
        },
        password: {
            value: "",
            error: false
        }
    });

    const [snackbar, setSnackbar] = useState({
        success: false,
        error: false,
        warning: false,
        info: false
    });

    const [message, setMessage] = useState({
        success: "",
        error: "",
        warning: "",
        info: ""
    });

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    }

    const handleClickGoToRegister = () => {
        navigate('/auth/register');
    }

    const handleChangeInput = (event: any) => {
        const { name, value } = event.target;
        setUser(prevState => ({ ...prevState, [name]: { value: value } }));
        if (name === 'email') localStorage.setItem(name, value);
    }

    const handleBlurInput = (event: any) => {
        const { name, value } = event.target;
        if (value === "") {
            setUser(prevState => ({ ...prevState, [name]: { value: value, error: true } }));
        } else {
            setUser(prevState => ({ ...prevState, [name]: { value: value, error: false } }));
        }
    }

    const getEmailFromLocalStorage = () => {
        const email = localStorage.getItem('email');
        if (email !== null) setUser(prevState => ({ ...prevState, email: { value: email } }));
    }

    const handleClickLoginUser = async () => {
        if (user.email.value !== "" && user.password.value !== "") {
            loadingProgressBar();
            const response = await callToGoogleAppsScriptAPI({ action: "loginUser", data: { email: user.email.value, password: user.password.value } });
            if (response.status) {
                noLoadingProgressBar();
                console.log(response.data);
                localStorage.setItem('token', JSON.stringify(response.data[0].token));
                setMessage(prevState => ({ ...prevState, success: response.message }))
                setSnackbar(prevState => ({ ...prevState, success: true }));
                setTimeout(() => {
                    setSnackbar(prevState => ({ ...prevState, success: false }));
                    setMessage(prevState => ({ ...prevState, success: "" }));
                }, 5000);
                onBackdrop();
                setTimeout(() => {
                    login();
                    offBackdrop();
                }, 3000);
            } else {
                noLoadingProgressBar();
                console.log(response.message)
                setMessage(prevState => ({ ...prevState, error: response.message }))
                setSnackbar(prevState => ({ ...prevState, error: true }));
                setTimeout(() => {
                    setSnackbar(prevState => ({ ...prevState, error: false }));
                    setMessage(prevState => ({ ...prevState, error: "" }));
                }, 5000);
            }
        } else {
            setUser(prevState => ({
                ...prevState,
                email: { value: user.email.value, error: !Boolean(user.email.value !== "") },
                password: { value: user.password.value, error: !Boolean(user.password.value !== "") },
            }));
        }
    }

    useEffect(() => {
        getEmailFromLocalStorage();
    }, []);

    return (
        <>
            {snackbar.info && <CustomSnackbar message={message.info} type="info" />}
            {snackbar.warning && <CustomSnackbar message={message.warning} type="warning" />}
            {snackbar.error && <CustomSnackbar message={message.error} type="error" />}
            {snackbar.success && <CustomSnackbar message={message.success} type="success" />}
            <Card
                sx={{
                    margin: 3,
                    padding: 3.5,
                    maxWidth: 420
                }}
            >
                <Box marginBottom={2}>
                    <Typography
                        sx={{
                            fontWeight: 500,
                            textTransform: "uppercase",
                            textAlign: "center",
                            fontSize: 20
                        }}
                        className="text-neutral-700"
                    >
                        Iniciar sesión
                    </Typography>
                </Box>
                <Grid container rowSpacing={2}>
                    <Grid item xs={12}>
                        <FormControl fullWidth size="small"
                        >
                            <InputLabel htmlFor="email-input">Correo</InputLabel>
                            <OutlinedInput
                                id="email-input"
                                name="email"
                                type="text"
                                label="Correo"
                                value={user.email.value}
                                onChange={handleChangeInput}
                                onBlur={handleBlurInput}
                                error={user.email.error}
                            />
                            {user.email.error && <FormHelperText className="text-red-600">Correo es requerido *</FormHelperText>}
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl size="small" fullWidth>
                            <InputLabel htmlFor="password-input">Contraseña</InputLabel>
                            <OutlinedInput
                                id="password-input"
                                name="password"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff className="text-slate-800" /> : <Visibility className="text-slate-800" />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Contraseña"
                                value={user.password.value}
                                onChange={handleChangeInput}
                                onBlur={handleBlurInput}
                                error={user.password.error}
                            />
                            {user.password.error && <FormHelperText className="text-red-600">Password es requerido *</FormHelperText>}
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            variant="contained"
                            fullWidth
                            className="bg-slate-800 hover:bg-slate-900"
                            onClick={handleClickLoginUser}
                        >
                            Entrar
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography
                            sx={{
                                textAlign: "center",
                                fontSize: 14
                            }}
                            className="text-neutral-700"
                        >
                            ¿No tienes una cuenta? <Link className="cursor-pointer" onClick={handleClickGoToRegister}>Registrate</Link>
                        </Typography>
                    </Grid>
                </Grid>
            </Card>
        </>

    )
}

export default Login;
