import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import AppRouter from "@Routers/AppRouter";
import { AuthProvider } from '@Auth/AuthProvider';

const App = () => (
    <Router>
        <AuthProvider>
            <AppRouter />
            <ToastContainer />
        </AuthProvider>
    </Router>
)

export default App;