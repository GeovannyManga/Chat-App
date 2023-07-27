export const MESSAGES_LIST = 'MESSAGES_LIST'











// actions.js
export const messagesList = (messages) => {
    return {
      type: 'MESSAGES_LIST',
      payload: messages,
    };
  };
  