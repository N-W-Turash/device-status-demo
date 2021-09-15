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

    if (!accessToken || accessToken === null) {
        return {};
    } else {
        return { Authorization: 'Bearer ' + accessToken };
    }
}

export const isAuthenticated = () => {
    const accessToken = JSON.parse(localStorage.getItem("accessToken"));
    if (!accessToken || accessToken === null) {
        return false;
    }
    return true;
}