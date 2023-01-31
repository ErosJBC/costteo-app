import { Backdrop, Box, CircularProgress, Grid, LinearProgress, Typography } from '@mui/material';
import { FunctionComponent } from 'react'
import { Outlet } from 'react-router-dom'
import { useAuthContext } from '../../contexts';

const AuthLayout: FunctionComponent<{}> = () => {
    const { loading, backdrop } = useAuthContext();
    return (
        <Box position="relative">
            {loading &&
                <Box width="100%" position="absolute">
                    <LinearProgress
                        sx={{
                            "&.MuiLinearProgress-colorPrimary": {
                                backgroundColor: "rgb(163, 163, 163)"
                            },
                            "& .MuiLinearProgress-bar": {
                                backgroundColor: "white"
                            }
                        }}
                    />
                </Box>
            }
            <Grid container display="flex" justifyContent="center" className="bg-neutral-700 min-h-screen">
                <Grid item alignSelf="center">
                    <Outlet />
                </Grid>
            </Grid>
            {backdrop &&
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={true}
                >
                    <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
                        <Typography fontSize={18}>Redirigiendo ...</Typography>
                        <CircularProgress color="inherit" />
                    </Box>
                </Backdrop>
            }
        </Box>
    )
}

export default AuthLayout;
