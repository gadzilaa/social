import React from 'react'
import s from './MyPosts.module.css'
import { Post } from './Post/Post'




export const MyPosts = (props) => {

    let postElement = props.posts.map(el => <Post key={el.id} message={el.message} likesCount={el.likesCount} />)

    let newPostElem = React.createRef()

    let addPost = () => {
        props.addPost();
        // props.dispatch(addPostActionCreator())
    }

    let onChangeTextarea = () => {
        let text = newPostElem.current.value;
        props.updateNewPostText(text);
        // const action = updateNewPostTextActionCreater(text)
        // props.dispatch(action)

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
