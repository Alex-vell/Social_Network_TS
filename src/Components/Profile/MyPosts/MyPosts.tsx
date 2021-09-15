import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {ActionsTypes, addNewPostTextAC, addPostAC, PostsType} from "../../../redux/state";

/*type PostsType = {
    id: number
    message: string
    likesCount: number
}*/
type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
    dispatch: (action: ActionsTypes) => void
    //addPostCallback: (postMessage: string) => void
    //addNewPostTextCallback: (newText: string) => void
}

export const MyPosts: React.FC<ProfilePageType> = (props) => {

    let postsElement = props.posts.map(el => <Post key={el.id} message={el.message} likesCount={el.likesCount}/>)


    /*let [text, setText] = useState('');
    const addPostHandler = () => {
        props.addPostCallback(text)
        setText('')
    }
    const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.currentTarget.value);
    }
    const onKeyPressHandler = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter') {
            props.addPostCallback(text)
            setText('')
        }
    }*/

    const addPostHandler = () => {
        props.dispatch(addPostAC(props.newPostText))
        //props.addPostCallback('')

    }
    /*const onChangeHandler = (postMessageRef: ChangeEvent<HTMLTextAreaElement>) => {
        props.addPostCallback(postMessageRef.currentTarget.value);
    }
*/

    const onChangePostHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
      let content = event.currentTarget.value
        props.dispatch(addNewPostTextAC(content))
        //props.addNewPostTextCallback(content)
    }
    return (
        <div>
            My posts
            <div>
                <div>
                    <textarea onChange={onChangePostHandler} value={props.newPostText}/>
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