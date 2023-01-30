import { FunctionComponent } from 'react';
import { Alert, AlertColor, AlertTitle, Snackbar } from '@mui/material';

interface ICustomSnackbar {
    message: string,
    type: AlertColor,
    handleOpen?: any,
    open?: boolean
}

const CustomSnackbar: FunctionComponent<ICustomSnackbar> = (props: ICustomSnackbar) => {
    const { message, type } = props;
    const title = type === "success" ? "Éxito" : (type === "error" ? "Error" : (type === "warning" ? "Aviso" : (type === "info" ? "Información" : "")));

    return (
        <Snackbar
            open
            autoHideDuration={5000}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
            <Alert severity={type}>
                <AlertTitle>{title}</AlertTitle>
                {message}
            </Alert>
        </Snackbar>

    )
}

export default CustomSnackbar;
