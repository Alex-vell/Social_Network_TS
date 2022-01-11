import React, {ComponentType} from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {
    getUserProfile,
    getUserStatus,
    ProfileType,
    savePhoto,
    saveProfile,
    updateUserStatus
} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {FormDataType} from "./ProfileContent/ProfileDataForm/ProfileDataForm";


type PathParamsType = {
    userId: string
}
type MapStateToPropsType = {
    profile: ProfileType
    status: string
    isAuth: boolean
    authUserId: number | any
}
type MapDispatchToPropsType = {
    getUserProfile: (userID: number | null) => void
    getUserStatus: (userID: number | null) => void
    updateUserStatus: (status: string) => void
    savePhoto: (photo: File) => void
    saveProfile: (profile: FormDataType) => void
}
type StateAndDispatchPropsType = MapStateToPropsType & MapDispatchToPropsType
type ProfileContainerStateType = RouteComponentProps<PathParamsType> & StateAndDispatchPropsType


export class ProfileContainer extends React.Component<ProfileContainerStateType> {

    refreshProfile() {
        const {match, authUserId, history, getUserProfile, getUserStatus} = this.props
        let userId: number | null = Number(match.params.userId)
        if (!userId) {
            userId = authUserId
            if (!userId) {
                history.push('/login')
            }
        }
        if (userId) {
            getUserProfile(userId)
            getUserStatus(userId)
        }
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: ProfileContainerStateType, prevState: any) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return (
            <div>
                <Profile   {...this.props}
                           isOwner={!this.props.match.params.userId}
                           profile={this.props.profile}
                           status={this.props.status}
                           savePhoto={this.props.savePhoto}
                           saveProfile={this.props.saveProfile}
                           updateUserStatus={this.props.updateUserStatus}/>
            </div>
        )
    }

}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    isAuth: state.auth.isAuth,
    authUserId: state.auth.userId

})

export default compose<ComponentType>(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus, savePhoto, saveProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)