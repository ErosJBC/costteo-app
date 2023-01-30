import { FunctionComponent } from 'react';
import { Box, Card, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import { Search } from '@mui/icons-material';
import { ProviderCard } from '../../../components';
import { ITEMS_SEARCH_PROVIDERS } from '../../../constants';

const SearchProviders: FunctionComponent<{}> = () => {
    return (
        <Box marginX={1} marginTop={3}>
            <Grid container rowSpacing={2}>
                <Grid item xs={12}>
                    <FormControl fullWidth size="small">
                        <InputLabel htmlFor="search-providers">Buscar proveedores</InputLabel>
                        <OutlinedInput
                            id="search-providers"
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
                            label="Buscar proveedores"
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <Card
                        sx={{
                            maxHeight: 500,
                            padding: 1.5,
                        }}
                        className="shadow rounded-none border border-blue-custom"
                    >
                        <Grid container rowSpacing={2}>
                            {ITEMS_SEARCH_PROVIDERS.map((item) => (
                                <Grid item xs={12}>
                                    <ProviderCard {...item} />
                                </Grid>
                            ))}
                        </Grid>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}

export default SearchProviders