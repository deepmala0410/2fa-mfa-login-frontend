import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage"
import Error from "./pages/Error"
import HomePage from "./pages/HomePage";
import Setup2FA from "./pages/Setup2FA";
import Verify2FA from "./pages/Verify2FA";
import ProtectedRoute from "./components/ProtectedRoute";


const router = createBrowserRouter([
    {
        path: "/login",
        element: <LoginPage />,
        errorElement: <Error />,
    },
    {
        element: <ProtectedRoute />,
        children: [

            {
                path: "/",
                element: <HomePage />,
                errorElement: <Error />,
            },

            {
                path: "/setup2FA",
                element: <Setup2FA />,
                errorElement: <Error />,
            },

            {
                path: "/verify2FA",
                element: <Verify2FA />,
                errorElement: <Error />,
            }
        ]
    },


])

export default router;