import React from 'react'
import { addPostActionCreator, updateNewPostTextActionCreater } from '../../../Redux/profile-reducer'
import { MyPosts } from './MyPosts'




export const MyPostsContainer = (props) => {

    let state = props.store.getState();


    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    let onChangeTextarea = (text) => {
        const action = updateNewPostTextActionCreater(text);
        props.store.dispatch(action)

    }


    return (
        <MyPosts addPost={addPost} updateNewPostText={onChangeTextarea} posts={state.profilePage.posts} newPostText= {state.profilePage.newPostText}/>
    )
}
