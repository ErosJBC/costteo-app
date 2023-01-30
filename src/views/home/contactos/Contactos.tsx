import { FunctionComponent } from 'react';
import { ITEMS_CLIENTES_CONTACTOS, ITEMS_CONTACTOS } from '../../../constants';
import { Box, Button, Divider, Grid } from '@mui/material';
import { Add } from '@mui/icons-material';
import { ContactCard } from '../../../components';


const Contactos: FunctionComponent<{}> = () => {
    return (
        <>
            <Grid container>
                <Grid item xs={12} md={6}>
                    <Box display="flex" gap={3}>
                        {ITEMS_CONTACTOS.map((item) => (
                            <Button
                                key={item.name}
                                variant="contained"
                                sx={{
                                    paddingX: 3,
                                    textTransform: "initial",
                                    fontWeight: 400,
                                    fontSize: 15
                                }}
                                className={`${item.color} shadow-lg`}
                            >
                                {item.name}
                            </Button>
                        ))}
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Button
                        variant="contained"
                        sx={{
                            paddingX: 3,
                            textTransform: "initial",
                            fontWeight: 400,
                            fontSize: 15
                        }}
                        className="bg-blue-custom shadow-lg"
                        startIcon={<Add />}
                    >
                        Agregar
                    </Button>
                </Grid>
            </Grid>
            <Divider sx={{ marginTop: 2, height: 2 }} className="bg-blue-custom" />
            <Grid container marginTop={3} paddingX={5} rowSpacing={2}>
                {ITEMS_CLIENTES_CONTACTOS.map((item, index) => (
                    <Grid key={index} item xs={12}>
                        <ContactCard {...item} />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default Contactos;
