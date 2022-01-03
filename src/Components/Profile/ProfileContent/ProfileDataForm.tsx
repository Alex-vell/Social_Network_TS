import React from "react";
import {Contacts} from "./ProfileContent";

type ProfileDataFormPropsType = {
    profile: any
}

export const ProfileDataForm: React.FC<ProfileDataFormPropsType> = ({profile}) => {
    return (
        <div>
          {/*<button onClick={alert('save')}>Save</button>*/}
            <div>
                <b>Full name</b>: {profile.fullName}
            </div>
            <div>
                <b>Looking for a job</b>: {profile.lookingForAJob ? 'Yes' : 'No'}
            </div>
            {
                profile.lookingForAJob &&
                <div>
                    <b>My professional skills</b>: {profile.lookingForAJobDescription}
                </div>
            }
            <div>
                <b>About me</b>: {profile.about}
            </div>

            <div>
                <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return <Contacts key={key}
                                 contactTitle={key}
                                 contactValue={profile.contacts[key]}/>
            })}
            </div>
        </div>
    )
}