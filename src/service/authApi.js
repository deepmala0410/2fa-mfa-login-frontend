import api from "./api";
export const register = async (username, password) => {
    return await api.post("/auth/register", {
        username,
        password,
    });
};

export const loginUser = async (username, password) => {
    return await api.post("/auth/login", {
        username,
        password,
    },
        {
            withCredentials: true,
        });
};

export const authStatus = async () => {
    return await api.get("/auth/status",
        {
            withCredentials: true,
        });
};

export const logoutUser = async () => {
    return await api.post("/auth/logout", {},

        {
            withCredentials: true,
        });
};


export const setup2FA = async () => {
    return await api.post("/auth/setup2FA",
        {},

        {
            withCredentials: true,
        });
};


export const verify2FA = async (token) => {
    return await api.post("/auth/verify2FA",
        { token },

        {
            withCredentials: true,
        });
};

export const reset2FA = async () => {
    return await api.post("/auth/reset2FA",
        {},

        {
            withCredentials: true,
        });
};