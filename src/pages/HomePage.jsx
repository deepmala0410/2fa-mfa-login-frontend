import React from "react";
import { useNavigate } from "react-router-dom";
import { useSession } from "../context/SessionContext";

const HomePage = () => {


    const navigate = useNavigate();
    const {user, logout} = useSession();

    const handleLogout = async () => { 
        try {
            if (data) {
                setIsLoggesIn(false);
                setUser(null);
                sessionStorage.removeItem("user");
                navigate("/login");
            }
        } catch (error) {
            console.log("Error ", error.message);
        }
    }
    return (
        <div className="p-6 bg-white rounded-lg shadow-md max-w-md mx-auto mt-10">
            <h2 className="text-xl font-semibold mb-4">welcome, {user.username}!</h2>
            <p>you have successfully logged in and verified your 2FA</p>
            <buttom type="button" className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
            
            onClick ={handleLogout} >
                Logout
            </buttom>
        </div>
    )
};

export default HomePage;       