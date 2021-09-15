import axios from "axios";

const BASE_URL = "http://35.201.2.209:8000/";

const baseInstance = axios.create({
    baseURL: BASE_URL
});

/**
 * GET request
 * @param url
 * @param config
 */
export const get = async (url, config = {}) => {
    return await baseInstance.get(url, config);
};

/**
 * POST request
 * @param url
 * @param data
 * @param config
 */
export const post = async (url, data, config = {}) => {
    return await baseInstance.post(url, data, config);
};
