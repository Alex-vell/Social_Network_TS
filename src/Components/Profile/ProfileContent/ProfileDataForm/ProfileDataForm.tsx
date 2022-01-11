import React from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as Yup from "yup";
import s from './ProfileDataForm.module.css'


type ProfileDataFormPropsType = {
    profile: FormDataType
    toEditMode: () => void
    saveProfile: (profile: FormDataType) => void
}

export type FormDataType = {
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    aboutMe: string
    contacts: any
}

export const ProfileDataForm: React.FC<ProfileDataFormPropsType> = ({profile, toEditMode, saveProfile}) => {


    const SignupSchema = Yup.object().shape({
        fullName: Yup.string().required('Required'),
        lookingForAJobDescription: Yup.string().required('Required'),
        aboutMe: Yup.string().required('Required'),
        // contacts: Yup.string().email('Invalid email'),
    });
    const {register, handleSubmit, formState: {errors}} = useForm<FormDataType>({
        mode: 'onBlur',
        resolver: yupResolver(SignupSchema),

    });
    const onSubmit: SubmitHandler<FormDataType> = data => {
        saveProfile(data)
        toEditMode()
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)} className={s.profileDataFormContainer}>
            {/*<button onClick={alert('save')}>Save</button>*/}
            <div className={s.dataWrapper}>
                <b className={s.dataTitle}>Full name:</b>
                <div className={s.editField}>
                    <input {...register("fullName",)}
                           type='text'
                           defaultValue={profile.fullName}
                           autoFocus={true}
                        /*className={`${s.input} ${errors.email ? s.errorInput : s.input}`}*//>
                    <p>{errors.fullName?.message}</p>
                </div>
            </div>
            <div className={s.dataWrapper}>
                <b className={s.dataTitle}>Looking for a job:</b>
                <div className={s.editField}>
                    <input {...register("lookingForAJob")}
                        // defaultValue={profile.lookingForAJob}
                        /* className={s.checkbox}*/
                           type='checkbox'/>
                    <p>{errors.lookingForAJob?.message}</p>
                </div>
            </div>
            <div className={s.dataWrapper}>
                <b className={s.dataTitle}>My professional skills:</b>
                <div className={s.editField}>
                    <input {...register("lookingForAJobDescription",)}
                           type='textarea'
                           defaultValue={profile.lookingForAJobDescription}
                           autoFocus={true}
                        /*className={`${s.input} ${errors.email ? s.errorInput : s.input}`}*//>
                    <p>{errors.lookingForAJobDescription?.message}</p>
                </div>
            </div>
            <div className={s.dataWrapper}>
                <b className={s.dataTitle}>About me:</b>
                <div className={s.editField}>
                    <input {...register("aboutMe",)}
                           type='textarea'
                           defaultValue={profile.aboutMe}
                           autoFocus={true}
                        /*className={`${s.input} ${errors.email ? s.errorInput : s.input}`}*//>
                    <p>{errors.aboutMe?.message}</p>
                </div>
            </div>

            <div>
                <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return <div className={s.wrapperContact} key={key}>
                    <b className={s.contactTitle}>{key}:</b>
                    <input className={s.editFieldContact} {...register(`contacts.${key}`)} defaultValue={profile.contacts[key]}/>
                </div>

            })}
            </div>
            <button type="submit">save</button>
        </form>
    )
}