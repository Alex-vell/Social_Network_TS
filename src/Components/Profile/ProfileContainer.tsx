import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";

type PathParamsType = {
    userId: string
}
type MapStateToPropsType = {
    profile: any
    isAuth: boolean
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
        if (!this.props.isAuth) return <Redirect to={'/login'}/>

        return (
            <div>
                <Profile   {...this.props} profile={this.props.profile}/>
            </div>
        )
    }

}


const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})


let WithRouterProfileContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUserProfile})(WithRouterProfileContainer)