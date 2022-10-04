import { saludo } from "../../core/core";

export const sendMessage = async ( _startId: string, _endId: string ) => {

    await saludo();

    return {
    sendNotification: "response",
    message: 'notification successfully sent to user'
    }
};
