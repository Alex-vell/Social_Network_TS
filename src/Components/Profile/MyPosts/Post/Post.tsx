import React from "react";
import s from './Post.module.css'

const Post = () => {
    return (
        <div className={s.item}>
            <img src='https://ezyschooling.com/_nuxt/img/default-avatar.7a6572e.png'/>
            post 1
            <div>
                like
            </div>
        </div>
    )
}

export default Post
