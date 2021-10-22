import React from "react";
import {NavLink} from "react-router-dom";
import s from './Header.module.css'


type HeaderType = {
    isAuth: boolean
    login: string | null
}

export const Header: React.FC<HeaderType> = (props) => {

    debugger
    return (
        <header className={s.header}>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrPotIEiUTbNLUNoJE5gAdjdirbVcFSvLFvg&usqp=CAU'
                alt={'Logo'}/>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}