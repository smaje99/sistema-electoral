import { Outlet } from 'react-router-dom';

const PublicLayout = () => (
    <div className="layout">
        <h1>layout</h1>
        <Outlet />
    </div>
)

export default PublicLayout;