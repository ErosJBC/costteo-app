import { Grid } from '@mui/material';
import { FunctionComponent } from 'react'
import { Outlet } from 'react-router-dom'

const AuthLayout: FunctionComponent<{}> = () => {
    return (
        <Grid container display="flex" justifyContent="center" className="bg-neutral-700 min-h-screen">
            <Grid item alignSelf="center">
                <Outlet />
            </Grid>
        </Grid>
    )
}

export default AuthLayout;
