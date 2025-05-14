import { createContext, useContext, useEffect, useState } from "react";

const SessionContext = createContext();
export const useSession = () => useContext(SessionContext);

export const SessionProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(null)
    const [user, setUser ] =useState(null);

    useEffect(() => {
        const storedUser = JSON.parse(sessionStorage.getItem("user"))
        console.log("the use effect runs" , storedUser);
        if (storedUser){
            setUser(storedUser);
            setIsLoggedIn(true);
        }
        setLoading(false)
    })

    const login = (userData) => {
        setIsLoggedIn(true);
        setuser(userData);
        sessionStorage.setItem("user", JSON.stringify(userData));
    }

    const logout = (data) => {
        if (data) {
            setIsLoggedIn(false);
            setuser(null);
            sessionStorage.removeItem("user");

        }
    };
    return(
        <SessionContext.Provider
        value={{isLoggedIn,loading, user, login, logout}}
        >{children}</SessionContext.Provider>
    )
}