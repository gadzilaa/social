import React from 'react'
import * as axios from 'axios'
import userPhoto from '../../assets/images/user.png'
import s from './users.module.css'




export class Users extends React.Component {

    componentDidMount() {
        axios.get(' https://social-network.samuraijs.com/api/1.0/users').then(response => {
            debugger;
            this.props.setUsers(response.data.items);
        });
    }

    render() {
        return (
            <>
                {this.props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto} />
                        </div>
                        <div>
                            {u.followed ? <button onClick={() => { this.props.unfollow(u.id) }}>Follow</button> : <button onClick={() => { this.props.follow(u.id) }}>Unfollow</button>}
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
                </div>)}
            </>
        )
    }
}
