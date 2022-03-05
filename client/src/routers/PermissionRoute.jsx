import { Outlet } from 'react-router';

import RestrictedRoute from './RestrictedRoute';

import useAuth from '@Auth/useAuth';

const PermissionRoute = ({ menu }) => {
    const { hasPermission } = useAuth();

    return hasPermission(menu)
        ? <Outlet />
        : <RestrictedRoute />
}

export default PermissionRoute;