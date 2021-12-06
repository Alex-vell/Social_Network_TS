import React from "react";
import Post from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";
import * as Yup from "yup";
import s from './MyPosts.module.css'
import {SubmitHandler, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";


export const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    let postsElement = props.posts.map(el => <Post key={el.id} message={el.message} likesCount={el.likesCount}/>)
    return (
        <div>
            <PostForm addPostCallback={props.addPostCallback}/>
            <div>
                {postsElement}
            </div>
        </div>
    )
}

type FormPropsType = {
    addPostCallback: (newPostText: string) => void
}

type FormikDataType = {
    newPostText: string
}

export const PostForm = (props: FormPropsType) => {
    const SignupSchema = Yup.object().shape({
        newPostText: Yup.string()
            .min(1, 'Too Short!')
            .max(50, 'Too Long!')
            .required('')
    });

    const {register, handleSubmit, formState: {errors}, resetField} = useForm<FormikDataType>({
        resolver: yupResolver(SignupSchema),

    });
    const onSubmit: SubmitHandler<FormikDataType> = data => {
        props.addPostCallback(data.newPostText)
        resetField('newPostText')
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <input {...register("newPostText",)}
                   type='newPostText'
                   placeholder={'Enter text'}
                   className={`${s.input} ${errors.newPostText ? s.errorInput : s.input}`}/>

            <p style={{color: "red"}}>{errors.newPostText?.message}</p>
        </div>
        <button type="submit">Add post</button>
    </form>
    )
}
