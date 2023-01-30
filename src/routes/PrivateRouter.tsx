import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../contexts';
import { HomeLayout } from '../layouts';

const PrivateRouter = () => {
    const { isAuthenticated } = useAuthContext();

    if (!isAuthenticated) {
        return <Navigate to="/auth/login" />
    }

    return (
        <HomeLayout />
    )
}

export default PrivateRouter;
