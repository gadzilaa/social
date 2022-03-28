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
        debugger;
        // let text = newPostElem.current.value;
        props.addPost();
        // newPostElem.current.value='';
        // props.updateNewPostText(' ');

    }

    let onChangeTextarea = () => {
        let text = newPostElem.current.value;
        props.updateNewPostText(text);

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
