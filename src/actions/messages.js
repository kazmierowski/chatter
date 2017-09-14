export const initMessages = ((messages = []) => {
    return {
        type: 'INIT_MESSAGES',
        messages: messages
    }
});

export const newMessage = ((message) => {
   return {
       type: 'NEW_MESSAGE',
       message: [message]
   }
});

export const newUpdateMessage = ((message) => {
    return {
        type: 'NEW_UPDATE_MESSAGE',
        message: [message]
    }
});