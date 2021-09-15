import { login as makeLogin } from "../apis/auth-api";

export const login = async (data) => {
    const response = await makeLogin(data);
    if (response.data) {
        localStorage.setItem("accessToken", JSON.stringify(response.data));
    }
    return response.data;
}

export const logout = () => {
    localStorage.removeItem("accessToken");
}

export const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("accessToken"));
}

export function getAuthorizationHeader() {
    const accessToken = JSON.parse(localStorage.getItem("accessToken"));

    if (accessToken) {
        return { Authorization: 'Bearer ' + accessToken };
    } else {
        return {};
    }
}

export const isAuthenticated = () => {
    const token = JSON.parse(localStorage.getItem("accessToken"));
    if (!token || token === null) {
        return false;
    }
    return true;
}