import { Routes, Route } from 'react-router-dom';

import PrivateRoutes from './PrivateRoutes';

import Layout from '@Components/Layout';

import Dashboard from '@Pages/Dashboard';
import Home from '@Pages/Home';
import NotFound from '@Pages/NotFound';

const AppRouter = () => (
    <Routes>
        <Route path="/" element={<Home />} >
            <Route element={<PrivateRoutes />}>
                <Route path="dashboard" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                </Route>
            </Route>

            <Route path="*" element={<NotFound />} />
        </Route>
    </Routes>
)

export default AppRouter;