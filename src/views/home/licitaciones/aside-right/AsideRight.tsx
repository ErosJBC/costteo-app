import { FunctionComponent } from 'react';
import { Card, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';
import { ArrowForward, ChevronRight, DoubleArrow, Place } from '@mui/icons-material';
import { ITEMS_ASIDE_RIGHT_LICITACIONES } from '../../../../constants';

const AsideRight: FunctionComponent<{}> = () => {
    return (
        <Card
            sx={{
                marginY: 3,
                marginX: 1.5,
                padding: 1
            }}
            className="shadow border border-green-custom"
        >
            <List
                component="nav"
                subheader={
                    <ListSubheader component="div">
                        Opciones
                    </ListSubheader>
                }
            >
                {ITEMS_ASIDE_RIGHT_LICITACIONES.map((item) => (
                    <>
                        <ListItemButton sx={{ height: 45 }}>
                            <ListItemIcon>
                                <DoubleArrow />
                            </ListItemIcon>
                            <ListItemText primary={item.title} />
                        </ListItemButton>
                        {item.subitems &&
                            item.subitems.map((subitem) => (
                                <>
                                    <List component="div" disablePadding>
                                        <ListItemButton sx={{ pl: 3, height: 45 }}>
                                            <ListItemIcon>
                                                <ChevronRight />
                                            </ListItemIcon>
                                            <ListItemText primary={subitem.title} />
                                        </ListItemButton>
                                    </List>
                                    {subitem.subitems &&
                                        subitem.subitems.map((subitem) => (
                                            <List component="div" disablePadding>
                                                <ListItemButton sx={{ pl: 6, height: 45 }}>
                                                    <ListItemIcon>
                                                        <ArrowForward />
                                                    </ListItemIcon>
                                                    <ListItemText primary={subitem.title} />
                                                    <Place className="text-orange-custom" />
                                                </ListItemButton>
                                            </List>
                                        ))
                                    }
                                </>
                            ))
                        }
                    </>
                ))}
            </List>
        </Card>
    )
}

export default AsideRight