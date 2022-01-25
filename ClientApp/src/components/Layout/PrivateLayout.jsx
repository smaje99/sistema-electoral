import { Outlet } from 'react-router-dom';

import Navigation from '@Components/Navigation';

const PrivateLayout = () => {
    return (
        <div className="layout">
            <Navigation />
            <Outlet />
        </div>
    )
}

export default PrivateLayout;