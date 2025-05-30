import React, { use, useState } from 'react';
import { Link } from 'react-router-dom';
import { register , loginUser } from '../service/authApi';

const LoginForm = ({onLoginSuccess}) => {
    const [isRegister, setIsRegister] = useState(false);
    const [Username, setUsername] = useState("");
    const [password,setPassword] = useState("")
    const [confirmPassword,setConfirmPassword] = useState("")
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")


    const handleRegisterToggle = () => {
       setIsRegister(!isRegister);
       setError("")
       setMessage("")
    }


    const handleLogin = async(e) => {
        e.preventDefault();
        try {
            const {data} = await loginUser(Username, password);
            setMessage(data.message);
            setUsername("");
            setPassword("");
            setError("")
            console.log(data,"User data to set")
            onLoginSuccess(data)
    
        } catch (error) {
            console.log("The err is", error.message );
            setMessage("");
            setError("Invalid Login Credentials")
            setUsername("");
            setPassword("");
        }

    }


    const handleRegister = async(e) => {
        e.preventDefault();
    try {
        const {data} = await register(Username, password);
        setIsRegister(false);
        setMessage(data.message);
        setUsername("");
        setPassword("");
        setConfirmPassword("");
        setError("")

    } catch (error) {
        console.log("the err is", error.message );
        setError("Something went wrong")
        setUsername("");
        setPassword("");
        setConfirmPassword("");
        setMessage("")
    }
    }
    return (
        <form onSubmit={isRegister ? handleRegister : handleLogin} className="bg-white rounded-lg shadow-md w-full max-w-sm mx-auto">
            <div className='pt-6'>
                <h2 className='text-3xl text-center font-extralight'>{isRegister ? "Create account" : "Login"}</h2>
            </div>
            <hr className='text-gray-200 mt-6 mb-6' />
            <p className='text-center text-gray-600 text-large font-light'>{isRegister ? "Looks like you are new here!" : "We are glad to see you again"}</p>
            <div className='p-6'>
                <div className='mb-4'>
                    <label className='text-gray-600 text-sm'>Username</label>
                    <input
                        label="Username"
                        type='text'
                        value={Username}
                        onChange={(e)=> setUsername(e.target.value)}
                        className='w-full p-2 border rounded mt-2'
                        placeholder='Enter your name'
                        required />

                </div>
                <div className='mb-4'>
                    <label className='text-gray-600 text-sm'>Password</label>
                    <input
                        label="Password"
                        type='password'
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                        className='w-full p-2 border rounded mt-2'
                        placeholder='Enter your password'
                        required />
                </div>
                {isRegister ? (<div className='mb-4'>
                    <label className='text-gray-600 text-sm'>Confirm Password</label>
                    <input
                        label="confirm Password"
                        type='password'
                        value={confirmPassword}
                        onChange={(e)=> setConfirmPassword(e.target.value)}
                        className='w-full p-2 border rounded mt-2'
                        placeholder='Enter your password again'
                        required />
                </div>) : ("")}

                {error && <p className='text-red-500 text-sm mn-3'>{error}</p>}
                {message && <p className='text-green-500 text-sm mn-3'>{message}</p>}

                <button
                    type='submit'
                    className='w-full bg-blue-500 text-white py-2 rounded-md'
                >
                    {isRegister ? "Register" : "Login"}
                </button>
                <div>
                    <p className='pt-4 text-center text-gray-600 text-sm'>
                        {isRegister ? "Already have an account ? " : "Dont have an account ? "}
                        <Link to="" onClick={handleRegisterToggle}>{isRegister ? "Login" : "Create account"}</Link> </p>
                </div>
            </div>
        </form>
    );
};

export default LoginForm;