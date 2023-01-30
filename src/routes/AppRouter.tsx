import { Routes, Route } from 'react-router-dom';
import { Contactos, Licitaciones, Login, MisCostos, Precios, Proveedores, Register } from '../views';
import PublicRouter from './PublicRouter';
import PrivateRouter from './PrivateRouter';

const AppRouter = () => {
    return (
        <Routes>
            <Route path='auth' element={<PublicRouter />}>
                <Route index path='login' element={<Login />} />
                <Route path='register' element={<Register />} />
            </Route>
            <Route path='' element={<PrivateRouter />}>
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
