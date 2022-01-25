import { Outlet } from 'react-router-dom';

import NavigationBar from '@Components/NavigationBar';

const PublicLayout = () => (
    <div className="layout-public">
        <NavigationBar />
        <Outlet />
    </div>
)

export default PublicLayout;