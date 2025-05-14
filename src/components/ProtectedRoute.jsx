import React from 'react';
import { Outlet } from 'react-router-dom';

const ProtectedRoute = () => {

    const {isLoggedIn} = useSession();
        isLoggedIn ? <Outlet/> : <Navigate to="/login" />;

};

export default ProtectedRoute;