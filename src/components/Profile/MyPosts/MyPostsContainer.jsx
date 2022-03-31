import { addPostActionCreator, updateNewPostTextActionCreater } from '../../../Redux/profile-reducer'
import { MyPosts } from './MyPosts'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPostText: (text) => {
            const action = updateNewPostTextActionCreater(text);
            dispatch(action)
        }


    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
