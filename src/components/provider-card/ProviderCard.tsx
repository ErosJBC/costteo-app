import { FunctionComponent } from 'react'
import { Box, Button, Card, Grid, Typography } from '@mui/material';

const ProviderCard: FunctionComponent<any> = (props: any) => {
    const { name, description, logo, score, calification } = props;
    return (
        <Card
            sx={{
                paddingY: 1.5,
                paddingX: 1,
                paddingRight: 2
            }}
            className="bg-neutral-100 shadow-none rounded"
        >
            <Grid container>
                <Grid item xs={4} sm={3} md={2}>

                </Grid>
                <Grid item xs={6} sm={9} md={10}>
                    <Grid container rowSpacing={2} columnSpacing={2}>
                        <Grid item xs={12} md={9}>
                            <Box>
                                <Typography className="text-sky-900 font-medium">{name}</Typography>
                                <Typography sx={{ fontSize: 12 }} className="text-neutral-400 uppercase">{description}</Typography>
                            </Box>
                            <Box>
                                <Typography sx={{ fontSize: 11 }} className="text-neutral-400">({calification}) calificaciones</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Grid container display="flex" justifyContent="end">
                                <Button
                                    variant="contained"
                                    className="bg-orange-custom shadow py-1"
                                >
                                    Ver Perfil
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Card>
    )
}

export default ProviderCard;
