import { createContext, useContext, useState } from "react";

const SessionContext = createContext();
export const useSession = () => useContext(SessionContext);

export const SessionProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setuser ] =useState(null);

    const login = (userData) => {
        setIsLoggedIn(true);
        setuser(userData);
    }

    const logout = (data) => {
        if (data) {
            setIsLoggedIn(false);
            setuser(null);
        }
    };
    return(
        <SessionContext.Provider
        value={{isLoggedIn, user, login, logout}}
        >{children}</SessionContext.Provider>
    )
}