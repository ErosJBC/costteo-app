import { FunctionComponent } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthLayout, HomeLayout } from '../layouts';
import { Contactos, Licitaciones, MisCostos, Precios, Proveedores } from '../views';

const AppRouter: FunctionComponent<{}> = () => {
    return (
        <Routes>
            <Route path='auth' element={<AuthLayout />}>
                <Route index path='login' element={<Precios />} />
                <Route index path='register' element={<Precios />} />
            </Route>
            <Route path='home' element={<HomeLayout />}>
                <Route index element={<Precios />} />
                <Route path='proveedores' element={<Proveedores />} />
                <Route path='licitaciones' element={<Licitaciones />} />
                <Route path='mis-costos' element={<MisCostos />} />
                <Route path='contactos' element={<Contactos />} />
            </Route>
        </Routes>
    )
}

export default AppRouter;
