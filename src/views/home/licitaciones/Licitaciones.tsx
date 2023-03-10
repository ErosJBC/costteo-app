import { FunctionComponent } from 'react';
import { Box, Button, Divider, Grid } from '@mui/material';
import { ITEMS_LICITACIONES } from '../../../constants';
import SearchLicitaciones from './search-licitaciones/SearchLicitaciones';
import AsideRight from './aside-right/AsideRight';

const Licitaciones: FunctionComponent<{}> = () => {
    return (
        <>
            <Box display="flex" gap={3}>
                {ITEMS_LICITACIONES.map((item) => (
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
            <Grid container>
                <Grid item xs={12} md={4} lg={3} xl={2.5}>
                    <AsideRight />
                </Grid>
                <Grid item xs={12} md={8} lg={9} xl={9.5}>
                    <SearchLicitaciones />
                </Grid>
            </Grid>
        </>
    )
}

export default Licitaciones;
