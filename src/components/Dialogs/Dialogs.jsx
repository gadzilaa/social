import React from 'react'
import s from './Dialogs.module.css'
import { DialogsItem } from './DialogsItem/DialogsItem'
import { Message } from './Message/Message'






export const Dialogs = (props) => {
let state =props.state

    let dialogElement = state.dialogs.map(el => <DialogsItem key={el.id} name={el.name} id={el.id} />)

    let messageElement = state.messages.map(el => <Message key={el.id} message={el.message} />)
    let newMessageBody =  state.newMessageBody;




    const onClickButtonHandler = () => {
        props.sendMessageCreater()
        // props.store.dispatch(sendMessageCreater())
        // props.dispatch(addDialogsActionCreator())
    }

    const onChangeTextAreaHandler = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body)
        // props.store.dispatch(updateNewMessageBodyCreater(body));


        // let message = newDialogElem.current.value;
        // const action = updateNewDialogsTextActionCreater(message)
        // props.dispatch(action)

    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogElement}

            </div>
            <div className={s.messages}>
                <div>{messageElement}</div>
                <div>
                    <div><textarea onChange={onChangeTextAreaHandler} placeholder={'enter your message'} value={newMessageBody} /></div>
                    <div><button onClick={onClickButtonHandler}>add</button></div>
                </div>


            </div>
        </div>
    )
}
