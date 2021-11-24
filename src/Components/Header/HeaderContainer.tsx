import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {logoutUser} from "../../redux/auth-reducer";


export class HeaderContainer extends React.Component<HeaderPropsType> {
    render() {
        return <Header {...this.props} logoutUserCallback={this.props.logoutUser}/>
    }
}


export type HeaderPropsType = mapStateToPropsType & mapDispatchToPropsType
type mapStateToPropsType = ReturnType<typeof mapStateToProps>
type mapDispatchToPropsType = {
    logoutUser: () => void
}

const mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, {logoutUser})(HeaderContainer)