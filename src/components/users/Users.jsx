import React from 'react'
import * as axios from 'axios'
import userPhoto from '../../assets/images/user.png'
import s from './users.module.css'




export class Users extends React.Component {

    componentDidMount() {
        axios.get(` https://social-network.samuraijs.com/api/1.0/users?page=${this.props.totelUsersCount}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }

    onclickHandler = (pageNumber) => {

        this.props.setCurrentPage(pageNumber);
        axios.get(` https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            debugger;
            this.props.setUsers(response.data.items);
        });
    }

    render() {

        let pagesCount = Math.ceil(this.props.totelUsersCount / this.props.pageSize);


        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
            if (i == 20) break;
        }
        



        return (
            <>
                <div>
                    {pages.map((p, i) => <span key={i} className={this.props.currentPage === p && s.selected} onClick={(e) => { this.onclickHandler(p); }}>{p}</span>)}

                </div>
                {
                    this.props.users.map(u => <div key={u.id}>
                        <span>
                            <div>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto} alt='' />
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
                    </div>)
                }
            </>
        )
    }
}
