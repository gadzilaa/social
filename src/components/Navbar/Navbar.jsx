import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Navbar.module.css'


export const Navbar = () => {

   

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile' className={({ isActive }) => (isActive ? `${s.active}` : `${s.inactive}`)}>Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to='/dialogs' className={({ isActive }) => (isActive ? `${s.active}` : `${s.inactive}`)}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' className={({ isActive }) => (isActive ? `${s.active}` : `${s.inactive}`)}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='music' className={({ isActive }) => (isActive ? `${s.active}` : `${s.inactive}`)}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='setting' className={({ isActive }) => (isActive ? `${s.active}` : `${s.inactive}`)}>Setting</NavLink>
            </div>
        </nav>
    )
}
