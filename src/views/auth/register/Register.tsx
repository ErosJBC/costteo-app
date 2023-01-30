import { FunctionComponent, MouseEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, Button, Card, FormControl, FormHelperText, Grid, IconButton, InputAdornment, InputLabel, Link, OutlinedInput, Typography } from '@mui/material';
import { IUser } from '../../../models';
import { CustomSnackbar } from '../../../components';
import { callToGoogleAppsScriptAPI } from '../../../services';

const Register: FunctionComponent<{}> = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [user, setUser] = useState<IUser>({
        id: {
            value: "",
            error: false,
        },
        names: {
            value: "",
            error: false,
        },
        lastnames: {
            value: "",
            error: false,
        },
        email: {
            value: "",
            error: false,
        },
        phone: {
            value: "",
            error: false,
        },
        company: {
            value: "",
            error: false,
        },
        rol: {
            value: "",
            error: false,
        },
        commentaries: {
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

    const handleClickGoToLogin = () => {
        navigate('/auth/login');
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

    const handleClickRegisterUser = async () => {
        if (user.email.value !== "" && user.password.value !== "" && user.names.value !== "" && user.lastnames.value !== "" && user.phone.value !== "" && user.company.value !== "" && user.rol.value !== "" && user.commentaries.value !== "") {
            const response = await callToGoogleAppsScriptAPI({
                action: "registerUser",
                data: {
                    id: "",
                    names: user.names.value,
                    lastnames: user.lastnames.value,
                    email: user.email.value,
                    phone: user.phone.value,
                    company: user.company.value,
                    rol: user.rol.value,
                    commentaries: user.commentaries.value,
                    password: user.password.value
                }
            });
            if (response.status) {
                console.log(response.data);
                setMessage(prevState => ({ ...prevState, success: response.message }))
                setSnackbar(prevState => ({ ...prevState, success: true }));
                setTimeout(() => {
                    setSnackbar(prevState => ({ ...prevState, success: false }));
                    setMessage(prevState => ({ ...prevState, success: "" }));
                }, 5000);
                setTimeout(() => {
                    navigate('/auth/login');
                }, 3000);
            } else {
                if (response.data.length > 0) {
                    if (response.data[0].registered) {
                        console.log(response.message)
                        setMessage(prevState => ({ ...prevState, info: response.message }))
                        setSnackbar(prevState => ({ ...prevState, info: true }));
                        setTimeout(() => {
                            setSnackbar(prevState => ({ ...prevState, info: false }));
                            setMessage(prevState => ({ ...prevState, info: "" }));
                        }, 5000);
                    }
                } else {
                    console.log(response.message)
                    setMessage(prevState => ({ ...prevState, error: response.message }))
                    setSnackbar(prevState => ({ ...prevState, error: true }));
                    setTimeout(() => {
                        setSnackbar(prevState => ({ ...prevState, error: false }));
                        setMessage(prevState => ({ ...prevState, error: "" }));
                    }, 5000);
                }
            }
        } else {
            setUser(prevState => ({
                ...prevState,
                email: { value: user.email.value, error: !Boolean(user.email.value !== "") },
                password: { value: user.password.value, error: !Boolean(user.password.value !== "") },
                names: { value: user.names.value, error: !Boolean(user.names.value !== "") },
                lastnames: { value: user.lastnames.value, error: !Boolean(user.lastnames.value !== "") },
                phone: { value: user.phone.value, error: !Boolean(user.phone.value !== "") },
                company: { value: user.company.value, error: !Boolean(user.company.value !== "") },
                rol: { value: user.rol.value, error: !Boolean(user.rol.value !== "") },
                commentaries: { value: user.commentaries.value, error: !Boolean(user.commentaries.value !== "") },
            }));
        }
    }

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
                    maxWidth: 900
                }}
            >
                <Box marginBottom={3}>
                    <Typography
                        sx={{
                            fontWeight: 500,
                            textTransform: "uppercase",
                            textAlign: "center",
                            fontSize: 20
                        }}
                        className="text-neutral-700"
                    >
                        Información de Contacto
                    </Typography>
                </Box>
                <Grid container rowSpacing={2} columnSpacing={3}>
                    <Grid item xs={12} md={6}>
                        <FormControl size="small" fullWidth>
                            <InputLabel htmlFor="email-input">Ingrese sus nombres</InputLabel>
                            <OutlinedInput
                                id="email-input"
                                name="names"
                                type="text"
                                label="Ingrese sus nombres"
                                value={user.names.value}
                                onChange={handleChangeInput}
                                onBlur={handleBlurInput}
                                error={user.names.error}
                            />
                            <FormHelperText>Nombres</FormHelperText>
                            {user.names.error && <FormHelperText className="text-red-600">Nombres es requerido *</FormHelperText>}
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <FormControl size="small" fullWidth>
                            <InputLabel htmlFor="email-input">Ingrese sus apellidos</InputLabel>
                            <OutlinedInput
                                id="email-input"
                                name="lastnames"
                                type="text"
                                label="Ingrese sus apellidos"
                                value={user.lastnames.value}
                                onChange={handleChangeInput}
                                onBlur={handleBlurInput}
                                error={user.lastnames.error}
                            />
                            <FormHelperText>Apellidos</FormHelperText>
                            {user.lastnames.error && <FormHelperText className="text-red-600">Apellidos es requerido *</FormHelperText>}
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <FormControl size="small" fullWidth>
                            <InputLabel htmlFor="email-input">Ingrese su correo</InputLabel>
                            <OutlinedInput
                                id="email-input"
                                name="email"
                                type="text"
                                label="Ingrese su correo"
                                value={user.email.value}
                                onChange={handleChangeInput}
                                onBlur={handleBlurInput}
                                error={user.email.error}
                            />
                            <FormHelperText>Correo</FormHelperText>
                            {user.email.error && <FormHelperText className="text-red-600">Correo es requerido *</FormHelperText>}
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <FormControl size="small" fullWidth>
                            <InputLabel htmlFor="email-input">Ingrese su teléfono / celular</InputLabel>
                            <OutlinedInput
                                id="email-input"
                                name="phone"
                                type="text"
                                label="Ingrese su teléfono / celular"
                                value={user.phone.value}
                                onChange={handleChangeInput}
                                onBlur={handleBlurInput}
                                error={user.phone.error}
                            />
                            <FormHelperText>Teléfono / celular</FormHelperText>
                            {user.phone.error && <FormHelperText className="text-red-600">Teléfono / celular es requerido *</FormHelperText>}
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <FormControl size="small" fullWidth>
                            <InputLabel htmlFor="email-input">Ingrese su empresa de trabajo</InputLabel>
                            <OutlinedInput
                                id="email-input"
                                name="company"
                                type="text"
                                label="Ingrese su empresa de trabajo"
                                value={user.company.value}
                                onChange={handleChangeInput}
                                onBlur={handleBlurInput}
                                error={user.company.error}
                            />
                            <FormHelperText>Empresa en la que trabaja</FormHelperText>
                            {user.company.error && <FormHelperText className="text-red-600">Empresa de trabajo es requerido *</FormHelperText>}
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <FormControl size="small" fullWidth>
                            <InputLabel htmlFor="email-input">Ingrese el cargo que ocupa en su empresa</InputLabel>
                            <OutlinedInput
                                id="email-input"
                                name="rol"
                                type="text"
                                label="Ingrese el cargo que ocupa en su empresa"
                                value={user.rol.value}
                                onChange={handleChangeInput}
                                onBlur={handleBlurInput}
                                error={user.rol.error}
                            />
                            <FormHelperText>Cargo que ocupa</FormHelperText>
                            {user.rol.error && <FormHelperText className="text-red-600">Cargo que ocupa es requerido *</FormHelperText>}
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <FormControl size="small" fullWidth>
                            <InputLabel htmlFor="password-input">Ingrese una contraseña</InputLabel>
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
                                label="Ingrese una contraseña"
                                value={user.password.value}
                                onChange={handleChangeInput}
                                onBlur={handleBlurInput}
                                error={user.password.error}
                            />
                            <FormHelperText>Debe tener mínimo 8 caracteres</FormHelperText>
                            {user.password.error && <FormHelperText className="text-red-600">Contraseña es requerido *</FormHelperText>}
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <FormControl size="small" fullWidth>
                            <InputLabel htmlFor="email-input">¿Qué le gustaría que ofrezca nuestra plataforma?</InputLabel>
                            <OutlinedInput
                                id="email-input"
                                name="commentaries"
                                type="text"
                                multiline
                                rows={5}
                                label="¿Qué le gustaría que ofrezca nuestra plataforma?"
                                value={user.commentaries.value}
                                onChange={handleChangeInput}
                                onBlur={handleBlurInput}
                                error={user.commentaries.error}
                            />
                            <FormHelperText>Comentarios</FormHelperText>
                            {user.commentaries.error && <FormHelperText className="text-red-600">Comentarios es requerido *</FormHelperText>}
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} display="flex" justifyContent="center">
                        <Button
                            variant="contained"
                            sx={{
                                width: { xs: "100%", md: "30%" }
                            }}
                            className="bg-slate-800 hover:bg-slate-900"
                            onClick={handleClickRegisterUser}
                        >
                            Registrarse
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
                            ¿Ya estás registrado? <Link className="cursor-pointer" onClick={handleClickGoToLogin}>Inicia sesión</Link>
                        </Typography>
                    </Grid>
                </Grid>
            </Card>
        </>

    )
}

export default Register;
