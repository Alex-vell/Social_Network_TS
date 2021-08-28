import React from "react";
import s from './Header.module.css'

type headerPropsType = {}

const Header: React.FC<headerPropsType> = () => {
    return (
        <header className={s.header}>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrPotIEiUTbNLUNoJE5gAdjdirbVcFSvLFvg&usqp=CAU'/>
        </header>
    )
}

export default Header
