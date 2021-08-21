import React from "react";
import s from './Post.module.css'

type typeProps = {
    message: string
    likesCount: string
}

const Post: React.FC<typeProps> = (props) => {
    return (
        <div className={s.item}>
            <img src='https://ezyschooling.com/_nuxt/img/default-avatar.7a6572e.png'/>
            {props.message}

            <div>
                like {props.likesCount}
            </div>
        </div>
    )
}

export default Post
