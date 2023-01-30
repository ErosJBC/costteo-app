import { FunctionComponent } from 'react';
import { ITEMS_PROVEEDORES, SUBITEMS_PROVEEDORES } from '../../constants';
import { Box, Button, Divider, Grid, Typography } from '@mui/material';
import AsideRight from './aside-right/AsideRight';
import AsideLeft from './aside-left/AsideLeft';
import SearchProviders from './search-providers/SearchProviders';

const Proveedores: FunctionComponent<{}> = () => {
    return (
        <>
            <Box display="flex" gap={3}>
                {ITEMS_PROVEEDORES.map((item) => (
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
            <Divider sx={{ marginTop: 2, height: 2 }} className="bg-blue-custom" />
            <Box display="flex" gap={3} marginTop={3}>
                {SUBITEMS_PROVEEDORES.map((item, index) => {
                    return (
                        index === 0 ?
                            <Typography key={item.name} textAlign="center" fontWeight="500" alignSelf="center">
                                {item.name}
                            </Typography>
                            :
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
                    )
                })}
            </Box>
            <Grid container marginTop={3}>
                <Grid item xs={12} lg={2.5}>
                    <AsideRight />
                </Grid>
                <Grid item xs={12} lg={6}>
                    <SearchProviders />
                </Grid>
                <Grid item xs={12} lg={3.5}>
                    <AsideLeft />
                </Grid>
            </Grid>
        </>
    )
}

export default Proveedores