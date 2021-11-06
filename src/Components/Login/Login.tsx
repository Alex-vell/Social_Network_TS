import React from "react";
import {loginUser} from "../../redux/auth-reducer";
import {useDispatch, useSelector} from "react-redux";
import {Field, Form, Formik, FormikProps} from 'formik';
import {AppStateType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";

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
    dispatch: (value: any) => void
}

const LoginForm = (props: LoginFormPropsType) => (

    <div>
        <h3>Login</h3>
        <Formik
            initialValues={{email: '', password: '', rememberMe: false}}
            onSubmit={(values: FormikDataType, actions) => {
                props.dispatch(loginUser(values.email, values.password, values.rememberMe))
                actions.setSubmitting(false);
            }}
        >
            {(props: FormikProps<FormikDataType>) => (
                <Form>
                    <div><Field type="text" name="email" placeholder="Email"/></div>
                    <div><Field type="password" name="password" placeholder="password"/></div>
                    <div><Field name="remember me" type={'checkbox'}/></div>
                    <button type="submit">Login</button>
                </Form>
            )}
        </Formik>
    </div>
);