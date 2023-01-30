import { FunctionComponent } from 'react'
import { Box, Card, Grid, Typography } from '@mui/material';
import { Chat, Delete, Email } from '@mui/icons-material';

const ContactCard: FunctionComponent<any> = (props: any) => {
    const { business_name, address, telephone, email, logo, pending_quotation, approved_quotation, messages } = props;
    return (
        <Grid container>
            <Grid item xs={11.5}>
                <Card
                    sx={{
                        paddingY: 1.5,
                        paddingX: 1,
                        paddingRight: 2
                    }}
                    className="shadow-none border border-green-custom rounded-md"
                >
                    <Grid container>
                        <Grid item xs={12} sm={4} md={2}>

                        </Grid>
                        <Grid item xs={12} sm={8} md={10}>
                            <Grid container rowSpacing={2} columnSpacing={2}>
                                <Grid item xs={12} md={9}>
                                    <Box>
                                        <Typography sx={{ fontSize: 15 }} className="text-neutral-800 font-medium">
                                            Razón Social: <span className="font-normal">{business_name}</span>
                                        </Typography>
                                        <Typography sx={{ fontSize: 15 }} className="text-neutral-800 font-medium">
                                            Dirección: <span className="font-normal">{address}</span>
                                        </Typography>
                                        <Typography sx={{ fontSize: 15 }} className="text-neutral-800 font-medium">
                                            Teléfono: <span className="font-normal">{telephone}</span>
                                        </Typography>
                                        <Typography sx={{ fontSize: 15 }} className="text-neutral-800 font-medium">
                                            Email: <span className="font-normal">{email}</span>
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <Grid container rowSpacing={1}>
                                        <Grid item xs={12} display="flex" justifyContent="center">
                                            {pending_quotation &&
                                                <Typography
                                                    className="bg-red-500 text-white px-4 py-0.5 rounded w-60 text-sm text-center"
                                                >
                                                    {pending_quotation} Cotizaciones Pendientes
                                                </Typography>
                                            }
                                        </Grid>
                                        <Grid item xs={12} display="flex" justifyContent="center">
                                            {approved_quotation &&
                                                <Typography
                                                    className="bg-green-600 text-white px-4 py-0.5 rounded w-60 text-sm text-center"
                                                >
                                                    {approved_quotation} Cotizaciones Aprobadas
                                                </Typography>
                                            }
                                        </Grid>
                                        <Grid item xs={12} display="flex" justifyContent="center">
                                            {messages &&
                                                <Typography
                                                    className="bg-blue-custom text-white px-4 py-0.5 rounded w-60 text-sm text-center"
                                                >
                                                    {messages}
                                                </Typography>
                                            }
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Card>
            </Grid>
            <Grid item xs={0.5} display="flex" alignItems="center">
                <Grid container marginLeft={1.5} rowSpacing={1}>
                    <Grid item xs={12}>
                        <Delete sx={{ fontSize: 30 }} />
                    </Grid>
                    <Grid item xs={12}>
                        <Email sx={{ fontSize: 30 }} />
                    </Grid>
                    <Grid item xs={12}>
                        <Chat sx={{ fontSize: 30 }} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

    )
}

export default ContactCard;
