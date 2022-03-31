import React from 'react'
import { sendMessageCreater, updateNewMessageBodyCreater } from '../../Redux/dialogs-reducer'
import { StoreContext } from '../../StoreContext';
import { Dialogs } from './Dialogs';






export const DialogsContainer = (props) => {

    return <StoreContext.Consumer>
        {store => {

            let state = store.getState().dialogsPage;

            const onClickButtonHandler = () => {
                store.dispatch(sendMessageCreater())
            }
            const onChangeTextAreaHandler = (body) => {
                store.dispatch(updateNewMessageBodyCreater(body));
            }

            return <Dialogs state={state}
                sendMessageCreater={onClickButtonHandler}
                updateNewMessageBody={onChangeTextAreaHandler}
            />
        }
        }
    </StoreContext.Consumer>
}
