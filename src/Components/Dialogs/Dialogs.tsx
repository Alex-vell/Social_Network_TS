import React from "react";
import s from './Dialogs.module.css'

type dialogsPopsType = {}

const Dialogs: React.FC<dialogsPopsType> = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <div className={s.dialog}>
                    Alex
                </div>
                <div className={s.dialog}>
                    Natali
                </div>
                <div className={s.dialog}>
                    Anna
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