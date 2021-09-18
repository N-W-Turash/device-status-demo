import { get } from "../helpers/api-helpers";

export const getDevices = async (data) => {
    return await get(`/devices`);
}
