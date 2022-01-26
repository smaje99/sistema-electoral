import { Routes, Route } from 'react-router-dom';

import PrivateRoutes from './PrivateRoutes';

import { PrivateLayout, PublicLayout } from '@Components/Layout';

import Dashboard from '@Pages/Dashboard';
import Home from '@Pages/Home';
import Info from '@Pages/Info';
import Login from '@Pages/Login';
import Logout from '@Pages/Logout';
import NotFound from '@Pages/NotFound';
import Welcome from '@Pages/Welcome';

const AppRouter = () => (
    <Routes>
        <Route path="/">
            <Route element={<PublicLayout />}>
                <Route index element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<Logout />} />
            </Route>

            <Route element={<PrivateRoutes />}>
                <Route path="dashboard" element={<PrivateLayout />}>
                    <Route element={<Dashboard />}>
                        <Route index element={<Welcome />} />
                        <Route path="info" element={<Info />} />
                    </Route>
                </Route>
            </Route>

            <Route path="*" element={<NotFound />} />
        </Route>
    </Routes>
)

export default AppRouter;