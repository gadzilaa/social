const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        { id: 1, name: 'Alex' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Bin' },
        { id: 4, name: 'Petya' },
        { id: 5, name: 'Vanya' }
    ],
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'My first name is Igor ' },
        { id: 3, message: 'My last name is Golyb' }
    ],
    newMessageBody: ''

}

export const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:

            let newBody = {
                id: 4, message: state.newMessageBody
            }

            return {
                ...state,
                newMessageBody : "",
                messages: [...state.messages, newBody]
            };


        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };

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



