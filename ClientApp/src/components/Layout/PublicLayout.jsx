import { Outlet } from 'react-router-dom';

import PublicNavigation from '@Components/Navigation/PublicNavigation';

const PublicLayout = () => (
    <div className="layout-public">
        <PublicNavigation />
        <Outlet />
    </div>
)

export default PublicLayout;