///////////////////////////////// react hook form

import React from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";
import * as Yup from "yup";
import s from './Login.module.css'
import {yupResolver} from "@hookform/resolvers/yup";
import {loginUser} from "../../redux/auth-reducer";


type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

export const LoginPage = () => {
    const isAuth = useSelector<AppStateType, boolean>(state => state.auth.isAuth)
    const dispatch = useDispatch()

    const SignupSchema = Yup.object().shape({
        password: Yup.string()
            .min(8, 'Too Short!')
            .max(20, 'Too Long!')
            .required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
    });
    const {register, handleSubmit, formState: {errors}} = useForm<FormDataType>({
        mode: 'onBlur',
        resolver: yupResolver(SignupSchema),

    });
    const onSubmit: SubmitHandler<FormDataType> = data => {
        dispatch(loginUser(data.email, data.password, data.rememberMe))
    }

    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={s.formContainer}>

            <div className={s.inputContainer}>
                <input {...register("email",)}
                       type='email'
                       placeholder={'Email'}
                       autoFocus={true}
                       className={`${s.input} ${errors.email ? s.errorInput : s.input}`}/>

                <p>{errors.email?.message}</p>


                <input {...register("password")}
                       type='password'
                       placeholder={'Password'}
                       className={`${s.input} ${errors.password ? s.errorInput : s.input}`}/>

                <p>{errors.password?.message}</p>


                 <input {...register("rememberMe")}
                   className={s.checkbox}
                   type='checkbox'/>
                <button type="submit" className={s.button}>Login</button>
            </div>
        </form>
    );
}


////////////////////////////  useFormik
/*
import React from 'react';
import {useFormik} from 'formik';
import {Redirect} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {loginUser} from "../../redux/auth-reducer";
import * as Yup from "yup";
import s from './Login.module.css'


type FormikDataType = {
    email: string
    password: string
    rememberMe: boolean
}

export const Login = () => {
    const isAuth = useSelector<AppStateType, boolean>(state => state.auth.isAuth)
    const dispatch = useDispatch()

    const initialValues = {
        email: '',
        password: '',
        rememberMe: false,
    }

    const onSubmit = (values: FormikDataType) => {
        dispatch(loginUser(values.email, values.password, values.rememberMe))
    }
    const validationSchema = Yup.object().shape({
        password: Yup.string()
            .min(8, 'Too Short!')
            .max(20, 'Too Long!')
            .required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
    });

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    });

    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    placeholder="Email"
                    className={`${s.input} ${formik.errors.email && formik.touched.email ? s.errorInput : s.input}`}
                    onBlur={formik.handleBlur}
                />
            </div>

            {formik.errors.email && formik.touched.email
                ? (<div style={{color: "red"}}>{formik.errors.email}</div>)
                : null}

            <div>
                <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    placeholder="Password"
                    className={`${s.input} ${formik.errors.password && formik.touched.password ? s.errorInput : s.input}`}
                    onBlur={formik.handleBlur}
                />
            </div>

            {formik.errors.password && formik.touched.password
                ? (<div style={{color: "red"}}>{formik.errors.password}</div>)
                : null}

            <div>
                <input
                    id="rememberMe"
                    name="rememberMe"
                    type="checkbox"
                    onChange={formik.handleChange}
                />
            </div>
            <button type="submit" disabled={!(formik.dirty && formik.isValid)} className={s.button}>Submit</button>
        </form>
    );
}*/




///////////////////////////////
/*
import React from "react";
import {loginUser} from "../../redux/auth-reducer";
import {useDispatch, useSelector} from "react-redux";
import {Field, Form, Formik} from 'formik';
import {AppStateType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";
import {Dispatch} from "redux";
import * as Yup from "yup";
import s from './Login.module.css'


export const Login = () => {
    const isAuth = useSelector<AppStateType, boolean>(state => state.auth.isAuth)
    const dispatch = useDispatch()

    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            <LoginForm dispatch={dispatch}/>
        </div>
    );
}


type FormikDataType = {
    email: string | null
    password: string | null
    rememberMe: boolean
}
type LoginFormPropsType = {
    dispatch: Dispatch<any>
}

const SignupSchema = Yup.object().shape({
    password: Yup.string()
        .min(8, 'Too Short!')
        .max(20, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
});

const LoginForm = (props: LoginFormPropsType) => (

    <div>
        <h3>Login</h3>
        <Formik
            initialValues={{email: '', password: '', rememberMe: false}}
            validationSchema={SignupSchema}
            onSubmit={(values: FormikDataType, actions) => {
                props.dispatch(loginUser(values.email, values.password, values.rememberMe))
                actions.setSubmitting(false);

            }}
            // validateOnMount
        >
            {({errors, touched, dirty, isValid}) => (
                <Form>
                    <div>
                        <Field type="text"
                               className={errors.email && touched.email ? s.errorEmail : s.email}
                               name="email"
                               placeholder="Email"/>
                    </div>
                    {errors.email && touched.email
                        ? (<div style={{color: "red"}}>{errors.email}</div>)
                        : null}
                    <div>
                        <Field type="password"
                               className={errors.password && touched.password ? s.errorPassword : s.password}
                               name="password"
                               placeholder="password"/>
                    </div>
                    {errors.password && touched.password
                        ? (<div style={{color: "red"}}>{errors.password}</div>)
                        : null}
                    <div>
                        <Field name="remember me" type={'checkbox'}/>
                    </div>

                    <button type="submit" disabled={!(dirty && isValid)}>Login</button>
                </Form>
            )}
        </Formik>
    </div>
);
*/



