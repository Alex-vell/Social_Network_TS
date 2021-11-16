import React from "react";
import preloader from '../../../assets/images/preloader.gif'
import s from './Preloader.module.css'

export const Preloader = () => {
  return (
      <>
        <img className={s.preloader} src={preloader} alt={'preloader'}/>
      </>

  )
}