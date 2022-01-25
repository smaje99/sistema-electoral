import { Outlet } from 'react-router-dom';

import Navigation from '@Components/Navigation';

const PrivateLayout = () => {
    return (
        <>
            <Navigation />
            <Outlet />
        </>
    )
}

export default PrivateLayout;