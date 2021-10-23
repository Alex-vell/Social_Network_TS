import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {profileAPI} from "../../api/api";

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
type ProfileContainerStateType = RouteComponentProps<PathParamsType> & StateAndDispatchPropsType


export class ProfileContainer extends React.Component<ProfileContainerStateType> {

    componentDidMount() {
        let userID = this.props.match.params.userId
        if (!userID) {
            userID = '16626'
        }
        profileAPI.getProfile(userID).then(data => {
            this.props.setUserProfile(data)
        })
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
    profile: state.profilePage.profile
})


let WithRouterProfileContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(WithRouterProfileContainer)