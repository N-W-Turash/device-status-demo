import { post } from "../helpers/api-helpers";
import * as authService from "../services/auth.service";

export const notify = async () => {

    const notifyData = {
        name: "Nurul Wahed",
        email: "turash.sust@gmailm.com",
        repoUrl: "https://github.com/N-W-Turash/device-status-demo",
        message: "I haven't pushed the codes regarding showing circles due to improper implementation, as a compensation here's a little souvenir: https://youtu.be/qBdB55cyT4A"

    }

    const config = {
        headers:authService.getAuthorizationHeader()
    }
    return await post(`/notify`, notifyData, config);
}
