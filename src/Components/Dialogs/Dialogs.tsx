import React from "react";
import { NavLink } from "react-router-dom";
import s from './Dialogs.module.css'

type dialogsPopsType = {}

const Dialogs: React.FC<dialogsPopsType> = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/1'>Alex</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/2'>Natali</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/3'>Anna</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>I am a developer</div>
                <div className={s.message}>bla bla</div>
            </div>
        </div>
    )
}

export default Dialogs