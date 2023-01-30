import { FunctionComponent } from 'react';
import { Card, FormControl, Grid, IconButton, InputAdornment, InputLabel, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader, OutlinedInput } from '@mui/material';
import { ArrowForward, ChevronRight, DoubleArrow, Place, Search } from '@mui/icons-material';
import { ITEMS_ASIDE_LEFT_PROVEEDORES } from '../../../constants';

const AsideLeft: FunctionComponent<{}> = () => {
    return (
        <Card
            sx={{
                marginY: 3,
                marginX: 1.5,
                padding: 1
            }}
            className="shadow border border-green-custom"
        >
            <Grid container marginTop={0.2} paddingX={2} rowSpacing={2}>
                <Grid item xs={12}>
                    <FormControl fullWidth size="small">
                        <InputLabel htmlFor="search-brand">Buscar marca</InputLabel>
                        <OutlinedInput
                            id="search-brand"
                            type="text"
                            sx={{
                                "&.MuiOutlinedInput-root": {
                                    "& fieldset": {
                                        borderColor: "#4472C4",
                                    },
                                    "&:hover fieldset": {
                                        borderColor: "#4472C4",
                                    },
                                    "&.Mui-focused fieldset": {
                                        borderColor: "#4472C4",
                                    },
                                },
                            }}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        edge="end"
                                    >
                                        <Search className="text-blue-custom" />
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Buscar marca"
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <Grid container columnSpacing={1.5}>
                        <Grid item xs={6}>
                            <FormControl fullWidth size="small">
                                <InputLabel htmlFor="start-date">Fecha Inicio</InputLabel>
                                <OutlinedInput
                                    id="start-date"
                                    type="date"
                                    sx={{
                                        "&.MuiOutlinedInput-root": {
                                            "& fieldset": {
                                                borderColor: "#4472C4",
                                            },
                                            "&:hover fieldset": {
                                                borderColor: "#4472C4",
                                            },
                                            "&.Mui-focused fieldset": {
                                                borderColor: "#4472C4",
                                            },
                                        },
                                    }}
                                    label="Fecha Inicio"
                                    value="2023-01-30"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl fullWidth size="small">
                                <InputLabel htmlFor="end-date">Fecha Fin</InputLabel>
                                <OutlinedInput
                                    id="end-date"
                                    type="date"
                                    sx={{
                                        "&.MuiOutlinedInput-root": {
                                            "& fieldset": {
                                                borderColor: "#4472C4",
                                            },
                                            "&:hover fieldset": {
                                                borderColor: "#4472C4",
                                            },
                                            "&.Mui-focused fieldset": {
                                                borderColor: "#4472C4",
                                            },
                                        },
                                    }}
                                    label="Fecha Fin"
                                    value="2023-01-31"
                                />
                            </FormControl>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <List
                        component="nav"
                        subheader={
                            <ListSubheader component="div">
                                Opciones
                            </ListSubheader>
                        }
                    >
                        {ITEMS_ASIDE_LEFT_PROVEEDORES.map((item) => (
                            <>
                                <ListItemButton key={item.title} sx={{ height: 45 }}>
                                    <ListItemIcon>
                                        <DoubleArrow />
                                    </ListItemIcon>
                                    <ListItemText primary={item.title} />
                                </ListItemButton>
                                {item.subitems &&
                                    <List component="div" disablePadding>
                                        {item.subitems.map((subitem) => (
                                            <>
                                                <ListItemButton key={subitem.title} sx={{ pl: 3, height: 45 }}>
                                                    <ListItemIcon>
                                                        <ChevronRight />
                                                    </ListItemIcon>
                                                    <ListItemText primary={subitem.title} />
                                                </ListItemButton>
                                                {subitem.subitems &&
                                                    <List component="div" disablePadding>
                                                        {subitem.subitems.map((subitem) => (
                                                            <ListItemButton key={subitem.title} sx={{ pl: 6, height: 45 }}>
                                                                <ListItemIcon>
                                                                    <ArrowForward />
                                                                </ListItemIcon>
                                                                <ListItemText primary={subitem.title} />
                                                                <Place className="text-orange-custom" />
                                                            </ListItemButton>
                                                        ))}
                                                    </List>
                                                }
                                            </>
                                        ))}
                                    </List>
                                }
                            </>
                        ))}
                    </List>
                </Grid>
            </Grid>
        </Card>
    )
}

export default AsideLeft