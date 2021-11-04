import React, {ComponentType} from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type PathParamsType = {
    userId: string
}
type MapStateToPropsType = {
    profile: any
}
type MapDispatchToPropsType = {
    getUserProfile: (userID: string) => void
}
type StateAndDispatchPropsType = MapStateToPropsType & MapDispatchToPropsType
type ProfileContainerStateType = RouteComponentProps<PathParamsType> & StateAndDispatchPropsType


export class ProfileContainer extends React.Component<ProfileContainerStateType> {

    componentDidMount() {
        let userID = this.props.match.params.userId
        if (!userID) {
            userID = '16626'
        }
        this.props.getUserProfile(userID)
    }

    render() {

        return (
            <div>
                <Profile   {...this.props} profile={this.props.profile}/>
            </div>
        )
    }

}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
})


//let WithRouterProfileContainer = withRouter(ProfileContainer)

//export default withAuthRedirect(connect(mapStateToProps, {getUserProfile})(WithRouterProfileContainer))

export default compose<ComponentType>(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
    withAuthRedirect
) (ProfileContainer)