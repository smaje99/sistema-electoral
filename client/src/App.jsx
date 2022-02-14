import { BrowserRouter as Router } from "react-router-dom";

import AppRouter from "@Routers/AppRouter";
import { AuthProvider } from '@Auth/AuthProvider';

const App = () => (
    <>
        <Router>
            <AuthProvider>
                <AppRouter />
            </AuthProvider>
        </Router>
    </>
)

export default App;