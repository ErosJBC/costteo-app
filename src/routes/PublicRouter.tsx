import { Navigate } from "react-router-dom";
import { useAuthContext } from "../contexts";
import { AuthLayout } from "../layouts";

const PublicRouter = () => {
    const { isAuthenticated } = useAuthContext();

    if (isAuthenticated) {
        return <Navigate to="/" />
    }

    return (
        <AuthLayout />
    )
}

export default PublicRouter;
