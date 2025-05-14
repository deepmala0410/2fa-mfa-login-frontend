import React from 'react';
import { Outlet } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';

const ProtectedRoute = () => {

    const {isLoggedIn, loading } = useSession();
    console.log("logged  in ",isLoggedIn)

if (loading) {
    return <div >Loading.....</div>
}
        return isLoggedIn ? <Outlet/> : <Navigate to="/login" />;

};

export default ProtectedRoute;