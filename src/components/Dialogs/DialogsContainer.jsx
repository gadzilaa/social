import React from 'react'
import { sendMessageCreater, updateNewMessageBodyCreater } from '../../Redux/dialogs-reducer'
import { Dialogs } from './Dialogs';






export const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;


    const onClickButtonHandler = () => {
        props.store.dispatch(sendMessageCreater())
        // props.dispatch(addDialogsActionCreator())
    }

    const onChangeTextAreaHandler = (body) => {
        props.store.dispatch(updateNewMessageBodyCreater(body));


        

    }

    return (
       <Dialogs state={state} 
       sendMessageCreater={onClickButtonHandler}
       updateNewMessageBody= {onChangeTextAreaHandler}
       />
    )
}
