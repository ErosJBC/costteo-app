import { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Box, Button, IconButton, Toolbar, useTheme } from '@mui/material';
import { Menu } from '@mui/icons-material';
import { ITEMS_NAVBAR } from '../../constants';
import logo from '../../assets/logo.png';

const Navbar: FunctionComponent<{}> = () => {
    const theme = useTheme();
    const navigate = useNavigate();

    const handleClickGoToPath = (path: string) => {
        navigate(path);
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                className="bg-white shadow text-neutral-800"
                position="fixed"
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        sx={{
                            marginLeft: theme.spacing(0),
                            marginRight: theme.spacing(-1),
                            [theme.breakpoints.up('md')]: {
                                display: "none"
                            }
                        }}
                    >
                        <Menu />
                    </IconButton>
                    <Box>
                        <img src={logo} width={120} alt="logo-page" />
                    </Box>
                    <Box flexGrow={1} />
                    <Box display="flex" gap={3}>
                        {ITEMS_NAVBAR.map((item) => (
                            <Button
                                key={item.path}
                                sx={{
                                    textTransform: "initial",
                                    paddingX: 2,
                                    "&:hover": {
                                        border: 1,
                                        borderColor: "red"
                                    }
                                }}
                                className="text-neutral-900 font-normal shadow-none hover:bg-transparent hover:text-red-600 hover:font-medium"
                                onClick={() => handleClickGoToPath(item.path)}
                            >
                                {item.name}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar;
