import React from 'react'
import s from './MyPosts.module.css'
import { Post } from './Post/Post'

export const MyPosts = (props) => {
    return (
        <div className={s.postsBlock}>
           <h3>My post</h3> 
            <div>
                <textarea></textarea>
            </div>
            <button>Add</button>
            <div className={s.posts}>
                <Post message ={'My first post'} likesCount={'2'}/>
                <Post message ={'My second post'} likesCount={'22'}/>

            </div >

        </div>
       

    )
}
