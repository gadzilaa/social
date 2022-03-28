import React from 'react'
import s from './Dialogs.module.css'
import { DialogsItem } from './DialogsItem/DialogsItem'
import { Message } from './Message/Message'






export const Dialogs = (props) => {

   

    let dialogElement = props.state.dialogs.map(el => <DialogsItem name={el.name} id={el.id} />)

    let messageElement = props.state.messages.map(el => <Message message={el.message} />)
 
   


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogElement}

            </div>
            <div className={s.messages}>
               {messageElement}
            </div>
        </div>
    )
}
