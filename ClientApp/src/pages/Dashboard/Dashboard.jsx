import { Outlet } from 'react-router-dom';

import './style.css';

const Dashboard = () => {
    return (
        <main className="dashboard">
            <Outlet />
        </main>
    )
}

export default Dashboard;