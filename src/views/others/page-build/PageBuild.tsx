import { Grid } from '@mui/material';
import { FunctionComponent } from 'react';
import image from '../../../assets/pagina_en_construccion.jpg';

const PageBuild: FunctionComponent<{}> = () => {
    return (
        <Grid container display="flex" justifyContent="center">
            <Grid item alignSelf="center">
                <img src={image} alt="pagina_en_construccion.jpg" />
            </Grid>
        </Grid>
    )
}

export default PageBuild