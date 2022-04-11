import React from 'react'
import { Users } from './Users';
import { connect } from 'react-redux'
import { followAC, setCurrentPageAC, setUsersAC, setUsersTotalCount, unfollowAC } from '../../Redux/users-reducer';



let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totelUsersCount: state.usersPage.totelUsersCount,
    currentPage: state.usersPage.currentPage

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




export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

