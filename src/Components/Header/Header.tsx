import React from "react";
import {NavLink} from "react-router-dom";
import s from './Header.module.scss'
import {logo} from "../../assets/images";
import {LogoutBth} from "../common/LogoutBtn/LogoutBth";


type HeaderType = {
    isAuth: boolean
    login: string | null
    logoutUserCallback: () => void
}

export const Header: React.FC<HeaderType> = ({isAuth, login,logoutUserCallback}) => {
    return (
        <header className={s.header}>
            <div className={s.wrapper}>
                <NavLink to='/profile'>
                    <img
                        className={s.logo}
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrPotIEiUTbNLUNoJE5gAdjdirbVcFSvLFvg&usqp=CAU'
                        alt={'Logo'}/>
                </NavLink>

                {
                    isAuth
                        ? <div className={s.loginBlock}>
                            <span className={s.userName}>{login}</span>
                            {/*<img src={logo.logout} alt="logout" className={s.logoutImg}/>*/}
                            <LogoutBth callback={logoutUserCallback} classname={s.logoutImg}/>
                            {/*<button onClick={logoutUserCallback}>Logout</button>*/}
                        </div>
                        : <div className={s.loginBlock}>
                            <NavLink to={'/login'}>Login</NavLink>
                        </div>
                }

            </div>
            {/*<div className={s.loginBlock}>*/}
            {/*    {props.isAuth ? props.login*/}
            {/*        : <NavLink to={'/login'}>Login</NavLink>}*/}
            {/*</div>*/}
        </header>
    )
}
