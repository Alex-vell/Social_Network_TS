import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {DataType, setAuthUserData} from "../../redux/auth-reducer";


type ResponseAuthType = {
    fieldsErrors: []
    messages: []
    resultCode: number
    data: DataType
    isAuth: boolean
}


export class HeaderContainer extends React.Component<HeaderPropsType> {
    componentDidMount() {
        axios.get<ResponseAuthType>('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: true
        })
            .then(response => {
                debugger
                if (response.data.resultCode === 0) {
                    this.props.setAuthUserData(response.data.data, response.data.isAuth)
                }
            })
    }

    render() {

        return <Header {...this.props}/>
    }
}


export type HeaderPropsType = mapStateToPropsType & mapDispatchToPropsType
type mapStateToPropsType = ReturnType<typeof mapStateToProps>
type mapDispatchToPropsType = {
    setAuthUserData: (data: DataType, isAuth: boolean) => void
}

const mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.data.login
    }
}

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)