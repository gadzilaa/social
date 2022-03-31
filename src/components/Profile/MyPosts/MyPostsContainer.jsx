import React from 'react'
import { addPostActionCreator, updateNewPostTextActionCreater } from '../../../Redux/profile-reducer'
import { StoreContext } from '../../../StoreContext';
import { MyPosts } from './MyPosts'




export const MyPostsContainer = (props) => {

    return (
        <StoreContext.Consumer>
            {store => {

                let state = store.getState();

                let addPost = () => {
                    store.dispatch(addPostActionCreator())
                }

                let onChangeTextarea = (text) => {
                    const action = updateNewPostTextActionCreater(text);
                    store.dispatch(action)
                }

                return <MyPosts addPost={addPost} updateNewPostText={onChangeTextarea} posts={state.profilePage.posts} newPostText={state.profilePage.newPostText} />
            }
            }</ StoreContext.Consumer>
    )

}
