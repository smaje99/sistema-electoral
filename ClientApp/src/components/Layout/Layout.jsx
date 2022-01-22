import { Outlet } from 'react-router-dom';

import Navigation from '@Components/Navigation';

const Layout = () => {
    return (
        <>
            <Outlet />
            <Navigation />
        </>
    )
}

export default Layout;