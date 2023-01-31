import { FunctionComponent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Avatar, Backdrop, Box, CircularProgress, IconButton, List, ListItemButton, ListItemText, Menu, MenuItem, Toolbar, Typography, useTheme } from '@mui/material';
import { AccountCircle, Menu as IMenu, Logout } from '@mui/icons-material';
import { ITEMS_NAVBAR } from '../../constants';
import logo from '../../assets/logo.png';
import { useAuthContext } from '../../contexts';

const Navbar: FunctionComponent<{}> = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const { logout } = useAuthContext();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [open, setOpen] = useState(false);

    const handleToggle = () => {
        setOpen(!open);
    };

    const handleClickGoToPath = (path: string) => {
        navigate(path);
    }

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClickCloseSession = () => {
        localStorage.removeItem('email');
        handleClose();
        handleToggle();
        setTimeout(() => {
            logout();
            handleToggle();
        }, 3000);
    }

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar
                    className="bg-white shadow text-neutral-800"
                    position="fixed"
                >
                    <Toolbar sx={{ display: "flex", columnGap: 2 }}>
                        <Box className="cursor-pointer">
                            <img src={logo} width={120} alt="logo-page" onClick={() => handleClickGoToPath("")} />
                        </Box>
                        <Box flexGrow={1} />
                        <Box display="flex" gap={3}>
                            <List component="nav" sx={{ display: "flex" }}>
                                {ITEMS_NAVBAR.map((item) => (
                                    <ListItemButton
                                        key={item.path}
                                        sx={{
                                            "&.MuiListItemButton-root": {
                                                textTransform: "initial",
                                                paddingX: 2,
                                                color: "rgb(23, 23, 23)",
                                                "&:hover": {
                                                    border: 1,
                                                    borderColor: "rgb(220, 38, 38)",
                                                    backgroundColor: "transparent",
                                                    color: "rgb(220, 38, 38)"
                                                },
                                            },
                                            "&.Mui-selected": {
                                                color: "rgb(220, 38, 38)",
                                                border: 1,
                                                borderColor: "rgb(220, 38, 38)",
                                                backgroundColor: "transparent",
                                                fontWeight: "600"
                                            }
                                        }}
                                        selected={document.location.pathname.split('/')[1] === item.path}
                                        onClick={() => handleClickGoToPath(item.path)}
                                    >
                                        <ListItemText primary={item.name} />
                                    </ListItemButton>
                                ))}
                            </List>
                        </Box>
                        <Box>
                            <IconButton
                                size="large"
                                aria-controls="menu-profile"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <Avatar className="bg-blue-custom" />
                            </IconButton>
                            <Menu
                                id="menu-profile"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClickCloseSession} sx={{ display: "flex", alignItems: "center", columnGap: 1 }}>
                                    <Logout className="text-slate-700" />
                                    <Typography className="text-slate-700">Cerrar sesión</Typography>
                                </MenuItem>
                            </Menu>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
            >
                <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
                    <Typography fontSize={18}>Cerrando sesión ...</Typography>
                    <CircularProgress color="inherit" />
                </Box>
            </Backdrop>
        </>
    )
}

export default Navbar;
