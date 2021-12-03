import React from "react";
import {NavLink} from "react-router-dom";
import s from './Header.module.css'


type HeaderType = {
    isAuth: boolean
    login: string | null
    logoutUserCallback: () => void
}

export const Header: React.FC<HeaderType> = ({isAuth, login,logoutUserCallback}) => {
    return (
        <header className={s.header}>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrPotIEiUTbNLUNoJE5gAdjdirbVcFSvLFvg&usqp=CAU'
                alt={'Logo'}/>

            {
                isAuth
                ? <div className={s.loginBlock}>{login} <button onClick={logoutUserCallback}>Log out</button> </div>
                : <div className={s.loginBlock}>
                    <NavLink to={'/login'}>Login</NavLink>
                </div>
            }

            {/*<div className={s.loginBlock}>*/}
            {/*    {props.isAuth ? props.login*/}
            {/*        : <NavLink to={'/login'}>Login</NavLink>}*/}
            {/*</div>*/}
        </header>
    )
}