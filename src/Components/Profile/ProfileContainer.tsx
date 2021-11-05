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
}
type MapDispatchToPropsType = {
    getUserProfile: (userID: number) => void
    getUserStatus: (userID: number) => void
    updateUserStatus: (status: string) => void
}
type StateAndDispatchPropsType = MapStateToPropsType & MapDispatchToPropsType
type ProfileContainerStateType = RouteComponentProps<PathParamsType> & StateAndDispatchPropsType


export class ProfileContainer extends React.Component<ProfileContainerStateType> {

    componentDidMount() {
        let userId = +this.props.match.params.userId
        if (!userId) {
            userId = 16626
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
})


//let WithRouterProfileContainer = withRouter(ProfileContainer)

//export default withAuthRedirect(connect(mapStateToProps, {getUserProfile})(WithRouterProfileContainer))

export default compose<ComponentType>(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)