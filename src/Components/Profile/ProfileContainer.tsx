import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";

type ProfileContainerStateType = MapStateToPropsType & MapDispatchToPropsType

export class  ProfileContainer extends React.Component<ProfileContainerStateType>{

    componentDidMount() {
        axios.get<any>(`https://social-network.samuraijs.com/api/1.0/profile/16626`)
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

type MapStateToPropsType = ReturnType<typeof mapStateToProps>
type MapDispatchToPropsType = {
    setUserProfile: (profile: any | null) => void
}

const mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)