import { saludo } from "../../core/core";


export const sendMessage = async () => {

    await saludo();

    return {
    sendNotification: "response",
    message: 'notification successfully sent to user'
    }
};
