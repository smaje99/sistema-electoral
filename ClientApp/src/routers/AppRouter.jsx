import { Routes, Route } from 'react-router-dom';

import PrivateRoutes from './PrivateRoutes';

import Layout from '@Component/Layout';

const AppRouter = () => (
    <Routes>
        <Route path="/">
            <Route element={<PrivateRoutes />}>
                <Route path="dashboard" element={<Layout />}>

                </Route>
            </Route>
        </Route>
    </Routes>
)

export default AppRouter;