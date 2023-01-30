import { FunctionComponent } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomeLayout } from '../layouts';
import { Contactos, Licitaciones, MisCostos, Precios, Proveedores } from '../views';

const AppRouter: FunctionComponent<{}> = () => {
    return (
        <Routes>
            <Route path='home' element={<HomeLayout />}>
                <Route index element={<Precios /> } />
                <Route path='proveedores' element={<Proveedores /> } />
                <Route path='licitaciones' element={<Licitaciones /> } />
                <Route path='mis-costos' element={<MisCostos /> } />
                <Route path='contactos' element={<Contactos /> } />
            </Route>
        </Routes>
    )
}

export default AppRouter;
