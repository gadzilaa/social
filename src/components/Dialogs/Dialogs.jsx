import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'

const DialogsItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}




export const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogsItem name='Alex' id='1' />
                <DialogsItem name='Bob' id='2' />
                <DialogsItem name='Bin' id='3' />
                <DialogsItem name='Petya' id='4' />
                <DialogsItem name='Vanya' id='5' />
            </div>
            <div className={s.messages}>
                <Message message='Hi' />
                <Message message='My first name is Igor' />
                <Message message='My last name is Golyb' />

            </div>
        </div>
    )
}
