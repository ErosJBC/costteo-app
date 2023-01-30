import { FunctionComponent } from 'react';
import { Box, Grid, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, Card, Button } from '@mui/material';
import { Search } from '@mui/icons-material';
import { SUBITEMS_LICITACIONES } from '../../../../constants';

const SearchLicitaciones: FunctionComponent<{}> = () => {
    return (
        <Box marginX={1} marginTop={3}>
            <Grid container rowSpacing={2}>
                <Grid item xs={12}>
                    <Grid container rowSpacing={2} columnSpacing={2}>
                        <Grid item xs={12} md={6}>
                            <FormControl fullWidth size="small">
                                <InputLabel htmlFor="search-licitacion">Buscar Licitaciones públicas</InputLabel>
                                <OutlinedInput
                                    id="search-licitacion"
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
                                    label="Buscar Licitaciones públicas"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box display="flex" gap={3} justifyContent="center">
                                {SUBITEMS_LICITACIONES.map((item) => (
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
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Card
                        sx={{
                            maxHeight: 500,
                            padding: 1.5,
                        }}
                        className="shadow rounded-none border border-blue-custom"
                    >

                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}

export default SearchLicitaciones;
