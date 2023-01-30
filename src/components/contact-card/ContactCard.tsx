import { FunctionComponent } from 'react'
import { Box, Button, Card, Grid, Typography } from '@mui/material';

const ContactCard: FunctionComponent<any> = (props: any) => {
    const { name, description, logo, score, calification } = props;
    return (
        <Card
            sx={{
                paddingY: 1.5,
                paddingX: 1,
                paddingRight: 2
            }}
            className="shadow-none border border-green-custom rounded-md"
        >
            <Grid container>
                <Grid item xs={4} sm={3} md={2}>

                </Grid>
                <Grid item xs={6} sm={9} md={10}>
                    <Grid container rowSpacing={2} columnSpacing={2}>
                        <Grid item xs={12} md={9}>
                            <Box>
                                <Typography sx={{ fontSize: 15 }} className="text-neutral-800 font-medium">Razón Social: {name}</Typography>
                                <Typography sx={{ fontSize: 15 }} className="text-neutral-800 font-medium">Dirección: {name}</Typography>
                                <Typography sx={{ fontSize: 15 }} className="text-neutral-800 font-medium">Teléfono: {name}</Typography>
                                <Typography sx={{ fontSize: 15 }} className="text-neutral-800 font-medium">Email: {name}</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Grid container rowSpacing={1}>
                                <Grid item xs={12} display="flex" justifyContent="center">
                                    <Typography
                                        className="bg-red-500 text-white px-4 py-0.5 rounded w-60 text-sm text-center"
                                    >
                                        01 Cotizaciones Pendientes
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} display="flex" justifyContent="center">
                                    <Typography
                                        className="bg-green-600 text-white px-4 py-0.5 rounded w-60 text-sm text-center"
                                    >
                                        01 Cotizaciones Aprobadas
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} display="flex" justifyContent="center">
                                    <Typography
                                        className="bg-blue-custom text-white px-4 py-0.5 rounded w-60 text-sm text-center"
                                    >
                                        Mensajes por responder
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Card>
    )
}

export default ContactCard;
