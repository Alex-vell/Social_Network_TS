import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {UserType} from "../../redux/users-reducer";

type PathParamsType = {
    userId: string
}
type MapStateToPropsType = {
    profile: any
}
type MapDispatchToPropsType = {
    setUserProfile: (profile: any) => void
}
type StateAndDispatchPropsType = MapStateToPropsType & MapDispatchToPropsType
type ProfileContainerStateType =  RouteComponentProps<PathParamsType> & StateAndDispatchPropsType
type ResponseUsersType = {
    items: Array<UserType>
    totalCount: number
    error: string
}
type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
type PhotosType = {
    small: string
    large: string
}
type ResponseProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
}

export class  ProfileContainer extends React.Component<ProfileContainerStateType>{

    componentDidMount() {
        let userID = this.props.match.params.userId
        if (!userID){
            userID = '16626'
        }
        axios.get<ResponseProfileType>(`https://social-network.samuraijs.com/api/1.0/profile/`+ userID)   //`${userID ? userID : '16626'}`
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <div>
                <Profile   {...this.props} profile={this.props.profile} />
            </div>
        )
    }

}




const mapStateToProps = (state: AppStateType):MapStateToPropsType => ({
    profile: state.profilePage.profile
})



let WithRouterProfileContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(WithRouterProfileContainer)