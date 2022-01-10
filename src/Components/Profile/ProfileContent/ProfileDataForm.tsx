import React from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as Yup from "yup";

type ProfileDataFormPropsType = {
    profile: any
    toEditMode: () => void
    saveProfile: (profile: any) => void
}

type FormDataType = {
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
        <form onSubmit={handleSubmit(onSubmit)}>
            {/*<button onClick={alert('save')}>Save</button>*/}
            <div>
                <b>Full name</b>:
                <div>
                    <input {...register("fullName",)}
                           type='text'
                           defaultValue={profile.fullName}
                           autoFocus={true}
                        /*className={`${s.input} ${errors.email ? s.errorInput : s.input}`}*//>
                    <p>{errors.fullName?.message}</p>
                </div>
            </div>
            <div>
                <b>Looking for a job</b>:
                <div>
                    <input {...register("lookingForAJob")}
                        // defaultValue={profile.lookingForAJob}
                        /* className={s.checkbox}*/
                           type='checkbox'/>
                </div>
            </div>
            <div>
                <b>My professional skills</b>:
                <div>
                    <input {...register("lookingForAJobDescription",)}
                           type='textarea'
                           defaultValue={profile.lookingForAJobDescription}
                           autoFocus={true}
                        /*className={`${s.input} ${errors.email ? s.errorInput : s.input}`}*//>
                </div>
            </div>
            <div>
                <b>About me</b>:
                <div>
                    <input {...register("aboutMe",)}
                           type='textarea'
                           defaultValue={profile.aboutMe}
                           autoFocus={true}
                        /*className={`${s.input} ${errors.email ? s.errorInput : s.input}`}*//>
                </div>
            </div>

            <div>
                <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return <div key={key}>
                    <b>{key}:
                        <input {...register(`contacts.${key}`)} defaultValue={profile.contacts[key]}/>
                    </b>
                </div>

            })}
            </div>
            <button type="submit">save</button>
        </form>
    )
}