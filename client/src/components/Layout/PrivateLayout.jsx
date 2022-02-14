import { Outlet } from 'react-router-dom';

import PrivateNavigation from '@Components/Navigation/PrivateNavigation';

const PrivateLayout = () => {
    return (
        <div className="layout-private">
            <PrivateNavigation />
            <Outlet />
        </div>
    )
}

export default PrivateLayout;