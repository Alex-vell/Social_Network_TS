import React, {useEffect} from 'react';
import s from './Home.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getUserProfile, ProfileType} from "../../redux/profile-reducer";
import {logo} from "../../assets/images";
import {Redirect} from "react-router-dom";

export const Home = () => {
    const dispatch = useDispatch();

    const user = useSelector<AppStateType, ProfileType | null>(state => state.profilePage.profile);
    const userId = useSelector<AppStateType, number | null>(state => state.auth.userId);

    useEffect(() => {
        if (!user) {
            dispatch(getUserProfile(userId))
        }
    }, [])


    if (!userId) {
        return <Redirect exact from="/login" to="/login" />
    }

    return (
        <div className={s.home}>
            <div className={s.banner}/>
            {/*<img src={user?.photos ? user.photos.large : logo.avatar} alt="user" className={s.avatar}/>*/}
            <img src={user?.photos.large ? user.photos.large : logo.avatar} alt="user" className={s.avatar}/>
            <div className={s.userInfoBlock}>
                <p className={s.userName}>{user?.fullName}</p>
                <p className={s.aboutMe}>{user?.aboutMe}</p>
            </div>
        </div>
    );
};
