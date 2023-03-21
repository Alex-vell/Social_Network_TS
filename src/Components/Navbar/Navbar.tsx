import React from "react";
import {NavLink} from "react-router-dom";
import s from './Navbar.module.scss'
import {logo} from "../../assets/images";

type navbarPropsType = {}

export const Navbar: React.FC<navbarPropsType> = () => {
    return (
        <nav className={s.nav}>
            <NavLink to='/home' className={s.item} activeClassName={s.active}>
                <img src={logo.home} alt='home' className={s.menuItemImg}/>
                Home
            </NavLink>
            <NavLink to='/profile' className={s.item} activeClassName={s.active}>
                <img src={logo.profile} alt='profile' className={s.menuItemImg}/>
                Profile
            </NavLink>
            <NavLink to='/dialogs' className={s.item} activeClassName={s.active}>
                <img src={logo.message} alt='profile' className={s.menuItemImg}/>
                Messages
            </NavLink>
            <NavLink to='/users' className={s.item} activeClassName={s.active}>
                <img src={logo.friends} alt='profile' className={s.menuItemImg}/>
                Users
            </NavLink>
            {/* <div className={s.item}>
                <NavLink to='/news' activeClassName={s.active}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' activeClassName={s.active}>Music</NavLink>
            </div>*/}
            <NavLink to='/settings' className={s.item} activeClassName={s.active}>
                <img src={logo.settings} alt='profile' className={s.menuItemImg}/>
                Settings
            </NavLink>
        </nav>
    )
}
