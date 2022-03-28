import React from 'react'
import s from './MyPosts.module.css'
import { Post } from './Post/Post'

export const MyPosts = (props) => {

    // let posts = [
    //     { id: 1, message: 'My first post', likesCount: 2 },
    //     { id: 2, message: 'My second post', likesCount: 22 }
    // ]

    let postElement = props.posts.map(el => <Post message={el.message} likesCount={el.likesCount} />)

    let newPostElem = React.createRef()

    let addPost = () => {
        // props.addPost();
        props.dispatch({ type: 'ADD-POST' })

    }

    let onChangeTextarea = () => {
        let text = newPostElem.current.value;
        const action = { type: 'UPDATE-NEW-POST-TEXT', newText: text }
        // props.updateNewPostText(text);
        props.dispatch(action)

    }


    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <textarea
                    onChange={onChangeTextarea}
                    ref={newPostElem}
                    value={props.newPostText}
                />
            </div>
            <button onClick={addPost}>Add</button>
            <div className={s.posts}>
                {postElement}
            </div >

        </div>


    )
}
