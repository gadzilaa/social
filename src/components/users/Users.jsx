import React from 'react'
import s from './users.module.css'
import userPhoto from '../../assets/images/user.png'



export const Users = (props) => {

    let pagesCount = Math.ceil(props.totelUsersCount / props.pageSize);


    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
        if (i === 20) break;
    }
    return (
        <>
            <div>
                {pages.map((p, i) => <span key={i} className={props.currentPage === p && s.selected} onClick={(e) => { props.onclickHandler(p); }}>{p}</span>)}

            </div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto} alt='' />
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
            }
        </>
    )
}
