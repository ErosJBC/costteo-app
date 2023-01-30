import { FunctionComponent } from 'react';
import { Card, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';
import { ChevronRight, DoubleArrow } from '@mui/icons-material';
import { ITEMS_ASIDE_RIGHT_PROVEEDORES } from '../../../../constants';

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
                {ITEMS_ASIDE_RIGHT_PROVEEDORES.map((item, index) => (
                    <>
                        <ListItemButton key={index} sx={{ height: 45 }}>
                            <ListItemIcon>
                                <DoubleArrow />
                            </ListItemIcon>
                            <ListItemText primary={item.title} />
                        </ListItemButton>
                        {item.subitems &&
                            <List component="div" disablePadding>
                                {item.subitems.map((subitem, index) => (
                                    <ListItemButton key={index} sx={{ pl: 3, height: 45 }}>
                                        <ListItemIcon>
                                            <ChevronRight />
                                        </ListItemIcon>
                                        <ListItemText primary={subitem.title} />
                                    </ListItemButton>
                                ))}
                            </List>
                        }
                    </>
                ))}
            </List>
        </Card>
    )
}

export default AsideRight