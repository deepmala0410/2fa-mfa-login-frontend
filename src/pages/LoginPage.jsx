import React from "react";
import LoginForm from "../components/LoginForm";
import { useNavigate } from "react-router-dom";
import { useSession } from "../context/SessionContext";

const LoginPage = () => {
    const navigate = useNavigate();
        const {login} = useSession();

        const handleLoginSuccess = (userData) => {
            console.log("Logged in user data", userData)
            login(userData);
            if(!userData.isMfaActive) {
                navigate("/setup2FA")
            } else{
                navigate("/verify2FA")
            }
        }
    return (
        
        <LoginForm onLoginSuccess={handleLoginSuccess} />
    )
};
export default LoginPage;