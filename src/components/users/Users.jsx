import React from 'react'
import s from './users.module.css'
import * as axios from 'axios'
import userPhoto from '../../assets/images/user.png'

export const Users = (props) => {

    if (props.users.length === 0) {
        axios.get(' https://social-network.samuraijs.com/api/1.0/users').then(response => {
            debugger;
            props.setUsers(response.data.items);
        });
    }






    const onClickFollowHandler = () => {
        props.unfollow(props.users.id)
    }
    const onClickUnfollowHandler = () => {
        props.follow(props.users.id)

    }




    return (
        props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto} />
                </div>
                <div>
                    {u.followed ? <button onClick={() => { props.unfollow(u.id) }}>Follow</button> : <button onClick={() => { props.follow(u.id) }}>Unfollow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div>
                        {u.name}
                    </div>
                    <div>
                        {u.status}
                    </div>
                </span>
                <span>
                    <div>
                        {/* {u.location.country} */}
                    </div>
                    <div>
                        {/* {u.location.city} */}
                    </div>
                </span>
            </span>
        </div>)
    )
}
