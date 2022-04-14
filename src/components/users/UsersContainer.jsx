import React from 'react'
import { connect } from 'react-redux'
import { followAC, setCurrentPageAC, setUsersAC, setUsersTotalCount, unfollowAC } from '../../Redux/users-reducer';
import * as axios from 'axios'
import { Users } from './Users';
import preloader from '../../assets/images/loader.svg'


class UsersContainer extends React.Component {

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
    return <>
      {this.props.isFetching ? <img src={preloader}/> : null}
    
      <Users
        totelUsersCount={this.props.totelUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onclickHandler={this.onclickHandler}
        users={this.props.users}
        unfollow={this.props.unfollow}
        follow={this.props.follow}
      />
    </>
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totelUsersCount: state.usersPage.totelUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching

  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId))
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId))
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users))
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAC(pageNumber))
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setUsersTotalCount(totalCount))
    }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

