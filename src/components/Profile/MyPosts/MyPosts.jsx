import React from 'react'
import { addPostActionCreator, updateNewPostTextActionCreater } from '../../../Redux/state'
import s from './MyPosts.module.css'
import { Post } from './Post/Post'




export const MyPosts = (props) => {

    let postElement = props.posts.map(el => <Post message={el.message} likesCount={el.likesCount} />)

    let newPostElem = React.createRef()

    let addPost = () => {
        // props.addPost();
        props.dispatch(addPostActionCreator())
    }

    let onChangeTextarea = () => {
        let text = newPostElem.current.value;
        const action = updateNewPostTextActionCreater(text)
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
