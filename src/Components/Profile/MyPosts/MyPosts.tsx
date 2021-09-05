import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPost} from "../../../redux/state";

type PostsType = {
    id: number
    message: string
    likesCount: number
}
type ProfilePageType = {
    posts: Array<PostsType>
    addPost: (postMessage: string) => void
}

const MyPosts: React.FC<ProfilePageType> = (props) => {

    let postsElement = props.posts.map(el => <Post message={el.message} likesCount={el.likesCount}/>)


    let [text, setText] = useState('');
    const addPostHandler = () => {
        props.addPost(text)
        setText('')
    }
    const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.currentTarget.value);
    }
    const onKeyPressHandler = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter') {
            props.addPost(text)
            setText('')
        }
    }

    return (
        <div>
            My posts
            <div>
                <div>
                    <textarea value={text} onChange={onChangeHandler} onKeyDown={onKeyPressHandler}></textarea>
                </div>
                <div>
                    <button onClick={addPostHandler}>Add post</button>
                </div>
            </div>

            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts
