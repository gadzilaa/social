import React from 'react'
import s from './Dialogs.module.css'
import { DialogsItem } from './DialogsItem/DialogsItem'
import { Message } from './Message/Message'






export const Dialogs = (props) => {

    // let dialogs = [
    //     { id: 1, name: 'Alex' },
    //     { id: 2, name: 'Bob' },
    //     { id: 3, name: 'Bin' },
    //     { id: 4, name: 'Petya' },
    //     { id: 5, name: 'Vanya' }
    // ]

    // let messages = [
    //     { id: 1, message: 'Hi' },
    //     { id: 1, message: 'My first name is Igor ' },
    //     { id: 1, message: 'My last name is Golyb' }
    // ]

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
