import React, {ComponentType} from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, updateUserStatus} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type PathParamsType = {
    userId: string
}
type MapStateToPropsType = {
    profile: any
    status: string
    isAuth: boolean
    authUserId: number | any
}
type MapDispatchToPropsType = {
    getUserProfile: (userID: number | null) => void
    getUserStatus: (userID: number | null) => void
    updateUserStatus: (status: string) => void
}
type StateAndDispatchPropsType = MapStateToPropsType & MapDispatchToPropsType
type ProfileContainerStateType = RouteComponentProps<PathParamsType> & StateAndDispatchPropsType


export class ProfileContainer extends React.Component<ProfileContainerStateType> {

    componentDidMount() {
        let userId = +this.props.match.params.userId
        if (!userId) {
            userId = this.props.authUserId
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    render() {

        return (
            <div>
                <Profile   {...this.props}
                           profile={this.props.profile}
                           status={this.props.status}
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
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)