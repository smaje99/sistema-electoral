import { useEffect } from 'react';
import { Navigate } from 'react-router';
import { toast } from 'react-toastify';

import routes from '@Helpers/routes';
import config from '@Utils/config';

const RestrictedRoute = () => {
    useEffect(() => {
        toast('No tienes permiso para esta vista', config.toast)
    }, []);

    return <Navigate to={routes.dashboard()} replace />
}

export default RestrictedRoute;