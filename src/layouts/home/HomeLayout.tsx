import { FunctionComponent } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../../components';
import { Box, Toolbar } from '@mui/material';

const HomeLayout: FunctionComponent<{}> = () => {
    return (
        <>
            <Navbar />
            <Toolbar />
            <Box marginTop={3} marginBottom={5} marginX={5}>
                <Outlet />
            </Box>
        </>
    )
}

export default HomeLayout;
