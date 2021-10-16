import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";

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

export class  ProfileContainer extends React.Component<ProfileContainerStateType>{

    componentDidMount() {
        let userID = this.props.match.params.userId
        /*if (!userID){
            userID = '16626'
        }*/
        axios.get<any>(`https://social-network.samuraijs.com/api/1.0/profile/`+`${userID ? userID : '16626'}`)
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