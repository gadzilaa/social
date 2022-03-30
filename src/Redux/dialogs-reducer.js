const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

export const dialogsReducer = (state, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let newBody = {
                id: 4, message: state.newMessageBody
            }
            state.messages.push(newBody);
            state.newMessageBody = "";
            return state;
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        default:
            return state;
    }
}

export let sendMessageCreater = () => {
    return {
        type: SEND_MESSAGE
    }
}


export let updateNewMessageBodyCreater = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    }
}



