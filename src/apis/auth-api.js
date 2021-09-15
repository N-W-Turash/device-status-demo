import { post } from "../helpers/api-helpers";

/**
* Update a specific post
*/
export const login = async (data) => {
    const config = {
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    }
    return await post(`/login`, data, config);
}
