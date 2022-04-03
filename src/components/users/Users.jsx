import React from 'react'
import s from './users.module.css'

export const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            { id: 1, photoUrl: 'https://w7.pngwing.com/pngs/409/621/png-transparent-computer-icons-avatar-male-user-profile-others-logo-monochrome-silhouette.png', followed: false, fullName: "Igor'", status: "I'm a student", location: { city: "Stb", country: "RB" } },
            { id: 2, photoUrl: 'https://w7.pngwing.com/pngs/409/621/png-transparent-computer-icons-avatar-male-user-profile-others-logo-monochrome-silhouette.png', followed: true, fullName: "Masha", status: "I'm an engineer", location: { city: "Minsk", country: "RB" } },
            { id: 3, photoUrl: 'https://w7.pngwing.com/pngs/409/621/png-transparent-computer-icons-avatar-male-user-profile-others-logo-monochrome-silhouette.png', followed: true, fullName: "Ignat", status: "I'm a senior", location: { city: "Wroclav", country: "Poland" } },
            { id: 4, photoUrl: 'https://w7.pngwing.com/pngs/409/621/png-transparent-computer-icons-avatar-male-user-profile-others-logo-monochrome-silhouette.png', followed: false, fullName: "Yra", status: "I'm a boss", location: { city: "Stolbcy", country: "RB" } },
        ])

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
                    <img src={u.photoUrl} className={s.userPhoto} />
                </div>
                <div>
                    {u.followed ? <button onClick={() => { props.unfollow(u.id) }}>Follow</button> : <button onClick={() => { props.follow(u.id) }}>Unfollow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div>
                        {u.fullName}
                    </div>
                    <div>
                        {u.status}
                    </div>
                </span>
                <span>
                    <div>
                        {u.location.country}
                    </div>
                    <div>
                        {u.location.city}
                    </div>
                </span>
            </span>
        </div>)
    )
}
