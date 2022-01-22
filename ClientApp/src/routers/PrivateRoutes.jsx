import { Navigate, Outlet, useLocation } from 'react-router-dom';

import useAuth from '@Auth/useAuth';

const PrivateRoutes = () => {
    const location = useLocation();
    const { isLogged } = useAuth();

    return isLogged()
        ? <Outlet />
        : <Navigate to="/login" replace state={{ from: location }} />
}

export default PrivateRoutes;